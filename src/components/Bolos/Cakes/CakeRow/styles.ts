import styled from 'styled-components'
import tw from 'twin.macro'

export const ListContainer = styled.div`
    ${tw`
        w-full border-b-2 border-gray-300 py-4
        grid bg-white hover:bg-gray-100
        shadow-md px-2
        xs:py-8 sm:px-6 sm:gap-x-4
        md:px-8 md:gap-x-6 md-2:shadow-none
        md-2:border-t-2 md-3:px-1  md-3:gap-x-3
    `};
    grid-template-columns: 1fr 65%;
    grid-template-areas: 'thumb info' 'controls .';

    & {
        :last-of-type {
            border: 0;
        }
    }

    :hover {
        img {
            ${tw`
                transform scale-110
            `};
        }
    }

    @media ${({ theme: { bp } }) => bp.sm} {
        grid-template-columns: 1fr 60%;
        grid-template-rows: max-content max-content;
        grid-template-areas:
            'thumb info'
            'thumb controls';
    }

    @media ${({ theme: { bp } }) => bp['3md']} {
        grid-template-columns: 1fr 55%;
    }
`

export const Box = styled.div`
    ${tw`
        w-full flex flex-col mr-auto items-center
        justify-center overflow-hidden
        rounded-md
    `};
    img {
        ${tw`
            transition duration-1000 ease-in-out
            w-full h-28
            xs:h-32 sm:h-52 md-3:h-44
        `};
    }

    grid-area: thumb;
`
export const Controls = styled.div`
    ${tw`
        grid grid-cols-3 mt-3
        w-full gap-x-3
        xs:mt-4 sm:mr-auto sm:max-w-max
        sm:gap-x-4
    `};

    grid-area: controls;

    button {
        ${tw`
            w-7 h-7 rounded-full
            p-2
            flex shadow-sm focus:ring-2
            items-center justify-center
            bg-gray-200 xs:w-9 xs:h-9
            sm:w-8 sm:h-8
        `}
        outline: 0 !important;
        font-size: 0;
        span {
            ${tw`
                flex
                items-center justify-center
            `};
        }
    }
`

export const Info = styled.a`
    ${tw`
        w-full ml-2
        flex items-start justify-center flex-col
        sm:ml-0
        no-underline hover:underline hover:opacity-75
    `};
    grid-area: info;
    strong {
        ${tw`
            text-lg capitalize font-bold text-blue-600
            xs:text-xl md-3:text-lg
        `};
    }
    span {
        ${tw`
            mt-2 mb-1 text-blue-600 text-md
            xs:mt-3 xs:mb-3
        `};
    }
    strong,
    span,
    p {
        ${tw`font-cake-variant`}
    }

    p {
        ${tw`
            font-description-variant max-w-xs
            text-md
            sm:text-lg
        `};
    }
`
