import { DrawerHeader as ChakraDrawerHeader } from '@chakra-ui/react'
import styled from 'styled-components'
import tw from 'twin.macro'

export const DrawerHeader = styled(ChakraDrawerHeader)`
    ${tw`
        flex items-center justify-between
        w-full relative
        after:(content absolute bottom-0 bg-gray-500)
    `};

    ::after {
        left: 50%;
        width: 90%;
        transform: translateX(-50%);
        height: 1px;
    }

    strong {
        ${tw`
            font-semibold
        `};
    }
`
