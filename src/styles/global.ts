import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme: { colors } }) => colors.bg};
        font: 400 ${({ theme: { fontSize } }) =>
            fontSize.sm} Poppins, sans-serif;
    }
`
