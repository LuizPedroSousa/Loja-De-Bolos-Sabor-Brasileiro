/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import light from '../../styles/themes/light'

type ThemesType = typeof light

declare module 'styled-components' {
    interface DefaultTheme extends ThemesType {}
}
