import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { lighten } from 'polished'
interface CartProps {
    numberofitems: number
}

interface LinkListProps {
    hasActivePage: boolean
}

export const HamburgerButton = styled(Button)`
    width: 5rem;
    height: 4rem;
    padding: 1rem;
    background: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiButton-label {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 2rem;
        height: 2rem;
    }
    :hover {
        .MuiButton-label {
            svg {
                fill: shade(0.2, ${({ theme: { colors } }) => colors.white});
            }
        }
    }
`

export const LinkList = styled.li<LinkListProps>`
    width: 100%;
    height: 3rem;
    background-color: shade(0.8, ${({ theme: { colors } }) => colors.bg});
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        padding: 1rem 0;
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
`

export const CartMobal = styled(Button)<CartProps>`
    width: 100%;
    height: 4rem;

    &,
    button {
        display: flex;
        padding: 0.5rem 0;
        align-items: center;
        justify-content: center;
    }

    .MuiButton-label {
        font-size: 0;
        position: relative;
        ::after {
            position: absolute;
            content: '${({ numberofitems }) => String(numberofitems)}';
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            font: 400 ${({ theme: { fontSize } }) => fontSize.sm} Poppins,
                sans-serif;
            color: ${({ theme: { colors } }) => colors.blue[700]};
            left: 6rem;
            width: 1rem;
            height: 1rem;
            border-radius: 50%;
            background-color: ${({ theme: { colors } }) => colors.yellow[400]};
        }
    }
`
