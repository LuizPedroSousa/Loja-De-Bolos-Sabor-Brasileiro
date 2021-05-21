import { motion } from 'framer-motion'
import { shade } from 'polished'
import styled from 'styled-components'
import Background from '../../../../public/images/carousel-background.svg'

interface ArrowsProps {
    hasNext: boolean
    hasPrevious: boolean
}
export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media ${({ theme: { bp } }) => bp['3md']} {
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: 1fr max-content;
        grid-template-areas:
            'search carousel'
            'contact carousel';
    }

    @media ${({ theme: { bp } }) => bp.l} {
        grid-template-columns: 50% 48%;
    }
`
export const SearchLocals = styled.div`
    margin: 0 1.25rem;
    grid-area: search;
    span {
        font-size: 6.25rem;
        font-weight: 900;
        line-height: 48px;
        color: ${({ theme: { colors } }) => colors.blue[700]};
        opacity: 5%;
    }

    h2 {
        font-size: calc(
            ${({ theme: { fontSize } }) => fontSize['4xl']} - 0.25rem
        );
        margin-top: 1.625rem;
        font-weight: 700;
        color: ${({ theme: { colors } }) => colors.blue[700]};
        line-height: 40px;
        text-transform: capitalize;
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        span {
            font-size: ${({ theme: { fontSize } }) => fontSize['10xl']};
        }
        h2 {
            line-height: 48px;
            font-size: ${({ theme: { fontSize } }) => fontSize['5xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        h2 {
            margin-top: 1.25rem;
            font-size: ${({ theme: { fontSize } }) => fontSize['6xl']};
            line-height: 70px;
        }
        span {
            font-size: ${({ theme: { fontSize } }) => fontSize['11xl']};
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        margin-left: 3.438rem;
        span {
            font-size: ${({ theme: { fontSize } }) => fontSize['14xl']};
        }
        h2 {
            margin-top: 1.875rem;
            font-size: 3.875rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        h2 {
            margin-top: 1.875rem;
            font-size: 4.375rem;
        }
        span {
            font-size: ${({ theme: { fontSize } }) => fontSize['15xl']};
        }
        margin-left: 5rem;
    }
`
export const InputGroup = styled.form`
    height: 5rem;
    width: 100%;
    padding: 0.688rem;
    display: flex;
    align-items: center;
    margin-top: 2.188rem;
    justify-content: space-between;
    background-color: ${({ theme: { colors } }) => colors.white};
    :focus-within {
        border-radius: 8px;
        border: 2px solid ${({ theme: { colors } }) => colors.orange[500]};
    }
    input {
        width: 70%;
        height: 100%;
        padding: 0.625rem 0;
        padding-left: 0.5rem;
        border: 0;
        color: ${({ theme: { colors } }) => colors.orange[500]};
        ::placeholder {
            color: ${({ theme: { colors } }) => colors.blue[700]};
            opacity: 60%;
            font: 400 calc(${({ theme: { fontSize } }) => fontSize.sm} - 0.2rem)
                    Poppins,
                sans-serif;
        }
        outline: none;
    }
    button {
        height: 100%;
        color: ${({ theme: { colors } }) => colors.white};
        display: flex;
        align-items: center;
        border-top-left-radius: 2.25rem;
        font-weight: 600;
        justify-content: center;
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        width: 30%;
        font-size: ${({ theme: { fontSize } }) => fontSize.lg};
        :hover {
            background-color: ${({ theme: { colors } }) =>
                shade(0.2, colors.orange[500])};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        input {
            ::placeholder {
                font-size: ${({ theme: { fontSize } }) => fontSize.md};
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        width: 80%;
    }

    @media ${({ theme: { bp } }) => bp.md} {
        width: 33.188rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        width: 40rem;
        height: 5.625rem;
        input {
            ::placeholder {
                font-size: ${({ theme: { fontSize } }) => fontSize.lg};
            }
            padding-left: 1.75rem;
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
        button {
            font-size: ${({ theme: { fontSize } }) => fontSize['3xl']};
            border-top-left-radius: 3.75rem;
            width: 12.5rem;
        }
    }
    @media ${({ theme: { bp } }) => bp.xl} {
        width: 41.875rem;
        input {
            padding-left: 3.125rem;
        }
    }
`

export const LocalContact = styled.div`
    height: 4rem;
    width: 100%;
    display: flex;
    margin-top: 3.125rem;
    align-items: center;
    grid-area: contact;

    a {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        border-top-right-radius: 100px;
        border-bottom-right-radius: 100px;
        color: ${({ theme: { colors } }) => colors.white};
        span {
            margin-right: 1rem;
            font-size: 0;
        }
        background-color: ${({ theme: { colors } }) => colors.orange[500]};
        height: 100%;
        padding: 0 1rem;
        text-decoration: none;
        font-weight: 500;
        text-transform: capitalize;
        transition: 0.25s;
        :hover {
            text-decoration: underline;
            background-color: ${({ theme: { colors } }) =>
                shade(0.2, colors.orange[500])};
        }
    }
    button {
        height: 100%;
        width: 4.063rem;
        font-size: 0;
        color: ${({ theme: { colors } }) => colors.white};
        background-color: ${({ theme: { colors } }) => colors.green[400]};
        border-radius: 50%;
        margin-left: 1rem;

        :hover {
            background-color: ${({ theme: { colors } }) =>
                shade(0.2, colors.green[400])};
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        a {
            width: 61%;
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        margin-top: 6rem;
        a {
            padding-right: 3rem;
            width: max-content;
            font-size: ${({ theme: { fontSize } }) => fontSize.xl};
        }
    }

    @media ${({ theme: { bp } }) => bp.xl} {
        margin-top: 11.188rem;
        a {
            font-size: ${({ theme: { fontSize } }) => fontSize['3xl']};
        }
    }
`
export const CarouselOverlay = styled.div`
    margin-top: 2rem;
    margin-bottom: 2rem;
    grid-area: carousel;
    position: relative;
    height: 20rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${({ theme: { bp } }) => bp.sm} {
    }

    @media ${({ theme: { bp } }) => bp.md} {
        margin: 0;
    }
`

export const CarouselContent = styled.div`
    width: max-content;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CarouselItem = styled(motion.div)`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    img {
        width: 33.563rem;
        border-radius: 2rem;
        padding: 0.5rem !important;
    }

    .store-front {
    }

    @media ${({ theme: { bp } }) => bp.l} {
        img {
            width: 35.688rem;
        }
    }
`

export const CarouselBackground = styled(Background as any)`
    top: 0;
    left: 0;
    position: absolute;
    width: 18.813rem;
    height: 22.125rem;
    z-index: -2;

    @media ${({ theme: { bp } }) => bp.sm} {
        width: 19.5rem;
        height: 28.063rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        top: -5rem;
        height: 30rem;
    }
`

export const Arrows = styled.div<ArrowsProps>`
    height: 2rem;
    width: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    position: absolute;
    z-index: 99;
    bottom: -4rem;
    right: 0;
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        background: inherit;
        & + button {
            margin-left: 1rem;
        }
        transition: 0.25s;
        height: 4rem;
        width: 4rem;
        :first-of-type {
            cursor: ${({ hasPrevious }) =>
                !hasPrevious ? 'no-drop' : 'pointer'};
            opacity: ${({ hasPrevious }) => (!hasPrevious ? 0.5 : 1)};
        }
        :last-of-type {
            cursor: ${({ hasNext }) => (!hasNext ? 'no-drop' : 'pointer')};
            opacity: ${({ hasNext }) => (!hasNext ? 0.5 : 1)};
        }
        :hover {
            svg {
                circle {
                    transition: 0.25s;
                    stroke: ${({ theme: { colors } }) =>
                        shade(0.2, colors.white)};
                }
                path {
                    transition: 0.25s;

                    fill: ${({ theme: { colors } }) =>
                        shade(0.2, colors.white)};
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        bottom: -6rem;
    }
`
