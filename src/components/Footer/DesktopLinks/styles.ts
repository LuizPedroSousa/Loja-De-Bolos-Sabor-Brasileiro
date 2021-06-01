import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`grid grid-cols-max-2 mt-5 ml-auto gap-x-12`};
    div {
        ${tw`flex flex-col`};
        a {
            transition: 0.25s;
            ${tw`text-blue-100 hover:underline hover:text-blue-700`};
            & + a {
                ${tw`mt-2`};
            }
        }
    }
    p {
        ${tw`text-xl text-blue-700 font-medium mb-4`};
    }
    grid-area: references;
    padding-right: 4.375rem;

    @media ${({ theme: { bp } }) => bp['3md']} {
        padding-right: 4.75rem;
    }

    @media ${({ theme: { bp } }) => bp.l} {
        p {
            font-size: 1.375rem;
        }
    }
`
