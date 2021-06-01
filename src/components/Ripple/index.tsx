import React from 'react'
import { createRipples } from 'react-ripples'
import { useTheme } from 'styled-components'

interface RippleProps {
    color?: string
}
const Ripple: React.FC<RippleProps> = ({ color, children }) => {
    const {
        colors: { orange }
    } = useTheme()

    const MyRipples = createRipples({
        color: color || orange[500],
        during: 2200
    })

    return <MyRipples>{children}</MyRipples>
}

export default Ripple
