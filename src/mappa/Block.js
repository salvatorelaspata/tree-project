// Block like minecraft

import { BoxGeometry, DoubleSide, Mesh, MeshBasicMaterial, TextureLoader } from "three";

const texture = new TextureLoader().load('https://i.redd.it/wly7g262kw461.jpg');
const Block = function (x, y, z, type = 'stone') {
    const geometry = new BoxGeometry(1, 1, 1);

    // create a stone block
    const material = new MeshBasicMaterial({ map: texture, side: DoubleSide });
    const mesh = new Mesh(geometry, material);
    mesh.position.set(x, y, z); z

    return mesh;
}

export default Block;