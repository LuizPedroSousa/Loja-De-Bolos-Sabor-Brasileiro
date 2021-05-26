import React from 'react'
import light from '../../styles/themes/light'
import { ThemeProvider as StyledComponentsProvider } from 'styled-components'
import Context from './context'
import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import ptBR from 'date-fns/locale/pt-BR'
import { MuiThemeProvider } from '@material-ui/core'
import customTheme from '../../styles/themes/material-ui'
const { Provider } = Context
const ThemeProvider: React.FC = ({ children }) => {
    return (
        <Provider value={{ theme: light }}>
            <StyledComponentsProvider theme={light}>
                <MuiThemeProvider theme={customTheme}>
                    <MuiPickersUtilsProvider locale={ptBR} utils={DateFnsUtils}>
                        {children}
                    </MuiPickersUtilsProvider>
                </MuiThemeProvider>
            </StyledComponentsProvider>
        </Provider>
    )
}

export default ThemeProvider
