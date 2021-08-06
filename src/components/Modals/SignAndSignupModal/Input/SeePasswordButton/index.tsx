import { useDisclosure } from '@chakra-ui/react'
import React, { RefObject, useEffect } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

import * as S from './styles'

interface SeePasswordButtonProps {
    inputRef: RefObject<HTMLInputElement>
}
const SeePasswordButton: React.FC<SeePasswordButtonProps> = ({ inputRef }) => {
    const { isOpen: hasViewPassword, onToggle } = useDisclosure()
    useEffect(() => {
        if (!hasViewPassword) {
            inputRef.current.setAttribute('type', 'password')
            return
        }

        inputRef.current.setAttribute('type', 'text')
    }, [hasViewPassword])
    return (
        <S.SeePassword type="button" onClick={onToggle} name="Ver senha">
            <span>
                {!hasViewPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
            </span>
        </S.SeePassword>
    )
}

export default SeePasswordButton
