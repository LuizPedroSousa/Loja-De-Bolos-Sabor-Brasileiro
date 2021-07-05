import styled from 'styled-components'
import tw from 'twin.macro'

export const Categories = styled.div`
    ${tw`
        w-full overflow-auto
        pt-4 sticky pb-4 whitespace-nowrap
    `};
    ul {
        ${tw`
            w-full table static
            whitespace-nowrap
        `};
    }
    grid-area: 'categories';
`
