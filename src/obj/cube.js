import { Mesh } from "three";
import { MeshBasicMaterial } from "three";
import { BoxGeometry } from "three";

const geometry = new BoxGeometry(1, 1, 1);
const material = new MeshBasicMaterial({ color: 0x0000ff });
const mesh = new Mesh(geometry, material);

export { mesh as cube }