import React, { useState } from 'react'
import light from '../../styles/themes/light'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
import Context from './context'
import ReactBreakpoints from 'react-breakpoints'
const { Provider } = Context

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(light)
    const breakpoints = {
        xs: 480,
        sm: 768,
        md: 992,
        l: 1280,
        xl: 1536
    }
    const guessedBreakpoint = breakpoints.xs
    return (
        <ReactBreakpoints
            guessedBreakpoint={guessedBreakpoint}
            breakpoints={breakpoints}
        >
            <Provider value={{ theme }}>
                <StyledComponentsProvider theme={theme}>
                    {children}
                </StyledComponentsProvider>
            </Provider>
        </ReactBreakpoints>
    )
}

export default ThemeProvider
