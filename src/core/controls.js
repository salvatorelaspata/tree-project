
import camera from "./camera";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
// import { FirstPersonControls } from "three/examples/jsm/controls/FirstPersonControls";
import canvas from "./canvas";
import { CORE_SETTINGS } from "../util/constants";

const { CAMERA: { TARGET: { X, Y, Z } } } = CORE_SETTINGS
const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true; // disabled because loggin smarmelling
// controls.dampingFactor = 0.05; // disabled because loggin smarmelling
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 500;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(X, Y, Z);
// const controls = new FirstPersonControls(camera, canvas);
// controls.movementSpeed = 150;
// controls.lookSpeed = 0.1;
export default controls;
