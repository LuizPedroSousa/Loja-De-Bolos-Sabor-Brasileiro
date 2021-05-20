import React from 'react'
import ThemeProvider from '../contexts/theme/provider'
import GlobalStyles from '../styles/global'

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <GlobalStyles />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default MyApp
