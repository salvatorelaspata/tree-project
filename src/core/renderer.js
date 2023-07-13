import { WebGLRenderer } from "three";
import { sizes } from "../util/constants";
import canvas from "./canvas";
import camera from "./camera";
import scene from "./scene";

const renderer = new WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
export const rerender = () => {
    rerender.render(scene, camera);
}
export default renderer;