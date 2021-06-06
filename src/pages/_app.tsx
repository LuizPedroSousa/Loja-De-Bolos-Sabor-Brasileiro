import React from 'react'
import ThemeProvider from '../contexts/theme/provider'
import '../styles/themes/tailwind.css'
import GlobalStyles from '../styles/global'
import CartProvider from '../contexts/cart/provider'
import CakeProvider from '../contexts/cake/provider'
function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <CakeProvider>
                <CartProvider>
                    <GlobalStyles />
                    <Component {...pageProps} />
                </CartProvider>
            </CakeProvider>
        </ThemeProvider>
    )
}

export default MyApp
