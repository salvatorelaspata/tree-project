import { Color, Vector3 } from "three";
import { hemiLight } from "../core/lights";

const STONE = 'stone'
const AIR = 'air'
const WATER = 'water'

export const CORE_SETTINGS = {
    // CAMERA
    CAMERA: {
        FOV: 50,
        NEAR: 1,
        FAR: 5000,
        POSITION: {
            X: 55,
            Y: 38,
            Z: 110
        },
        TARGET: {
            X: 55,
            Y: 0,
            Z: 0
        }
    },
    // CHUNK
    CHUNK: {
        SIZE: 16,
        HEIGHT: 150, // 384,
        START: -3, // -64,
        SURFACEY: 0, // 100;
        AMPLITUDE_FROM_SURFACEY: 10, // from surface y
        FREQUENCY: 0.6,
        TRAINING: {
            FIXED: 'fixed',
            RANDOM: 'random',
            SMOOTH: 'smooth',
            SMOOTH2D: 'smooth2d',
            PERLIN: 'perlin',
        }
    },
    // MATERIAL
    BLOCK: {
        SIZE: 1,
        TYPE: {
            STONE,
            AIR,
            WATER
        }
    }
}

export const colors = {
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

export const cameraPosition = {
    n: new Vector3(-25, 38, -240),
    e: new Vector3(-200, 38, 110),
    s: new Vector3(55, 38, 200),
    w: new Vector3(200, 38, 110),
    top: new Vector3(55, 180, 0)
};

// UNUSED
export const uniforms = {
    'topColor': { value: new Color(0x0077ff).copy(hemiLight.color) },
    'bottomColor': { value: new Color(0xffffff) },
    'offset': { value: 33 },
    'exponent': { value: 0.6 }
};
