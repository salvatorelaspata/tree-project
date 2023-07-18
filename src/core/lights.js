import { HemisphereLight, AmbientLight, HemisphereLightHelper, DirectionalLight, DirectionalLightHelper, Group } from "three"
export const hemiLight = new HemisphereLight(0xffffff, 0xffffff, 2);
hemiLight.color.setHSL(0.6, 1, 0.6);
hemiLight.groundColor.setHSL(0.095, 1, 0.75);
hemiLight.position.set(0, 50, 0);

const hemiLightHelper = new HemisphereLightHelper(hemiLight, 10);

const dirLight = new DirectionalLight(0xffffff, 3);
dirLight.color.setHSL(0.1, 1, 0.95);
dirLight.position.set(- 1, 1.75, 1);
dirLight.position.multiplyScalar(30);

dirLight.castShadow = true;

dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

const d = 50;

dirLight.shadow.camera.left = - d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = - d;

dirLight.shadow.camera.far = 3500;
dirLight.shadow.bias = - 0.0001;

const dirLightHelper = new DirectionalLightHelper(dirLight, 10);

const lights = new Group()
// new HemisphereLight(0xffffbb, 0x080820, 1),
// new AmbientLight(0x404040),
lights.add(hemiLight);
lights.add(hemiLightHelper);
// dirLight,
// dirLightHelper,


export default lights