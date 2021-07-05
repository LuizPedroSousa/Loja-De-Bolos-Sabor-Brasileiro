import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        bg-green-300 shadow-xl relative
        flex items-center justify-start
        w-full py-6 px-4 rounded-md
    `};

    p {
        ${tw`
            text-white font-roboto text-lg
            font-medium
        `};
    }

    span {
        ${tw`
            text-sm text-white mr-2
            bg-green-500 w-5 h-5
            rounded-sm flex items-center
            justify-center p-0.5
        `};
    }

    button {
        ${tw`
            bg-green-500 w-7 h-7
            flex items-center justify-center
            text-white rounded-md absolute
            right-2 top-2 border-2
            border-green-300 hover:border-green-500 hover:bg-green-600
            focus:border-0 focus:ring-2
        `};
    }
`
