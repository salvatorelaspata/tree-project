// Block like minecraft

import { BoxGeometry, CubeTextureLoader, DoubleSide, Mesh, MeshBasicMaterial, TextureLoader } from "three";


const Block = function (x, y, z) {
    const geometry = new BoxGeometry(1, 1, 1);

    // apply "texture" to block from url
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "vite.svg"
    ]);

    const material = new MeshBasicMaterial({ color: 0x00ff00, side: DoubleSide, envMap: texture });
    const mesh = new Mesh(geometry, material);
    mesh.position.set(x, y, z);
    return mesh;
}


export default Block;