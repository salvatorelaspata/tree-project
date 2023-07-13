import { PerspectiveCamera } from "three";
import { sizes } from "../util/constants";
// Create a camera

const camera = new PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
export default camera; 