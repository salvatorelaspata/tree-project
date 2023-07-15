import '../css/style.css'
// CORE COMPONENTS
import { CORE_SETTINGS } from '../util/constants';
import { rerenderer } from '../core/renderer';
import scene from '../core/scene';
import camera from '../core/camera';
import controls from '../core/controls';
import lights from '../core/lights';
import ground from '../components/ground';
import chunk from '../components/chunk';

// POPOLATE SCENE
scene.add(camera);
// Lights
lights.forEach(light => scene.add(light));
// PLANE
scene.add(ground(CORE_SETTINGS.CHUNK.SURFACEY));
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
scene.add(chunk({ xStart: next(0), zStart: origin, mode: TRAINING.FIXED }))
// RANDOM
scene.add(chunk({ xStart: next(1), zStart: origin, mode: TRAINING.RANDOM }))

// SMOOTH
scene.add(chunk({ xStart: next(2), zStart: origin, mode: TRAINING.SMOOTH }))
scene.add(chunk({ xStart: next(2), zStart: origin + SIZE, mode: TRAINING.SMOOTH }))
// SMOOTH2D
const originSmooth2D = next(3)
scene.add(chunk({ xStart: originSmooth2D, zStart: origin, mode: TRAINING.SMOOTH2D }))
scene.add(chunk({ xStart: originSmooth2D, zStart: origin + SIZE, mode: TRAINING.SMOOTH2D }))
scene.add(chunk({ xStart: originSmooth2D + SIZE, zStart: origin, mode: TRAINING.SMOOTH2D }))
scene.add(chunk({ xStart: originSmooth2D + SIZE, zStart: origin + SIZE, mode: TRAINING.SMOOTH2D }))
// PERLIN
const originPerlin = next(4) + SIZE
scene.add(chunk({ xStart: originPerlin, zStart: origin, mode: TRAINING.PERLIN }))
scene.add(chunk({ xStart: originPerlin, zStart: origin + SIZE, mode: TRAINING.PERLIN }))
scene.add(chunk({ xStart: originPerlin + SIZE, zStart: origin, mode: TRAINING.PERLIN }))
scene.add(chunk({ xStart: originPerlin + SIZE, zStart: origin + SIZE, mode: TRAINING.PERLIN }))

rerenderer();

// Animation
(function animation() {
    // Update controls
    controls.update();
    // Render
    rerenderer();
    // Call animation again on the next frame
    window.requestAnimationFrame(animation);
    // logging
    // log();
})();