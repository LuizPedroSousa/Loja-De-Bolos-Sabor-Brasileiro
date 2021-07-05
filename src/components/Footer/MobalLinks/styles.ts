import styled from 'styled-components'
import tw from 'twin.macro'
import { AccordionItem as ChakraAccordionItem } from '@chakra-ui/react'

export const Container = styled.div`
    ${tw`w-full mt-10`};
    padding: 0 1.313rem;
`

export const Title = styled.strong`
    ${tw`text-blue-700 w-full flex mr-auto font-medium`};
`

export const Details = styled.div`
    ${tw`h-full w-full flex flex-col text-center`};
    a {
        ${tw`
            text-md h-12 w-full flex items-center
            justify-center hover:underline hover:text-blue-700
        `};
    }
`
export const AccordionItem = styled(ChakraAccordionItem).attrs({
    border: '1',
    borderTop: 0,
    borderColor: 'orange.500',
    p: '0'
})``
