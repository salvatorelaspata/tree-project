import { BackSide, Mesh, ShaderMaterial, SphereGeometry } from "three";
import { uniforms } from "../util/constants";
import scene from "../core/scene";
import { hemiLight } from "../core/lights";

const vertexShader = document.getElementById('vertexShader').textContent;
const fragmentShader = document.getElementById('fragmentShader').textContent;
uniforms['topColor'].value.copy(hemiLight.color);

scene.fog.color.copy(uniforms['bottomColor'].value);

const skyGeo = new SphereGeometry(4000, 32, 15);
const skyMat = new ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
    side: BackSide
});

const sky = new Mesh(skyGeo, skyMat);

export default sky;