import { Group } from "three";
import chunk from "../components/chunk";
import { CORE_SETTINGS } from "./constants";

const { CHUNK: { SIZE } } = CORE_SETTINGS;

// function to calculate the next position of chunk in scene
const _nextChunkPosition = ({ x, y, z, direction, i }) => {
    switch (direction) {
        case 'left':
            return { x: x - SIZE * i, y, z };
        case 'right':
            return { x: x + SIZE * i, y, z };
        case 'up':
            return { x: x, y: y, z: z - SIZE * i };
        case 'down':
            return { x: x, y: y, z: z + SIZE * i };
        default:
            return { x: x, y: y, z: z };
    }
}

// generator function to create chunks
const _generateChunks = function* ({ x, y, z, direction, repeat, mode }) {
    let i = 0;
    while (i < repeat) {
        const chunkPosition = _nextChunkPosition({ x, y, z, direction, i });
        const chunkMesh = chunk({ xStart: chunkPosition.x, zStart: chunkPosition.z, mode });
        yield chunkMesh;
        i++;
    }
}

export const makeChunksDirection = ({ x, y, z, direction, repeat, mode }) => {
    const group = new Group();
    const chunks = _generateChunks({ x, y, z, direction, repeat, mode });
    for (let chunk of chunks) {
        group.add(chunk);
    }
    return group;
}
/**
 * 
 * @param {object} settings
 * @param {number} settings.x the corner 
 * @param {number} settings.y
 * @param {number} settings.z
 * @param {number} settings.side
 * @param {string} settings.mode 
 * @returns {Group} group
 */
export const makeChunkSquare = ({ x, y, z, side, mode }) => {
    const groups = new Group();
    for (let i = 0; i < side; i++) {
        groups.add(makeChunksDirection({ x, y, z: z + SIZE * i, direction: 'right', repeat: side, mode }));
    }
    return groups
}
// const chunks = [
//     makeChunksDirection({ x, y, z, direction: 'right', repeat: side, mode }),
//     makeChunksDirection({ x, y, z, direction: 'up', repeat: side, mode }),
//     makeChunksDirection({ x, y, z, direction: 'left', repeat: side, mode }),
//     makeChunksDirection({ x, y, z, direction: 'down', repeat: side, mode })
// ];
// for (let chunk of chunks) {
//     group.add(chunk);
// }