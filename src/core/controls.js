
import camera from "./camera";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import canvas from "./canvas";

const controls = new OrbitControls(camera, canvas);
export default controls;
