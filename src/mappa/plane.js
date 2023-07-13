import { DoubleSide, Mesh, MeshBasicMaterial, PlaneGeometry } from "three";

const planeGeometry = new PlaneGeometry(5, 5, 5);
const planeMaterial = new MeshBasicMaterial({ color: 0x00ff00, side: DoubleSide });
const planeMesh = new Mesh(planeGeometry, planeMaterial);
planeMesh.rotation.x = Math.PI / 2;
planeMesh.position.y = -1;


export { planeMesh as plane }