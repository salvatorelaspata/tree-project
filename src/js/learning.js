import '../css/style.css'
console.time('import');
// CORE COMPONENTS
import { CORE_SETTINGS } from '../util/constants';
import { rerenderer } from '../core/renderer';
import scene from '../core/scene';
import camera from '../core/camera';
import controls from '../core/controls';
import lights from '../core/lights';
import ground from '../components/ground';
import chunk from '../components/chunk';
import { Group } from 'three';
console.timeEnd('import');
console.time('init');
// POPOLATE SCENE
console.time('camera')
scene.add(camera);
console.timeEnd('camera')
// Lights
console.time('lights')
scene.add(lights);
console.timeEnd('lights')
// PLANE
console.time('ground')
scene.add(ground(CORE_SETTINGS.CHUNK.SURFACEY));
console.timeEnd('ground')
// CHUNK
const { CHUNK: { SIZE, TRAINING } } = CORE_SETTINGS;
const origin = 0
const getNextXStart = (xStart, r = 1) => xStart + SIZE * r + SIZE * r / 2
// call nested getNextStat from i such as getNextXStart(getNextXStart(origin)) but dynamically
const next = (i, r) => {
    if (i === 0) return origin
    return getNextXStart(next(i - 1, r))
}

// FIXED
console.time('chunk-fixed')
scene.add(chunk({ xStart: next(0), zStart: origin, mode: TRAINING.FIXED }))
console.timeEnd('chunk-fixed')
// RANDOM
console.time('chunk-random')
scene.add(chunk({ xStart: next(1), zStart: origin, mode: TRAINING.RANDOM }))
console.timeEnd('chunk-random')

// SMOOTH
console.time('chunk-smooth')
const originSmooth = next(2)
const groupSmooth = new Group()
groupSmooth.add(chunk({ xStart: originSmooth, zStart: origin, mode: TRAINING.SMOOTH }))
groupSmooth.add(chunk({ xStart: originSmooth, zStart: origin + SIZE, mode: TRAINING.SMOOTH }))
scene.add(groupSmooth)
console.timeEnd('chunk-smooth')

// SMOOTH2D
console.time('chunk-smooth2d')
const originSmooth2D = next(3)
const groupSmooth2D = new Group()
groupSmooth2D.add(chunk({ xStart: originSmooth2D, zStart: origin, mode: TRAINING.SMOOTH2D }))
groupSmooth2D.add(chunk({ xStart: originSmooth2D, zStart: origin + SIZE, mode: TRAINING.SMOOTH2D }))
groupSmooth2D.add(chunk({ xStart: originSmooth2D + SIZE, zStart: origin, mode: TRAINING.SMOOTH2D }))
groupSmooth2D.add(chunk({ xStart: originSmooth2D + SIZE, zStart: origin + SIZE, mode: TRAINING.SMOOTH2D }))
scene.add(groupSmooth2D)
console.timeEnd('chunk-smooth2d')
// PERLIN
console.time('chunk-perlin')
const originPerlin = next(4) + SIZE
const groupPerlin = new Group()
groupPerlin.add(chunk({ xStart: originPerlin, zStart: origin, mode: TRAINING.PERLIN }))
groupPerlin.add(chunk({ xStart: originPerlin, zStart: origin + SIZE, mode: TRAINING.PERLIN }))
groupPerlin.add(chunk({ xStart: originPerlin + SIZE, zStart: origin, mode: TRAINING.PERLIN }))
groupPerlin.add(chunk({ xStart: originPerlin + SIZE, zStart: origin + SIZE, mode: TRAINING.PERLIN }))
scene.add(groupPerlin)
console.timeEnd('chunk-perlin')
console.timeEnd('init');

// console.time('render');
rerenderer();
// console.timeEnd('render');

// Animation
(function animation() {
    // Update controls
    controls.update();
    // Render
    // console.time('animationRender');
    rerenderer();
    // console.timeEnd('animationRender');
    // Call animation again on the next frame
    window.requestAnimationFrame(animation);
    // logging
    // log();
})();
console.time('complete');
document.onreadystatechange = () => {
    console.log(document.readyState)
    if (document.readyState === 'complete') {
        console.timeEnd('complete');
        console.log('DOM is ready, but images and other external resources are still loading.')
    }
};