import React, { InputHTMLAttributes, useRef } from 'react'
import SeePasswordButton from './SeePasswordButton'

import * as S from './styles'

type InputPropsType = InputHTMLAttributes<HTMLInputElement>

interface InputProps {
    inputProps?: InputPropsType
    label: string
    name: string
    errors: string
    touched: boolean
    isInputPassword?: boolean
}
const Input: React.FC<InputProps> = ({
    name,
    label,
    inputProps,
    touched,
    errors,
    isInputPassword
}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <S.InputContainer hasErrors={!!(touched && errors)}>
            <label htmlFor={name}>{label}</label>
            <input ref={inputRef} id={name} {...inputProps} />
            {isInputPassword === true && (
                <SeePasswordButton inputRef={inputRef} />
            )}
            {touched && errors && <S.Errors>{errors}</S.Errors>}
        </S.InputContainer>
    )
}

export default Input
