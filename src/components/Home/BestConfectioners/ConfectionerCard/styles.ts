import styled from 'styled-components'
import { motion } from 'framer-motion'
import { shade } from 'polished'

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    height: 16.125rem;
    position: relative;
    border-top-left-radius: 1.063rem;
    border-top-right-radius: 1.063rem;
    background-color: ${({ theme: { colors } }) => colors.white};
    box-shadow: 0px 1.75848px 4.39621px rgba(0, 0, 0, 0.15);
    border-bottom-left-radius: 2.188rem;
    border-bottom-right-radius: 2.188rem;

    @media ${({ theme: { bp } }) => bp.md} {
        height: 100%;
        :nth-of-type(1),
        :nth-of-type(2) {
            img {
                width: 11.375rem;
                height: 11.375rem;
            }
        }

        :nth-of-type(3),
        :nth-of-type(4) {
            bottom: 4.5em;
            img {
                width: 10.625rem;
                height: 10.625rem;
            }
        }

        :nth-of-type(1) {
            grid-area: first;
        }
        :nth-of-type(2) {
            grid-area: second;
        }
        :nth-of-type(3) {
            grid-area: third;
        }
        :nth-of-type(4) {
            grid-area: four;
        }
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        :nth-of-type(1),
        :nth-of-type(2) {
            strong {
                font-size: calc(
                    ${({ theme: { fontSize } }) => fontSize['2xl']} + 0.25rem
                );
            }
            img {
                width: 14.375rem;
                height: 14.375rem;
            }
        }
        :nth-of-type(3),
        :nth-of-type(4) {
            bottom: 6em;
            strong {
                font-size: calc(
                    ${({ theme: { fontSize } }) => fontSize['2xl']} + 0.2rem
                );
            }
            img {
                width: 13.625rem;
                height: 13.625rem;
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        :nth-of-type(1),
        :nth-of-type(2) {
            strong {
                font-size: calc(
                    ${({ theme: { fontSize } }) => fontSize['2xl']} + 0.3rem
                );
            }
        }
    }

    @media ${({ theme: { bp } }) => bp['2xl']} {
        :nth-of-type(1),
        :nth-of-type(2) {
            img {
                width: 19.375rem;
                height: 19.375rem;
            }
        }
        :nth-of-type(3),
        :nth-of-type(4) {
            img {
                width: 15rem;
                height: 15rem;
            }
        }
    }
`

export const Content = styled.div`
    background-color: ${({ theme: { colors } }) => colors.orange[500]};
    width: 100%;
    height: 100%;
    display: flex;
    border: 6px solid ${({ theme: { colors } }) => colors.white};

    justify-content: flex-end;
    align-items: center;
    border-top-left-radius: 1.063rem;
    border-top-right-radius: 1.063rem;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    padding-bottom: 1rem;

    strong {
        font-weight: 500;
        font-size: ${({ theme: { fontSize } }) => fontSize['2xl']};
        color: ${({ theme: { colors } }) => colors.white};
    }

    @media ${({ theme: { bp } }) => bp.md} {
        padding-bottom: 1.5rem;
    }
`

export const Wave = styled.div`
    position: relative;
    width: 100%;
    svg {
        position: absolute;
        bottom: -4rem;
        width: max-content;
        left: -3rem;
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        svg {
            bottom: -3.5rem;
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        svg {
            bottom: -4.5rem;
        }
    }
`

export const Avatar = styled.div`
    position: absolute;
    z-index: 1;
    top: -5rem;
    img {
        border: 2px solid ${({ theme: { colors } }) => colors.white} !important;
        width: 11.625rem;
        height: 11.625rem;
        border-radius: 50%;
    }
    overflow: hidden;
`

export const SeeProfile = styled(motion.button)`
    width: 100%;
    height: 5rem;
    font: 500 ${({ theme: { fontSize } }) => fontSize['2xl']} Poppins,
        sans-serif;
    color: ${({ theme: { colors } }) => colors.blue[700]};
    background-color: ${({ theme: { colors } }) => colors.white};

    &,
    div {
        border-bottom-left-radius: 2.188rem;
        border-bottom-right-radius: 2.188rem;
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }
    :focus {
        transition: none;
        border: 3px solid ${({ theme: { colors } }) => colors.orange[500]};
    }
    :hover {
        background-color: ${({ theme: { colors } }) =>
            shade(0.05, colors.white)};
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        height: 6rem;
    }
`
