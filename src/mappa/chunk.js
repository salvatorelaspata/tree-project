// a chunk is a 16x16x16 block of voxels

import Block from './block';

const chunk = function (xStart, yStart, zStart) {
    const xEnd = xStart + 16;
    const yEnd = yStart + 16;
    const zEnd = zStart + 16;

    // position block in chunk
    const blocks = [];
    for (let x = xStart; x < xEnd; x++) {
        for (let y = yStart; y < yEnd; y++) {
            for (let z = zStart; z < zEnd; z++) {
                blocks.push(new Block(x, y, z));
            }
        }
    }

    return blocks;
};

export default chunk;
