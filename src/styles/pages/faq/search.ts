import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        w-full flex items-center
        justify-start flex-col mx-auto
        mb-24
        mt-10 md:(mt-14) l:(mt-20)
    `};
    max-width: 94%;

    header {
        ${tw`w-full mt-10`}
        p {
            ${tw`
                font-inter text-xl font-semibold
            `}
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 736px;
    }
`

export const SectionArticles = styled.section`
    ${tw`w-full mt-4`}
    ul {
        ${tw`
            w-full flex items-center justify-center
            flex-col
        `}
    }
`
