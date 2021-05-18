import React from 'react'
import { ThemeProvider } from 'styled-components'
import {
    ThemeProvider as CustomThemeProvider,
    Consumer as CustomThemeConsumer
} from '../contexts/theme/provider'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }) {
    return (
        <CustomThemeProvider>
            <CustomThemeConsumer>
                {({ theme }) => (
                    <ThemeProvider theme={theme}>
                        <GlobalStyles />
                        <Component {...pageProps} />
                    </ThemeProvider>
                )}
            </CustomThemeConsumer>
        </CustomThemeProvider>
    )
}

export default MyApp
