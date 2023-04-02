import { useState } from "react"
export type toggler = () => void;
export const UseToggle = (initValue=false) => {
    const [show, setShow] = useState<boolean>(initValue)
    const toggle:toggler = () => setShow(!show)
    return [show, toggle] as const
}

