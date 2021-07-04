import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled.div`
    ${tw`
        flex items-center justify-center
        flex-col mt-10 mx-auto
        md:(mt-14)
        l:(mt-20)
    `}
    height: 100%;
    max-width: 94%;

    @media ${({ theme: { bp } }) => bp.l} {
        max-width: 1122px;
    }
`

export const SectionSearch = styled.section`
    ${tw`
        text-center md:(w-full max-w-3xl)
    `}
    h2 {
        ${tw`
            font-roboto font-medium text-3xl
            text-gray-700 md:text-6xl mb-2
            md:mb-10
        `}
    }
`

export const SectionCategories = styled(motion.section)`
    ${tw`
        w-full
        mt-8 md:(mt-20)

    `}

    ul {
        ${tw`
            grid gap-y-2 grid-cols-1
            sm:(grid-cols-2 gap-4) md-2:(grid-cols-3)
        `}
    }
`
