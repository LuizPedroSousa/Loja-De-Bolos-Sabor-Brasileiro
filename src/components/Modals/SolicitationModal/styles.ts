import styled from 'styled-components'
import { ModalContent as ChakraModalContent } from '@chakra-ui/react'
import tw, { theme } from 'twin.macro'

interface ModalContentProps {
    status: 'failed' | 'success'
}

interface LottieAnimProps {
    status: 'failed' | 'success'
}

export const ModalContent = styled(ChakraModalContent).attrs({
    bg: 'white',
    mx: { base: '2' },
    mt: { base: '6' },
    borderRadius: { base: 'lg' },
    maxW: { base: '600px' }
})<ModalContentProps>`
    > div {
        ${tw`
            flex items-center justify-center
            flex-col px-4 sm:px-6
            md:px-8
        `}

        > strong {
            ${tw`text-green-500`}
            font-size: calc(${theme`fontSize.3xl`} - 0.1rem);
            ${({ status }) => status === 'failed' && tw`text-red-500 text-4xl`};
        }
        > p {
            ${tw`text-center text-md text-gray-600`};
        }
    }
`

export const ExitButton = styled.button`
    ${tw`
        w-10 h-10 border-2
        flex items-center justify-center
        text-white bg-orange-500
        focus:(border-0 ring-2 ring-red-200) ml-auto
        rounded-lg transition-colors text-2xl
        hover:(bg-red-500 border-red-100)
    `};
`

export const LottieAnim = styled.div<LottieAnimProps>`
    ${tw`
        w-full h-10 flex items-center justify-center
        overflow-visible
    `}

    z-index: -1;

    ${({ status }) => status === 'failed' && tw`mb-2 mt-4`};
    div {
        ${tw`absolute`}
        ${({ status }) => status === 'failed' && tw`top-4 h-36! w-36!`};
        ${({ status }) => status === 'success' && tw`h-60! w-60! -top-12`};
    }
`

export const FieldInfoContainer = styled.div`
    ${tw`
        w-full grid grid-cols-1
        gap-y-8 mt-8 sm:(grid-cols-2 gap-y-10 gap-x-4)
    `}

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-areas:
            'name surname'
            'email email'
            'subject subject'
            'message message';
    }
`

export const FieldInfo = styled.div`
    ${tw`
        w-full bg-white border-2 border-orange-100
        h-12 rounded-md relative flex
        items-center justify-start px-3
    `}

    :last-of-type {
        height: max-content;
        ${tw`py-3`}

        p {
            ${tw`break-all`}
        }
    }
    span {
        ${tw`
            absolute -top-6 left-0
            font-inter font-medium text-orange-100
        `}
    }

    p {
        ${tw`
            font-semibold
        `}
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        :nth-of-type(1) {
            grid-area: name;
        }
        :nth-of-type(2) {
            grid-area: surname;
        }
        :nth-of-type(3) {
            grid-area: email;
        }
        :nth-of-type(4) {
            grid-area: subject;
        }
        :nth-of-type(5) {
            grid-area: message;
        }
    }
`
