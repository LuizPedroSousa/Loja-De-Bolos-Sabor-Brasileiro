import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled.div`
    ${tw`
        w-full h-full flex
        flex-col bg-white rounded-md
        p-2
    `};
    footer {
        ${tw`
            mt-1
        `};
        p {
            ${tw`
                block leading-4 text-blue-50 font-medium sm:leading-4 mb-auto

            `};
            span {
                ${tw`
                    text-gray-800 font-bold
                `};
            }
            strong {
                ${tw`
                    text-orange-500 font-semibold
                `};
            }
        }

        svg {
            ${tw`text-xs`};
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        footer {
            p {
                font-size: calc(${theme`fontSize.sm`} - 0.15rem);
            }
        }
    }
`

export const CakeThumb = styled.div`
    ${tw`
        w-full h-40 overflow-hidden
        rounded-lg border-2 border-gray-500
        sm:(h-32) md:(h-36)
    `};

    border-width: 1px;
`

export const CakeName = styled.strong`
    ${tw`
        block leading-4 mt-2 sm:leading-3
        text-blue-900 font-medium
    `};
    @media ${({ theme: { bp } }) => bp.sm} {
        font-size: calc(${theme`fontSize.sm`} - 0.15rem);
        line-height: calc(${theme`lineHeight.3`} + 0.25rem);
    }

    @media ${({ theme: { bp } }) => bp.md} {
        font-size: calc(${theme`fontSize.sm`} - 0.08rem);
    }
`
