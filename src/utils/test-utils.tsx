import React, { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import '@testing-library/jest-dom'
import ThemeProvider from '../contexts/theme/provider'
import GlobalStyles from '../styles/global'
const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, 'queries'>
) =>
    render(
        <ThemeProvider>
            <GlobalStyles />
            {ui}
        </ThemeProvider>,
        options
    )

export * from '@testing-library/react'

export { customRender as render }
