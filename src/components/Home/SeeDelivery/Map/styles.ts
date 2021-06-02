import { shade } from 'polished'
import styled from 'styled-components'
import tw, { theme } from 'twin.macro'

export const Container = styled.div`
    ${tw`w-full mt-6 px-2 mx-auto mb-14 sm:mt-10`};
    max-width: 32rem;
`

export const Content = styled.div`
    border-width: 1px;
    ${tw`
        overflow-hidden
        border-orange-500 bg-gray-100
        relative z-20 h-60 rounded-t-3xl rounded-b-3xl
    `};
`

export const SeeLocation = styled.div`
    border-width: 1px;
    ${tw`
        w-full h-24 bg-white
        cursor-pointer
        border-orange-500
        flex items-center
        focus:ring-8
        relative
        z-10
        bottom-8
        pt-7
        rounded-b-3xl
        justify-between
    `};
    > div {
        ${tw`
        w-full
        h-full
        flex items-center
        rounded-b-3xl
        justify-between
        px-5
    `};
    }
    p {
        ${tw`font-medium text-blue-700 xs:text-md md:text-lg`};
    }
    button {
        ${tw`
            outline-none
            focus:ring-2
            w-8 h-8 rounded-full
            bg-orange-500
            text-white
        `};
        div {
            ${tw`
            w-full
            h-full
            rounded-full
            flex items-center justify-center
        `};
        }
        :hover {
            background-color: ${shade(0.2, theme`colors.orange.500`)};
        }
    }
`
