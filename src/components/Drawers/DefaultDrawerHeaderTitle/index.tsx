import React from 'react'
import { HTMLMotionProps } from 'framer-motion'
import DrawerExitButtonSmall from 'components/Buttons/DrawerExitButtonSmall'

import * as S from './styles'

type ButtonProps = HTMLMotionProps<'button'>

interface DefaultDrawerHeaderTitleProps {
    title: string
    buttonProps: ButtonProps
}
const DefaultDrawerHeaderTitle: React.FC<DefaultDrawerHeaderTitleProps> = ({
    title,
    buttonProps
}) => {
    return (
        <S.DrawerHeader>
            <strong>{title}</strong>
            <DrawerExitButtonSmall {...buttonProps} />
        </S.DrawerHeader>
    )
}

export default DefaultDrawerHeaderTitle
