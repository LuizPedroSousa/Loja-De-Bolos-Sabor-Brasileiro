import styled from 'styled-components'
import tw from 'twin.macro'

export const SeePassword = styled.button`
    ${tw`
        absolute right-2
        w-8 h-8 flex items-center justify-items-center
    `};

    top: 40%;
    transform: translateY(-50%);
    span {
        ${tw`
            w-full h-full text-xl
            flex items-center justify-center
        `};
    }
`
