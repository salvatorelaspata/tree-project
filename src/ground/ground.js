// import { Color, DoubleSide, Mesh, MeshBasicMaterial, MeshLambertMaterial, PlaneGeometry } from "three";

import { DoubleSide, Mesh, MeshLambertMaterial, PlaneGeometry } from "three";

// create a simple ground plane at the origin
const makeGround = function (y) {
    const ground = new Mesh(
        new PlaneGeometry(1000, 100, 10, 10),
        new MeshLambertMaterial({ color: 0xE1C16E, side: DoubleSide, transparent: true, opacity: 0.5 })
    );

    ground.rotation.x = Math.PI / 2;
    ground.position.y = y;
    ground.receiveShadow = true;
    return ground;
}


export default makeGround;