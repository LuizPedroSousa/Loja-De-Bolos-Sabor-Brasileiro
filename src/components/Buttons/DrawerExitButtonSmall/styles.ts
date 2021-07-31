import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const ButtonContainer = styled(motion.button)`
    ${tw`
        w-9 h-9 bg-orange-500
        border-2 hover:border-orange-100 focus:ring-2
        focus:border-0 flex items-center
        hover:bg-orange-700 justify-center
        text-white rounded-lg
    `};
`
