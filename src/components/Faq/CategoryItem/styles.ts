import tw from 'twin.macro'
import styled from 'styled-components'

export const CategoryItemContainer = styled.li`
    ${tw`
        w-full h-20
    `}
    a {
        ${tw`
            w-full h-full p-3
            bg-white transition-colors hover:bg-orange-500
            flex items-center justify-start
            cursor-pointer rounded-md md:h-24
        `}
    }
    span {
        ${tw`
            w-14 h-full flex items-center
            justify-center font-sans text-2xl
            font-semibold rounded-md text-orange-500
            bg-beige-400 mr-4 transition-colors
            uppercase
            md:(text-3xl)
        `}
    }
    strong {
        ${tw`
            font-roboto capitalize text-2xl
            text-orange-500 transition-colors
        `}
    }
    :hover {
        strong {
            ${tw`text-white`}
        }
        span {
            ${tw`bg-orange-100 text-white border-2 border-orange-100`}
        }
    }

    @media ${({ theme: { bp } }) => bp.md} {
        span {
            width: 4.5rem;
        }
    }
`
