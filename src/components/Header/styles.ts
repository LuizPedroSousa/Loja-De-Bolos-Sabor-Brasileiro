import styled from 'styled-components'
import { lighten } from 'polished'
import { motion } from 'framer-motion'

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
    z-index: 1000;
    padding: 1.25rem;
    transition: 0.25s;

    @media ${({ theme: { bp } }) => bp.l} {
        padding: 1.25rem 3.438rem;
    }
`

export const Nav = styled.nav`
    @media ${({ theme: { bp } }) => bp.l} {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
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
