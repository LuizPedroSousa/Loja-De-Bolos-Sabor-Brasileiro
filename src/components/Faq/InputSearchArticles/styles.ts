import styled from 'styled-components'
import tw from 'twin.macro'

export const InputGroup = styled.div`
    ${tw`
        bg-white border-2 h-12
        grid overflow-hidden rounded-lg
        transition-colors
        focus-within:(ring-2 ring-orange-500 border-0)
        md:(w-full)
    `}
    grid-template-columns: 1fr 3rem;

    input {
        ${tw`
            h-full pl-2 outline-none
            border-0 placeholder:(text-orange-100 font-sans)
            transition-colors
            text-orange-500 md:(pl-4 placeholder:(text-lg) text-md)
        `}
    }
    a {
        ${tw`
            bg-orange-500 w-full h-full
            text-white flex items-center
            justify-center text-2xl
            transition-colors
            outline-none hover:(bg-orange-700)
             md:text-3xl
        `}
    }
    @media ${({ theme: { bp } }) => bp.md} {
        grid-template-columns: 1fr 4.25rem;
        height: 4.5rem;
    }
`
