import { Color } from "three";
import { hemiLight } from "../core/lights";

// UNUSED
export const uniforms = {
    'topColor': { value: new Color(0x0077ff).copy(hemiLight.color) },
    'bottomColor': { value: new Color(0xffffff) },
    'offset': { value: 33 },
    'exponent': { value: 0.6 }
};

const STONE = 'stone'
const AIR = 'air'
const WATER = 'water'

export const CORE_SETTINGS = {
    // CHUNK
    CHUNK: {
        SIZE: 16,
        HEIGHT: 150, // 384,
        START: -5, // -64,
        SURFACEY: 0, // 100;
        TRAINING: {
            FIXED: 'fixed',
            RANDOM: 'random',
            SMOOTH: 'smooth',
            SMOOTH2D: 'smooth2d'
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