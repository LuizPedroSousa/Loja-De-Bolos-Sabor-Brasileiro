import React from 'react'
import { createRipples } from 'react-ripples'
import { useTheme } from 'styled-components'

const Ripple: React.FC = ({ children }) => {
    const {
        colors: { orange }
    } = useTheme()
    const MyRipples = createRipples({
        color: orange[500],
        during: 2200
    })

    return <MyRipples>{children}</MyRipples>
}

export default Ripple
