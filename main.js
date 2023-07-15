import './style.css'
// CORE COMPONENTS
import { CORE_SETTINGS, cameraPosition, colors } from './src/util/constants';
import { rerenderer } from './src/core/renderer';
import scene from './src/core/scene';
import camera, { cameraLerpAlpha, lerpCamera, onLerpStart } from './src/core/camera';
import controls from './src/core/controls';
import lights from './src/core/lights';
import ground from './src/ground/ground';
import chunk from './src/ground/chunk';
import log from './src/util/log';

// POPOLATE SCENE
scene.add(camera);

// Lights
lights.forEach(light => scene.add(light));

// PLANE
scene.add(ground(CORE_SETTINGS.CHUNK.SURFACEY));
// scene.add(ground(CORE_SETTINGS.CHUNK.HEIGHT + CORE_SETTINGS.CHUNK.START));
// scene.add(ground(CORE_SETTINGS.CHUNK.START));

// SKY
// scene.add(sky);

// CHUNK
const { CHUNK: { SIZE, TRAINING } } = CORE_SETTINGS;
// const fnChunk = block => block !== null && scene.add(block)

const origin = 0 - SIZE / 2
const space = SIZE + SIZE / 2
// FIXED
scene.add(chunk(origin, origin))
// RANDOM
scene.add(chunk(SIZE, origin, TRAINING.RANDOM))
// SMOOTH
scene.add(chunk(SIZE * 2 + SIZE / 2, origin, TRAINING.SMOOTH))
scene.add(chunk(SIZE * 2 + SIZE / 2, origin + SIZE, TRAINING.SMOOTH))
// SMOOTH2D
const originSmooth2D = SIZE * 2 + SIZE * 2
scene.add(chunk(originSmooth2D, origin, TRAINING.SMOOTH2D))
scene.add(chunk(originSmooth2D, origin + SIZE, TRAINING.SMOOTH2D))
scene.add(chunk(originSmooth2D + SIZE, origin, TRAINING.SMOOTH2D))
scene.add(chunk(originSmooth2D + SIZE, origin + SIZE, TRAINING.SMOOTH2D))

// NAV
const nav = document.querySelector('.nav')

nav.style.backgroundColor = colors.block[0]
const buttons = nav.children
console.log(buttons)
for (let i = 0; i < buttons.length; i++) {
  const button = buttons.item(i)

  button.style.backgroundColor = colors.block[1]
  button.addEventListener(
    'click',
    e => onLerpStart(cameraPosition[e.target.getAttribute('data-face')], controls)
  )
}

rerenderer();

// if (typeof cameraLerpAlpha === "number") {
//   lerpCamera();
// }

// Animation
(function animation() {
  // Update controls
  controls.update();
  // Render
  rerenderer();
  // Call animation again on the next frame
  window.requestAnimationFrame(animation);
  // logging
  log();

  if (typeof cameraLerpAlpha === "number") {
    lerpCamera(controls);
  }
})();