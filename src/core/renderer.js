import { WebGLRenderer } from "three";
import canvas from "./canvas";
import camera from "./camera";
import scene from "./scene";

const renderer = new WebGLRenderer({
    canvas: canvas,
    antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
export const rerenderer = () => {
    return renderer.render(scene, camera);
}
export default renderer;