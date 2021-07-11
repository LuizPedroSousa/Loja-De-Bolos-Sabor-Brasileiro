import { DrawerContent as ChakraDrawerContent } from '@chakra-ui/react'
import styled from 'styled-components'
import tw from 'twin.macro'
export const DrawerContent = styled(ChakraDrawerContent).attrs({
    p: 0,
    overflow: 'hidden'
})`
    > div,
    header {
        ${tw`p-0! m-0! relative`}
    }
    > div {
        ${tw`w-full h-full overflow-scroll`}
        div {
            ${tw`object-cover`}
        }
    }
`

export const ClosePhoto = styled.button`
    ${tw`
        w-8 h-8 flex items-center justify-center
        ml-auto text-pink-400 border-2 border-pink-400
        rounded-md right-3 top-3 absolute z-10
        transition-colors duration-500
        hover:(bg-red-500 border-red-300 text-white)
        focus:(ring-2 ring-red-300 border-0)
    `}
`
