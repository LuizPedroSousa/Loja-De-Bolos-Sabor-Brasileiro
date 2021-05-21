import styled from 'styled-components'

import BackgroundDotsTop from '../../../../public/images/best-cakes-background-top.svg'
import BackgroundDotsBottom from '../../../../public/images/best-cakes-background-bottom.svg'
import { shade } from 'polished'

export const Section = styled.section`
    height: 59.5rem;
    padding-top: 3.75rem;
    margin-top: 4rem;
    background-color: ${({ theme: { colors } }) => colors.bg};
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media ${({ theme: { bp } }) => bp.l} {
        padding-right: 9.813rem;
    }
`

export const TitleContainer = styled.div`
    padding: 0 1.5rem;
    width: 100%;
    @media ${({ theme: { bp } }) => bp.md} {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-left: 5.5rem;
        margin-top: 0.8rem;
    }
`

export const Title = styled.h2`
    font: 500 calc(${({ theme: { fontSize } }) => fontSize['4xl']} - 0.2rem)
            Poppins,
        sans-serif;
    line-height: 40px;
    color: ${({ theme: { colors } }) => colors.blue[700]};
    position: relative;

    ::after {
        content: '';
        position: absolute;
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        left: -1rem;
        top: 0;
        height: 100%;
        width: 0.75rem;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        font-size: ${({ theme: { fontSize } }) => fontSize['4xl']};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        line-height: 62px;
        ::after {
            left: -3.625rem;
            width: 1.563rem;
        }
        font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
    }

    @media ${({ theme: { bp } }) => bp.l} {
        ::after {
            left: -2.625rem;
        }
    }
`

export const Description = styled.p`
    margin-top: 1rem;
    max-width: 29rem;
    @media ${({ theme: { bp } }) => bp.sm} {
        margin-top: 1.938rem;
    }
    @media ${({ theme: { bp } }) => bp.md} {
        margin: 0;
        display: flex;
        justify-content: space-between;
        max-width: 23.063rem;
        align-items: center;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 36.188rem;
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        max-width: 38.063rem;
    }
`

export const CakesContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    @media ${({ theme: { bp } }) => bp.md} {
        flex-direction: row;
        padding-right: 2.625rem;
        margin-top: 3.625rem;

        justify-content: space-between;
    }
`

export const Cakes = styled.div`
    padding: 0 1rem;
    margin-top: 3.253rem;
    position: relative;
    @media ${({ theme: { bp } }) => bp.md} {
        display: flex;
        align-items: center;
        justify-content: center;
        padding-left: 0;
    }
`

export const BackgroundTop = styled(BackgroundDotsTop as any)`
    width: 18rem;
    position: absolute;
    z-index: 0;
    top: -1rem;
    left: 0.2rem;
    @media ${({ theme: { bp } }) => bp.md} {
        top: -3.2rem;
        left: -0.5rem;
    }
`

export const BackgroundBottom = styled(BackgroundDotsBottom as any)`
    bottom: -2rem;
    height: 20rem;
    z-index: 0;
    right: 0.2rem;
    width: 15rem;
    position: absolute;
    @media ${({ theme: { bp } }) => bp.md} {
        bottom: -4rem;
        right: -2rem;
    }
`

export const SeeMore = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3.125rem;
    color: ${({ theme: { colors } }) => colors.orange[500]};
    font-weight: 500;
    cursor: pointer;
    transition: 0.25s;
    span {
        margin-bottom: 0.25rem;
    }

    :hover {
        span {
            svg {
                fill: ${({ theme: { colors } }) =>
                    shade(0.2, colors.orange[500])};
            }
        }
        color: ${({ theme: { colors } }) => shade(0.2, colors.orange[500])};
    }
`
