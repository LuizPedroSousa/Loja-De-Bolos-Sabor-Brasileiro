import { motion } from 'framer-motion'
import styled from 'styled-components'
import tw from 'twin.macro'

export const Container = styled(motion.div)`
    ${tw`min-w-full h-full relative`};

    scroll-snap-align: start;
`
