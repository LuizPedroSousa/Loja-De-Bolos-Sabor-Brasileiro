import styled from 'styled-components'
import { transparentize } from 'polished'
import { motion } from 'framer-motion'

interface AddToCardProps {
    price: string
}

export const Container = styled(motion.div)`
    width: 100%;
    height: 20.875rem;
    overflow: hidden;
    position: relative;
    z-index: 5;
    box-shadow: none;
    border-radius: 1.25rem;
    img {
        height: 100%;
        width: 100%;
        transition: 0.25s;
    }
    & + & {
        margin-top: 2rem;
    }

    :hover {
        img {
            transform: scale(1.1) !important;
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 24rem;
        height: 24rem;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 24.875rem;
        height: 24.875rem;
        & + & {
            margin-top: 0;
            margin-left: 1.063rem;
        }
    }
    @media ${({ theme: { bp } }) => bp.l} {
        width: 28.875rem;
        height: 28.875rem;
    }
    @media ${({ theme: { bp } }) => bp.xl} {
        width: 30.875rem;
        height: 30.875rem;
    }
`

export const CakeInfo = styled.div`
    background-color: ${({ theme: { colors } }) =>
        transparentize(0.3, colors.orange[500])};
    position: absolute;
    height: 12.224rem;
    padding-left: 0.5rem;
    width: 100%;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${({ theme: { bp } }) => bp.xs} {
        padding-left: 1.875rem;
    }
`

export const Header = styled.div`
    width: 100%;
    strong {
        font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        color: ${({ theme: { colors } }) => colors.white};
    }
    p {
        color: ${({ theme: { colors } }) => colors.white};
        max-width: 18.063rem;
    }
`

export const Footer = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1rem;
    justify-content: space-between;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme: { colors } }) => colors.white};
        text-decoration: none;
        transition: 0.25s;
        :hover {
            text-decoration: underline;
        }
    }
`

export const AddToCard = styled(motion.button)<AddToCardProps>`
    background-color: ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.brown[500]};
    border-top-left-radius: 6.25rem;
    font-weight: 400;
    font-family: Poppins, sans-serif;
    border-bottom-left-radius: 6.25rem;
    padding: 0.5rem 1rem;
    position: relative;
    ::after {
        position: absolute;
        top: -1.45rem;
        color: ${({ theme: { colors } }) => colors.white};
        font: 700 ${({ theme: { fontSize } }) => fontSize.md} Poppins,
            sans-serif;
        left: 0.5rem;
        content: 'R$ ${({ price }) => price}';
    }
`
