import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const NotDelivering = styled(motion.div)`
    ${tw`
        px-2 bg-red-500 bg-opacity-30
        py-4 rounded-md border-2 border-red-500
        border-opacity-50 my-2
    `}
    strong {
        ${tw`flex items-center justify-start text-gray-100 font-sans`};
        span {
            ${tw`ml-2 text-xl`};
        }
    }
    > p {
        ${tw`text-gray-200 text-opacity-90 mt-1`};
        line-height: 138%;
    }
`

export const NotFound = styled(NotDelivering)`
    p {
        a {
            ${tw`
                transition-opacity duration-100
                text-white hover:(opacity-50)
            `}
        }
    }
`

export const Success = styled(NotDelivering)`
    ${tw`
        bg-green-500 bg-opacity-50
        pb-0 overflow-hidden rounded-md border-2 border-green-500
        border-opacity-50 my-2 px-0
        pt-4 w-full
    `}
    > strong {
        ${tw`ml-2 md:ml-4`}
    }
`

export const SuccessAddress = styled(motion.div)`
    ${tw`
        grid w-full gap-x-2 gap-y-8 bg-white
        px-2 h-full grid-cols-2 mt-4 pb-4 pt-10
        sm:pb-6 md:px-4 l:pb-8
    `};
    div {
        ${tw`
            flex flex-col items-start p-2 justify-start border-2 border-gray-400
            rounded-md relative l:py-2.5
        `}
        strong {
            ${tw`
                text-gray-700
                absolute -top-6 left-0
            `}
        }
        p {
            ${tw`text-gray-600`}
        }
    }
`
