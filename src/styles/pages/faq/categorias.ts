import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        w-full flex items-center
        justify-start flex-col mx-auto
        mb-24 overflow-x-hidden px-2
        mt-10 md:(mt-14) l:(mt-20)
    `};
    max-width: 94%;

    header {
        ${tw`
            flex items-end justify-between
            w-full
        `}
        h2 {
            ${tw`
                text-3xl font-semibold capitalize
                font-roboto text-orange-500 l:text-4xl
            `}
        }
        p {
            ${tw`text-sm text-orange-500 font-medium`}
        }
    }

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 738px;
    }
`

export const Articles = styled(motion.ul)`
    ${tw`
        w-full mt-6
    `}
`
