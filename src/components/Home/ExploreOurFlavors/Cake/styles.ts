import styled from 'styled-components'
import { shade } from 'polished'
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
    position: relative;
    & + & {
        margin-top: 1.75rem;
    }
    box-shadow: 0px 4px 4px rgba(235, 241, 245, 0.5);
    img {
        height: 100%;
        width: 100%;
        transition: 0.25s;
        border-radius: 1.563rem;
        border-bottom-left-radius: 20%;
        border-bottom-right-radius: 20%;
        transition: 0.25s;
    }
    height: 20%;

    cursor: pointer;
    border-radius: 1.563rem;
    overflow: hidden;

    :hover {
        img {
            transform: scale(1.1) !important;
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        height: 25.5rem;
        width: 27rem;
        img {
            border-bottom-left-radius: 50%;
            border-bottom-right-radius: 50%;
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        height: 34.5rem;
        width: 32.063rem;
        img {
            border-bottom-left-radius: 30%;
            border-bottom-right-radius: 30%;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        height: 30.5rem;
        width: auto;
        & + & {
            margin: 0;
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        height: 25.5rem;
    }
`

export const CakeInfo = styled.div`
    height: 9rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    background-color: ${({ theme: { colors } }) => colors.white};
    position: absolute;
    box-shadow: 0px 4px 4px rgba(235, 241, 245, 0.5);
    bottom: 0;

    @media ${({ theme: { bp } }) => bp.xs} {
        height: 10rem;
    }
`

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
    width: 100%;
    p {
        font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        color: ${({ theme: { colors } }) => colors.blue[700]};
        font-weight: 500;
    }
    strong {
        font-size: calc(${({ theme: { fontSize } }) => fontSize['2xl']});
        color: ${({ theme: { colors } }) => colors.orange[500]};
    }
`

export const Footer = styled.footer`
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    p {
        width: max-content;
    }
    button {
        border-top-left-radius: 6.25rem;
        border-bottom-left-radius: 6.25rem;
        width: 20rem;
        color: ${({ theme: { colors } }) => colors.orange[500]};
        font: 400 ${({ theme: { fontSize } }) => fontSize.sm} Poppins,
            sans-serif;
        background-color: ${({ theme: { colors } }) => colors.beige[400]};
        height: 2.813rem;
        overflow: hidden;
        div {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
        }
        :hover {
            background-color: ${({ theme: { colors } }) =>
                shade(0.05, colors.beige[400])};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        margin-top: 0.875rem;
        button {
            width: 48%;
        }
        p {
            width: 48%;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        p {
            width: 58%;
        }
    }
`
