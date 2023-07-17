import '../css/style.css'
// CORE COMPONENTS
import { CORE_SETTINGS, cameraPosition, colors } from '../util/constants';
import { rerenderer } from '../core/renderer';
import scene from '../core/scene';
import camera, { cameraLerpAlpha, lerpCamera, onLerpStart } from '../core/camera';
import controls from '../core/controls';
import lights from '../core/lights';
import ground from '../components/ground';
import log from '../util/log';
import { makeChunkSquare, makeChunksDirection } from '../util/utils';
import { useNav } from '../util/nav';

// POPOLATE SCENE
scene.add(camera);
// Lights
lights.forEach(light => scene.add(light));
// PLANE
scene.add(ground(CORE_SETTINGS.CHUNK.SURFACEY));
// CHUNK
const { CHUNK: { TRAINING } } = CORE_SETTINGS;

scene.add(makeChunkSquare({ x: 1, y: 1, z: 1, side: 4, mode: TRAINING.PERLIN }))

scene.add(makeChunksDirection({ x: 0, y: 100, z: 100, direction: 'right', repeat: 20, mode: TRAINING.PERLIN }))

// NAV
useNav();

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

  if (typeof cameraLerpAlpha === "number") {
    lerpCamera(controls);
  }
})();