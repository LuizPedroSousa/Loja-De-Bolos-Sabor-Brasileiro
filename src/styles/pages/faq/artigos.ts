import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled.article`
    ${tw`
        w-full mx-auto mt-8 l:mt-20
        sm:(px-6 mt-16 mb-20) md:px-0
    `}
    height: 100%;
    max-width: 94%;

    @media ${({ theme: { bp } }) => bp.sm} {
        max-width: 768px;
    }
`

export const ArticleHeader = styled.header`
    h2 {
        ${tw`
            font-roboto text-3xl capitalize
            font-bold
            text-gray-800 xs:text-4xl sm:text-5xl
        `}
    }
`

export const ArticleContent = styled(motion.section)`
    ${tw`mt-4 sm:mt-6 md:mt-8`}
    p {
        ${tw`
                font-sans font-medium text-lg
                mt-3 xs:mt-4
        `}
    }
`

export const ArticleFooter = styled.footer`
    ${tw`w-full mt-10`}
    div {
        :nth-of-type(1) {
            ${tw`
                grid grid-cols-3 gap-x-2
                xs:(grid-cols-2 gap-2) sm:(grid-cols-3 gap-x-6)
                l:(gap-x-8)
            `}

            button,
            a {
                ${tw`
                w-full bg-orange-500 flex
                items-center justify-center
                text-white font-medium h-32
                capitalize text-md rounded-md
                transition-colors
                hover:(border-2 bg-white text-orange-500 border-orange-100)
                flex-col xs:py-8 sm:(flex-row h-20)
            `}
                span {
                    ${tw`
                        text-3xl mb-1 sm:(mb-0 mr-2)
                    `}
                }
            }
        }
        :nth-of-type(2) {
            ${tw`
                flex items-center justify-center
                w-full my-6 flex-col xs:flex-row
                sm:my-8 l:my-10
            `}
            p {
                ${tw`font-medium font-sans xs:(mr-2) sm:text-xl`}
            }
            a {
                ${tw`
                    text-orange-500 font-semibold sm:text-xl
                `}
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.xs} {
        div {
            :first-of-type {
                grid-template-areas: 'instagram whatsapp' 'telefone telefone';
                a:first-of-type {
                    grid-area: instagram;
                }
                a:first-of-type {
                    grid-area: whatsapp;
                }
                button {
                    grid-area: telefone;
                }
            }
        }
    }
    @media ${({ theme: { bp } }) => bp.sm} {
        div {
            :first-of-type {
                grid-template-areas: auto;
                a,
                button {
                    grid-area: auto;
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        div {
            :first-of-type {
                button,
                a {
                    height: calc(${theme`spacing.20`} - 0.75rem);
                }
            }
        }
    }
`
