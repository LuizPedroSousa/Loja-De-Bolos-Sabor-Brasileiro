import styled from 'styled-components'
import tw from 'twin.macro'

export const Category = styled.li`
    ${tw`
        bg-white inline-block mx-2 border-2 border-gray-500
        overflow-hidden
        w-max rounded-lg hover:border-gray-600

    `};

    & + li {
        ${tw`ml-2`};
    }

    button {
        ${tw`
            w-full h-full px-2 py-2 capitalize
            text-md text-gray-600 font-sans font-medium
            outline-none focus:ring-2  hover:text-white
        `};

        :hover {
        }
    }
`
