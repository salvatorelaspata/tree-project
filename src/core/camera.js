import { PerspectiveCamera } from "three";
// Create a camera
const camera = new PerspectiveCamera(30, window.innerWidth / window.innerHeight, 1, 5000);
camera.position.set(0, 40, 100);

export default camera; 