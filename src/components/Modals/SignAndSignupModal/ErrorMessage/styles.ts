import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const MessageContainer = styled(motion.div)`
    ${tw`
        w-full pl-10 py-2
        flex items-start justify-start
        flex-col relative border-2
        border-red-400 rounded-md bottom-8
        bg-red-500 bg-opacity-5
    `};
    border-width: 1px;
    border-left-width: 4px;

    strong {
        ${tw`
            text-md font-roboto
        `};
    }
    p {
        ${tw`
            text-sm font-medium leading-4
        `};
        max-width: 70%;
    }
    span {
        ${tw`
            w-6 h-6
            text-2xl text-red-500
            absolute left-2 top-2
        `};
    }
`
