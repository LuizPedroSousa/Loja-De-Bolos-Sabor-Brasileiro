import React from 'react'
import light from '../../styles/themes/light'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ptBR from 'date-fns/locale/pt-BR'
import { MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider as EmotionThemeProvider } from '@emotion/react'
import customMaterialTheme from '../../styles/themes/material-ui'
import customChakraTheme from '../../styles/themes/chakra-ui'

import {
    ColorModeProvider,
    ThemeProvider as ChakraThemeProvider
} from '@chakra-ui/react'
const ThemeProvider: React.FC = ({ children }) => {
    return (
        <StyledComponentsProvider theme={light}>
            <ChakraThemeProvider theme={customChakraTheme}>
                <ColorModeProvider options={{ initialColorMode: 'light' }}>
                    <EmotionThemeProvider theme={customChakraTheme}>
                        <MuiThemeProvider theme={customMaterialTheme}>
                            <MuiPickersUtilsProvider
                                locale={ptBR}
                                utils={DateFnsUtils}
                            >
                                {children}
                            </MuiPickersUtilsProvider>
                        </MuiThemeProvider>
                    </EmotionThemeProvider>
                </ColorModeProvider>
            </ChakraThemeProvider>
        </StyledComponentsProvider>
    )
}

export default ThemeProvider
