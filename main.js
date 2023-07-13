import './style.css'
// CORE COMPONENTS
import renderer from './src/core/renderer';
import scene from './src/core/scene';
import camera from './src/core/camera';
import controls from './src/core/controls';
import lights from './src/core/lights';
import { cube } from './src/obj/cube';
import { plane } from './src/mappa/plane';
import chunk from './src/mappa/chunk';

// POPOLATE SCENE
scene.add(camera);

// OBJs
scene.add(cube);

// PLANE
scene.add(plane);

// CHUNK
const _chunk = chunk(10, 0, 0);
_chunk.forEach(block => scene.add(block));

// Lights
lights.forEach(light => scene.add(light));

// Animation
(function animation() {
  // Update controls
  controls.update();
  // Render
  renderer.render(scene, camera);
  // Call animation again on the next frame
  window.requestAnimationFrame(animation);
})();