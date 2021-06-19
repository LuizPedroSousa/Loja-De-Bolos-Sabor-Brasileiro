import styled from 'styled-components'
import tw, { theme } from 'twin.macro'
interface ContainerProps {
    hasCakeInCart: boolean
}

export const Container = styled.div<ContainerProps>`
    ${tw`
        w-full bg-white
        shadow-md
        flex items-start justify-center
        flex-col p-4 rounded-md mx-auto
    `};

    max-width: 18.125rem;

    header {
        ${tw`
            w-full rounded-md overflow-hidden
            mb-2 h-56
        `};
    }

    p {
        :first-of-type {
            ${tw`
                text-blue-700 font-semibold text-md
                mb-1 capitalize
            `};
        }
        :last-of-type {
            ${tw`
                font-inter
            `};
            line-height: 143%;
        }
    }

    strong {
        ${tw`
            text-blue-500 text-2xl
            font-inter
        `};
        line-height: 150%;
    }

    footer {
        ${tw`
            w-full flex items-center
            justify-between mt-3
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
                flex items-center justify-between font-inter
                transition-all h-8 text-xs
                rounded-md font-medium
            `};

            ${({ hasCakeInCart }) =>
                hasCakeInCart
                    ? tw`
                        px-3 py-2 border-orange-500
                        text-orange-100
                    `
                    : tw`px-1 py-2 border-indigo-500 text-indigo-400`};
            span {
                ${tw`
                    mr-2
                `};
            }
            border-width: 1px;
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
