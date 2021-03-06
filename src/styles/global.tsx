import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        .MuiPickersToolbarText-toolbarTxt {
            ${tw`text-white`};
        }
        background-color: ${({ theme: { colors } }) => colors.bg};
        font: 400 ${({ theme: { fontSize } }) =>
            fontSize.sm} Poppins, sans-serif;
        color: ${({ theme: { colors } }) => colors.gray[400]};
    }

    ul,
    li {
        list-style: none;
    }
    hr {
        border: 0;
    }
    button {
        cursor: pointer;
        outline: 0 !important;
        transition: 0.25s;
    }
    @media (min-width: 1080px) {
        html {
            font-size: 93.75%;
        }
    }
`

const GlobalStyles: React.FC = () => {
    return (
        <>
            <CustomStyles />
            <BaseStyles />
        </>
    )
}

export default GlobalStyles
