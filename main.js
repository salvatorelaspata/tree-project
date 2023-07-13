import './style.css'
// CORE COMPONENTS
import renderer from './src/core/renderer';
import scene from './src/core/scene';
import camera from './src/core/camera';
import controls from './src/core/controls';
import lights from './src/core/lights';
import { cube } from './src/obj/cube';

// POPOLATE SCENE
scene.add(camera);

// OBJs
scene.add(cube);

// PLANE
scene.add(planeMesh);

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