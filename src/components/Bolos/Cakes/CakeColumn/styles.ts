import { motion } from 'framer-motion'
import { shade } from 'polished'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
interface ContainerProps {
    hasCakeInCart: boolean
}

export const Container = styled(motion.div)<ContainerProps>`
    ${tw`
        w-full bg-white border-2
        flex items-start justify-center
        flex-col p-4 rounded-md mx-auto
        transition-colors
    `};

    border-width: 1px;
    max-width: 18.125rem;
    height: 28rem;

    :hover {
        ${tw`
            shadow-md border-orange-100
        `};
        &,
        header {
            background-color: ${shade(0.01, theme`colors.white`)};
        }
    }

    header {
        ${tw`
            w-full rounded-md overflow-hidden
            mb-2 cursor-pointer h-56
        `};
        img {
            ${tw`transition-all`}
        }
        :hover {
            img {
                ${tw`
                    transform scale-110
                `};
            }
        }
    }
    > div {
        ${tw`flex flex-col items-start justify-start h-32`}
        p {
            :first-of-type {
                ${tw`
                    text-blue-700 font-semibold text-md
                    capitalize
                `};
                line-height: 140%;
            }
            :last-of-type {
                ${tw`
                font-inter
            `};
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-line-clamp: 2; /* number of lines to show */
                -webkit-box-orient: vertical;
                line-height: 143%;
            }
        }
        strong {
            ${tw`
            text-blue-500 text-2xl
            font-inter mt-auto
            `};
            line-height: 150%;
        }
    }

    footer {
        ${tw`
            w-full flex items-center
            justify-between mt-auto
        `};
        div {
            ${tw`
                flex items-center justify-start
            `};
            span {
                ${tw`
                    ml-2 text-gray-800 font-roboto
                    font-medium
                `};
            }
        }

        button {
            ${tw`
                flex items-center justify-center font-inter
                transition-colors h-9 text-xs w-36 py-2
                rounded-md font-medium hover:bg-orange-500
                hover:text-white hover:border-indigo-300 focus:ring-2
            `};

            ${({ hasCakeInCart }) =>
                hasCakeInCart
                    ? tw`
                        border-orange-500
                        text-orange-500
                    `
                    : tw` border-indigo-500 text-indigo-400`};
            span {
                ${tw`
                    mr-2
                `};
            }
            border-width: 1px;
            :hover {
                span {
                    ${tw`text-white`}
                }
            }
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        footer {
            button {
                font-size: calc(${theme`fontSize.xs`} + 0.1rem);
            }
        }
    }
`
