import { Euler, Vector3 } from "three"
import camera from "../core/camera"

console.log('log.js')

let position = null
const _cameraLog = () => {
    const { position: _position } = camera
    // if the position is null, set the position and return
    if (position === null) {
        position = new Vector3(_position.getComponent(0), _position.getComponent(1), _position.getComponent(2))
        console.log({
            camera: {
                position: camera.position,
                rotation: camera.rotation
            }
        })
    }

    if (_position.getComponent(0) === position.getComponent(0) &
        _position.getComponent(1) === position.getComponent(1) &
        _position.getComponent(2) === position.getComponent(2)) return

    console.log({
        camera: {
            position: camera.position,
            rotation: camera.rotation
        }
    })

    position = new Vector3(_position.getComponent(0), _position.getComponent(1), _position.getComponent(2))
}
const log = () => {
    // log only the value is changed
    _cameraLog()
}


export default log