import { Euler, PerspectiveCamera } from "three";
import { CORE_SETTINGS } from "../util/constants";

const { CAMERA: { FOV, NEAR, FAR, POSITION: { X, Y, Z } } } = CORE_SETTINGS
// Create a camera
const camera = new PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR, FAR);
camera.position.set(X, Y, Z);
// camera.rotation.set(RX, RY, RZ, 'XYZ');
// camera.lookAt(0, 0, 0);
export default camera; 