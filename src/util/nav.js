import { onLerpStart } from "../core/camera"
import { colors } from "./constants"

export const useNav = () => {
    const nav = document.querySelector('.nav')

    nav.style.backgroundColor = colors.block[0]
    const buttons = nav.children

    for (let i = 0; i < buttons.length; i++) {
        const button = buttons.item(i)

        button.style.backgroundColor = colors.block[1]
        button.style.color = colors.block[2]
        button.addEventListener(
            'click',
            e => onLerpStart(cameraPosition[e.target.getAttribute('data-face')], controls)
        )
    }
}