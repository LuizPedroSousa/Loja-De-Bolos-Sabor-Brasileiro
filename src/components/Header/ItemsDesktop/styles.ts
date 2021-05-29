import styled from 'styled-components'
import { lighten, shade } from 'polished'
interface CartProps {
    numberofitems: number
}

interface ListProps {
    hasActivePage: boolean
}

export const UnorderedList = styled.ul`
    display: flex;
    z-index: 9999;
    width: max-content;
    flex-direction: row;
    position: relative;
    margin-left: 12rem;
    align-items: center;
    justify-content: center;
    background-color: inherit;
`

export const List = styled.li<ListProps>`
    height: 3rem;
    background-color: shade(0.8, ${({ theme: { colors } }) => colors.bg});
    display: flex;
    align-items: center;
    width: max-content;
    padding: 0 1rem;
    justify-content: center;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        text-align: center;
        width: 90%;
        transition: 0.25s;
        height: 100%;
        color: ${({ theme: { colors } }) => colors.blue[700]};
        text-decoration: none;
        font-size: ${({ theme: { fontSize } }) => fontSize.md};
        font-weight: 500;
        ::after {
            ${({ hasActivePage, theme: { colors } }) =>
                hasActivePage &&
                `
                content: '';
                position: absolute;
                bottom: 0;
                width: 0.625rem;
                height: 0.625rem;
                background-color: ${colors.orange[500]};
                border-radius: 50%;
            `};
        }
        :hover {
            color: ${({ theme: { colors } }) => lighten(0.2, colors.blue[700])};
            text-decoration: underline;
        }
    }

    button {
        padding: 1rem 0;
    }

    & + li {
        margin-left: 1rem;
    }
`

export const Cart = styled.div<CartProps>`
    color: ${({ theme: { colors } }) => shade(0.05, colors.white)};
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-family: Poppins, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 2rem;
    label {
        transition: 0.25s;
        cursor: pointer;
        :hover {
            color: ${({ theme: { colors } }) => shade(0.2, colors.white)};
        }
    }
    button {
        background-color: inherit;
        span {
            width: 4rem;
            transition: 0.25s;
            height: 4rem;
            position: relative;
            color: ${({ theme: { colors } }) => shade(0.05, colors.white)};
            ::after {
                position: absolute;
                content: '${({ numberofitems }) => String(numberofitems)}';
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                font: 400 ${({ theme: { fontSize } }) => fontSize.md} Poppins,
                    sans-serif;
                color: ${({ theme: { colors } }) => colors.blue[700]};
                left: 0;
                width: 1.625rem;
                height: 1.625rem;
                border-radius: 50%;
                background-color: ${({ theme: { colors } }) =>
                    colors.yellow[400]};
            }
        }
        :hover {
            span {
                color: ${({ theme: { colors } }) => shade(0.2, colors.white)};
            }
        }
    }
`
