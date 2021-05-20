import styled from 'styled-components'
import { lighten, shade } from 'polished'
import { motion } from 'framer-motion'
interface NavBarProps {
    hasViewMenu: boolean
}

interface CartProps {
    numberOfItems: number
}

interface LinkListProps {
    hasActivePage: boolean
}

export const Container = styled(motion.header)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
    z-index: 9999;
    padding: 1.25rem;
    transition: 0.25s;

    @media ${({ theme: { bp } }) => bp.l} {
        padding: 1.25rem 3.438rem;
    }
`

export const Nav = styled.nav<NavBarProps>`
    ul {
        display: ${({ hasViewMenu }) => (hasViewMenu ? 'flex' : 'none')};
        flex-direction: column;
        z-index: 9999;
        width: 100%;
        top: 5rem;
        position: absolute;
        right: 0;
        background-color: ${({ theme: { colors } }) => colors.bg};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 6rem;
        padding-right: 5rem;
        ul {
            width: max-content;
            top: 0;
            display: flex;
            flex-direction: row;
            position: relative;
            background-color: inherit;
        }
    }
`

export const Logo = styled.a`
    cursor: pointer;
    position: relative;
    img {
        width: 5rem;
    }
    @media ${({ theme: { bp } }) => bp.l} {
        bottom: 0.5rem;
        img {
            width: 9rem;
        }
    }
`
export const HamburgerButton = styled.button`
    width: 5rem;
    height: 4rem;
    padding: 1rem;
    background: inherit;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    span {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
        width: 2rem;
        height: 2rem;
    }
    :hover {
        span {
            svg {
                fill: shade(0.2, ${({ theme: { colors } }) => colors.white});
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        display: none;
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

    @media ${({ theme: { bp } }) => bp.l} {
        width: max-content;
        padding: 0 1rem;
        a {
            padding: 0;
        }
        & + li {
            margin-left: 1rem;
        }
    }
`
export const Cart = styled.div<CartProps>`
    display: none;
    color: ${({ theme: { colors } }) => shade(0.05, colors.white)};
    font-size: ${({ theme: { fontSize } }) => fontSize.md};
    font-family: Poppins, sans-serif;
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
                content: '${({ numberOfItems }) => String(numberOfItems)}';
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

    @media ${({ theme: { bp } }) => bp.l} {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const CartMobal = styled.li<CartProps>`
    width: 100%;
    height: 4rem;

    &,
    button {
        display: flex;
        padding: 0.5rem 0;
        align-items: center;
        justify-content: center;
    }

    button {
        width: 80%;
        span {
            font-size: 0;
            color: ${({ theme: { colors } }) => colors.blue[700]};
            position: relative;
            ::after {
                position: absolute;
                content: '${({ numberOfItems }) => String(numberOfItems)}';
                bottom: 0;
                display: flex;
                justify-content: center;
                align-items: center;
                font: 400 ${({ theme: { fontSize } }) => fontSize.sm} Poppins,
                    sans-serif;
                color: ${({ theme: { colors } }) => colors.blue[700]};
                left: 0;
                width: 1rem;
                height: 1rem;
                border-radius: 50%;
                background-color: ${({ theme: { colors } }) =>
                    colors.yellow[400]};
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        display: none;
    }
`
