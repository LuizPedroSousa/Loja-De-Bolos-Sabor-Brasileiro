import React, { useState } from 'react'
import ThemeProvider from '../contexts/theme/provider'
import '../styles/themes/tailwind.css'
import GlobalStyles from '../styles/global'
import CartProvider from '../contexts/cart/provider'
import CakeProvider from '../contexts/cake/provider'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Hydrate } from 'react-query/hydration'
import { FavoriteProvider } from 'contexts/favorite/provider'
function MyApp({ Component, pageProps }) {
    const [queryClient] = useState(() => new QueryClient())
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <ThemeProvider>
                    <CakeProvider>
                        <FavoriteProvider>
                            <CartProvider>
                                <GlobalStyles />
                                <Component {...pageProps} />
                            </CartProvider>
                        </FavoriteProvider>
                    </CakeProvider>
                </ThemeProvider>
            </Hydrate>
        </QueryClientProvider>
    )
}

export default MyApp
