// a chunk is a 16x16x16 block of voxels
import { CORE_SETTINGS } from '../util/constants';
import Block from './block';

const { CHUNK: { START, SIZE, HEIGHT } } = CORE_SETTINGS

const chunk = function (xStart, zStart, mode = 'fixed') {
    const yStart = START;
    const xEnd = xStart + SIZE;
    const yEnd = yStart + HEIGHT;
    const zEnd = zStart + SIZE;
    // position block in chunk
    const blocks = [];
    for (let x = xStart; x < xEnd; x++) {
        for (let y = yStart; y < yEnd; y++) {
            for (let z = zStart; z < zEnd; z++) {
                blocks.push(Block(x, y, z, mode));
            }
        }
    }

    return blocks;
};

export default chunk;
