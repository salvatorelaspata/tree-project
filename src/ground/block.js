import { BoxGeometry, Mesh, MeshBasicMaterial } from "three";
import { CORE_SETTINGS } from "../util/constants";
const { CHUNK: { SURFACEY, TRAINING, AMPLITUDE_FROM_SURFACEY, FREQUENCY }, BLOCK: { SIZE } } = CORE_SETTINGS;

/**
 * Create a block in the world
 * @param {number} x: x position
 * @param {number} y: y position
 * @param {string} mode: 'fixed' or 'random'
 * @param {number} z: z position
 * @returns {Mesh}
**/
const Block = function (x, y, z, mode = TRAINING.FIXED) {
    // create a box geometry
    const geometry = new BoxGeometry(SIZE, SIZE, SIZE);
    const material = getBlock(x, y, z, mode)
    if (!material) return null;

    const mesh = new Mesh(geometry, material);
    mesh.position.set(x, y + (SIZE / 2), z);
    return mesh;
};

const colors = {
    block: [
        `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
        `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`,
    ],
    water: [
        `rgb(240, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`,
        `rgb(240, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`,
        `rgb(240, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)})`,
    ]
}
const getBlock = function (x, y, z, mode) {
    switch (mode) {
        case TRAINING.FIXED:
            return getBlockFixed({ y });
        case TRAINING.RANDOM:
            return getBlockRandom({ y });
        case TRAINING.SMOOTH:
            return getBlockSmooth({ x, y, z });
        case TRAINING.SMOOTH2D:
            return getBlockSmooth2D({ x, y, z });
        default:
            return getBlockFixed({ y });
    }
}

// # 1 Fixed terrain height
const getBlockFixed = function ({ y }) {
    if (y < SURFACEY) return new MeshBasicMaterial({ color: colors.block[Math.floor(Math.random() * 3)] });
    else return null;
}
// # 2 Random terrain height over SURFACEY
const getBlockRandom = function ({ y }) {
    const rand = Math.random();
    const floor = Math.floor(rand * AMPLITUDE_FROM_SURFACEY);

    const randY = SURFACEY + floor;

    if (y < randY) return new MeshBasicMaterial({ color: colors.block[Math.floor(Math.random() * 3)] });
    else return null;
}
// # 3 Smooth slopes
const getBlockSmooth = function ({ x, y }) {
    const frequency = FREQUENCY;
    const amplitude = AMPLITUDE_FROM_SURFACEY;
    const randY = SURFACEY + Math.floor(Math.sin(x * frequency) * amplitude);
    if (y < randY) return new MeshBasicMaterial({ color: colors.block[Math.floor(Math.random() * 3)] });
    else return null;
}

// # 4 Smooth slopes in 2 dimensions
const getBlockSmooth2D = function ({ x, y, z }) {
    const frequency = FREQUENCY;
    const amplitude = AMPLITUDE_FROM_SURFACEY;
    const xOffset = Math.floor(Math.sin(x * frequency) * amplitude);
    const zOffset = Math.floor(Math.sin(z * frequency) * amplitude);

    const ySurface = SURFACEY + xOffset + zOffset;

    if (y < ySurface) return new MeshBasicMaterial({ color: colors.block[Math.floor(Math.random() * 3)] });
    else return null;
}

export default Block;