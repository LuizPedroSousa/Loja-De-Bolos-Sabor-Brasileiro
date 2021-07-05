import styled from 'styled-components'
import tw from 'twin.macro'

export const ArticleItemContainer = styled.li`
    ${tw`
        w-full h-20

    `}
    a {
        ${tw`
            bg-white w-full h-full flex
            items-center justify-start
            pl-4 sm:pl-5 md:pl-6 transition-colors
            rounded-md
            hover:(bg-orange-500 text-white border-2 border-orange-100)
            focus:(border-0 ring-2 ring-orange-100)
        `}
        strong {
            ${tw`
            text-xl font-roboto font-bold
        `};
        }
    }

    & + & {
        ${tw`mt-2`}
    }
`
