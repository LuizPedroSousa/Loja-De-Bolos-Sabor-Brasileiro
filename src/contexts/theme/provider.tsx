import React, { useState } from 'react'
import light from '../../styles/themes/light'

import Context from './context'
const { Provider, Consumer } = Context

const ThemeProvider: React.FC = ({ children }) => {
    const [theme, setTheme] = useState(light)

    return <Provider value={{ theme }}>{children}</Provider>
}

export { ThemeProvider, Consumer }
