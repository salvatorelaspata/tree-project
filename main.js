import './style.css'
// CORE COMPONENTS
import { rerenderer } from './src/core/renderer';
import scene from './src/core/scene';
import camera from './src/core/camera';
import controls from './src/core/controls';
import lights from './src/core/lights';
import ground from './src/ground/ground';
import chunk from './src/ground/chunk';
import { CORE_SETTINGS } from './src/util/constants';

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

// OBJs
// . . .

// CHUNK
const { CHUNK: { SIZE, TRAINING } } = CORE_SETTINGS;
const fnChunk = block => block !== null && scene.add(block)

chunk(0 - SIZE / 2, 0 - SIZE / 2)
  .forEach(fnChunk);

chunk(SIZE, 0 - SIZE / 2, TRAINING.RANDOM)
  .forEach(fnChunk);

chunk(SIZE * 2 + SIZE / 2, 0 - SIZE / 2, TRAINING.SMOOTH)
  .forEach(fnChunk);

chunk(SIZE * 2 + SIZE * 2, 0 - SIZE / 2, TRAINING.SMOOTH2D)
  .forEach(fnChunk);

rerenderer();

// Animation
(function animation() {
  // Update controls
  controls.update();
  // Render
  rerenderer();
  // Call animation again on the next frame
  window.requestAnimationFrame(animation);
})();