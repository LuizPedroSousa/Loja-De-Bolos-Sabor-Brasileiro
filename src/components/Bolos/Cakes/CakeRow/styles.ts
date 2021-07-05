import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

interface ControlsProps {
    hasCakeInCart: boolean
}

export const ListContainer = styled(motion.div)`
    ${tw`
        w-full border-b-2 border-gray-300 py-4
        grid bg-white hover:(border-orange-100!)
         px-2 transition-colors
        xs:py-8 sm:(px-6 gap-x-4)
        md:(px-8 gap-x-6)
        md-3:(gap-x-3 px-1 pt-0 pb-6)
    `};
    grid-template-columns: 1fr 65%;
    grid-template-areas: 'thumb info' 'controls .';

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
       flex flex-col mr-auto items-center
        justify-center overflow-hidden
        rounded-md cursor-pointer
        w-full h-28 border-2 border-gray-100
        xs:h-32 sm:h-52 md-3:h-44
    `};
    img {
        ${tw`
            transition duration-1000 ease-in-out

        `};
    }
    :hover {
        img {
            ${tw`
            transform scale-110
        `};
        }
    }

    grid-area: thumb;
`
export const Controls = styled.div<ControlsProps>`
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
            p-2 transition-colors
            flex  focus:(ring-2 border-0!)
            items-center justify-center
            bg-white xs:(w-9 h-9)
            sm:(w-8 h-8 mt-auto) hover:(border-2)
        `}
        font-size: 0;
        border-width: 1px;

        span {
            ${tw`
                flex
                items-center justify-center
            `};
        }

        :nth-of-type(1) {
            ${({ hasCakeInCart }) =>
                hasCakeInCart
                    ? tw`text-pink-400 hover:(border-pink-100 text-white bg-pink-400) focus:ring-pink-200`
                    : tw`text-blue-400 hover:(border-blue-100 text-white bg-blue-400) focus:ring-blue-100`};
        }
        :nth-of-type(2) {
            ${tw`
                text-red-400 hover:(border-red-200 bg-red-400 text-white) focus:ring-red-200
            `};
        }
        :nth-of-type(3) {
            ${tw`
                text-indigo-400 hover:(border-indigo-100 bg-indigo-400 text-white)
                focus:ring-indigo-100
            `};
        }
    }
`

export const Info = styled.a`
    ${tw`
        w-full ml-2
        flex items-start justify-center flex-col
        sm:ml-0
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
            text-md overflow-hidden overflow-ellipsis
            sm:text-lg
        `};
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
        -webkit-box-orient: vertical;
        line-height: 143%;
    }
`
