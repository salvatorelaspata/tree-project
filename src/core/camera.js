import { PerspectiveCamera, Vector3 } from "three";
import { CORE_SETTINGS } from "../util/constants";


const { CAMERA: { FOV, NEAR, FAR, POSITION: { X, Y, Z } } } = CORE_SETTINGS
// Create a camera
const camera = new PerspectiveCamera(FOV, window.innerWidth / window.innerHeight, NEAR, FAR);
camera.position.set(X, Y, Z);

let cameraTarget = new Vector3(0, 0, 0);
export let cameraLerpAlpha;

export const lerpCamera = (controls) => {
    console.log("export const lerpCamera")
    camera.position.lerp(cameraTarget, cameraLerpAlpha);

    if (cameraLerpAlpha < 1) {
        cameraLerpAlpha += 0.005;
    } else {
        onLerpComplete(controls);
    }
};

export const onLerpStart = (target, controls) => {
    console.log("export const onLerpStart", target, camera.position, controls)
    if (!camera.position.equals(target)) {
        controls.enabled = false;
        cameraTarget = target;
        cameraLerpAlpha = 0;
    }
};

const onLerpComplete = (controls) => {
    console.log("const onLerpComplete =")
    camera.position.lerp(cameraTarget, 1);
    controls.enabled = true;
    cameraTarget = undefined;
    cameraLerpAlpha = false;
};

export default camera; 