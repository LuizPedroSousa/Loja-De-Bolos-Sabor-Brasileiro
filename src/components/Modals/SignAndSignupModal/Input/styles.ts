import styled from 'styled-components'
import tw from 'twin.macro'

interface InputContainerProps {
    hasErrors?: boolean
}
export const InputContainer = styled.div<InputContainerProps>`
    ${tw`
        w-full h-14 relative
        rounded-md
    `};

    ${({ hasErrors }) => hasErrors && tw`mb-6`};

    label {
        ${tw`
            absolute -top-6 left-0 font-inter
            font-bold text-md
        `};
    }
    input {
        ${tw`
            w-full
            outline-none rounded-md
            border-2 border-orange-500
            px-4 text-orange-500 font-sans
            placeholder:(text-orange-500 font-sans)
        `};
        height: 80%;

        ${({ hasErrors }) => hasErrors && tw`border-red-500 text-red-500`};
    }
`

export const Errors = styled.p`
    ${tw`
        text-red-400 font-medium font-roboto
    `};
`
