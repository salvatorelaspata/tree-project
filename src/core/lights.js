import { HemisphereLight, AmbientLight } from "three"

const light = new HemisphereLight(0xffffbb, 0x080820, 1)
const light2 = new AmbientLight(0x404040)

export default [light, light2]