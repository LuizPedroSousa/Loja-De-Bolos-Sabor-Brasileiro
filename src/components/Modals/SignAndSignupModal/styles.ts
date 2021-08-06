import styled from 'styled-components'
import {
    ModalContent as ChakraModalContent,
    Tab as ChakraTab,
    AccordionPanel as ChakraAccordionPanel,
    CircularProgress as ChakraCircularProgress,
    TabPanel
} from '@chakra-ui/react'
import tw from 'twin.macro'

interface RegisterFormProps {
    isValid: boolean
}
type LoginFormProps = RegisterFormProps & {}

export const ModalContent = styled(ChakraModalContent).attrs({
    py: '2',
    maxW: 'lg'
})``
export const Title = styled.div`
    ${tw`
        flex items-center justify-center
    `};
    span {
        ${tw`
            w-16
            mr-2
        `};
    }
    h2 {
        ${tw`
            mt-auto text-2xl
        `};
    }
`

export const Tab = styled(ChakraTab).attrs({
    _selected: { borderColor: 'orange.500', color: 'orange.500' }
})``

export const LoginTabPanel = styled(TabPanel)`
    ${tw`
        mt-10
        w-full mb-4
    `};
`

export const LoginForm = styled.form<LoginFormProps>`
    a {
        ${tw`
            text-md font-roboto font-semibold text-orange-500
            underline cursor-pointer
        `};
    }
    button[type='submit'] {
        ${tw`
                mt-4 w-full bg-orange-500 h-14
                text-white font-medium text-lg
                rounded-md relative
                hover:(bg-orange-700 border-2 border-orange-100)
                focus:(bg-white border-0 ring-2 ring-orange-500 text-orange-500)
            `};

        ${({ isValid }) => isValid && tw`opacity-50 cursor-not-allowed`};
    }
`

export const InputGroup = styled.div`
    ${tw`grid grid-cols-1 gap-y-6 w-full`};
`

export const RegisterTabPanel = styled(TabPanel)`
    ${tw`
        mt-10
        w-full mb-4
    `};
`

export const RegisterForm = styled.form<RegisterFormProps>`
    button[type='submit'] {
        ${tw`
            mt-4 w-full bg-orange-500 h-14
            text-white font-medium text-lg
            rounded-md relative
            hover:(bg-orange-700 border-2 border-orange-100)
            focus:(bg-white border-0 ring-2 ring-orange-500 text-orange-500)
        `};

        ${({ isValid }) => isValid && tw`opacity-50 cursor-not-allowed`};
    }
`

export const RegisterInputGroup = styled.div`
    ${tw`
        grid grid-cols-2 gap-y-6 w-full
        gap-x-2
    `};

    grid-template-areas:
        'name surname'
        'username username'
        'email email'
        'password password'
        'password-confirmation password-confirmation';

    div {
        :nth-of-type(1) {
            grid-area: name;
        }
        :nth-of-type(2) {
            grid-area: surname;
        }
        :nth-of-type(3) {
            grid-area: username;
        }
        :nth-of-type(4) {
            grid-area: email;
        }
        :nth-of-type(5) {
            grid-area: password;
        }
        :nth-of-type(6) {
            grid-area: password-confirmation;
        }
    }
`

export const AccordionPanel = styled(ChakraAccordionPanel).attrs({
    p: 0
})`
    ${tw`
        text-sm font-medium mb-2 leading-5
        relative bottom-2
    `};
`

export const CircularProgress = styled(ChakraCircularProgress).attrs({
    isIndeterminate: true,
    bg: 'none',
    size: '28px',
    trackColor: 'none',
    color: 'indigo.200'
})`
    ${tw`
        justify-center!
        absolute! right-28!
    `};
`
