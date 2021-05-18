import { createContext } from 'react'
import { ThemesType } from '../../@types/styled-components'

interface ThemeContextProps {
    theme: ThemesType
}

const ThemeContext = createContext({} as ThemeContextProps)
export default ThemeContext
