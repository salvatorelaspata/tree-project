import { Color, Fog, RepeatWrapping, Scene, TextureLoader } from "three";

// create scene
const scene = new Scene();
// add gradient for simulate sky
scene.background = new Color(0x7ec0ee);
// scene.fog = new Fog(0x7ec0ee, 0, 1000);


export default scene;