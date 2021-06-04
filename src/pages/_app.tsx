import React from 'react'
import ThemeProvider from '../contexts/theme/provider'
import '../styles/themes/tailwind.css'
import GlobalStyles from '../styles/global'
import CartProvider from '../contexts/cart/provider'
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <CartProvider>
                <GlobalStyles />
                <Component {...pageProps} />
            </CartProvider>
        </ThemeProvider>
    )
}

export default MyApp
