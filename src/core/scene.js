import { Color, RepeatWrapping, Scene, TextureLoader } from "three";
const scene = new Scene();
// colore sfumato come il colore di sfondo di unity
const texture = new TextureLoader().load("https://png.pngtree.com/png-clipart/20220215/ourmid/pngtree-blue-sky-and-white-clouds-png-image_4391818.png");
// texture.wrapS = RepeatWrapping;
// texture.wrapT = RepeatWrapping;
// texture.repeat.set(4, 4);

scene.background = texture;

export default scene;