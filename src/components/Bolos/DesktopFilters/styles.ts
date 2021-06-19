import styled from 'styled-components'
import tw from 'twin.macro'

export const Aside = styled.aside`
    ${tw`

        w-full
        sticky
        top-0

    `};
    height: calc(100vh - 10rem);
    grid-area: aside;
`

export const Content = styled.div`
    ${tw`
        w-full
        rounded-xl
        h-full
        py-10
        bg-white relative
        px-8 md-3:shadow-md
    `};
`

export const Categories = styled.div`
    ${tw`
        flex flex-col items-start justify-center
    `};
    strong {
        border-bottom-width: 1px;
        ${tw`
            text-blue-700 font-semibold font-sans
            mb-4 text-2xl
            border-blue-900
        `};
    }
`

export const CategoryItem = styled.div`
    ${tw`
        w-full ml-4
        flex items-center justify-start
    `};
    & + & {
        ${tw`mt-3`};
    }
`
