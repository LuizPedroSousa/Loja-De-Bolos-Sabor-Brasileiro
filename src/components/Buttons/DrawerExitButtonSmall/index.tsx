import { HTMLMotionProps } from 'framer-motion'
import React from 'react'
import { IoMdClose } from 'react-icons/io'

import * as S from './styles'

type DrawerExitButtonSmallProps = HTMLMotionProps<'button'>

const DrawerExitButtonSmall: React.FC<DrawerExitButtonSmallProps> = ({
    ...props
}) => {
    return (
        <S.ButtonContainer
            {...props}
            whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
        >
            <IoMdClose />
        </S.ButtonContainer>
    )
}

export default DrawerExitButtonSmall
