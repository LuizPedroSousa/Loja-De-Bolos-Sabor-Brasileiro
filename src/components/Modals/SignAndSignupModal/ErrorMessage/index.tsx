import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { BiCommentError } from 'react-icons/bi'

import * as S from './styles'

interface ErrorMessageProps {
    form: 'login' | 'register' | 'verifyOTP'
    reason:
        | 'emailExists'
        | 'passwordError'
        | 'userNotExists'
        | 'otpError'
        | string
    className?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
    reason,
    form,
    className
}) => {
    const titleRef = useRef<HTMLElement>(null)

    useEffect(() => {
        let titleContent = ''
        switch (form) {
            case 'login':
                titleContent = 'Não foi possível realizar o login.'
                break

            case 'register':
                titleContent = 'Não foi possível criar a conta.'
                break

            case 'verifyOTP':
                titleContent = 'Falha na verificação'
        }
        switch (reason) {
            case 'userNotExists':
                titleContent = 'Este nome de usuário não existe.'
                break

            case 'passwordError':
                titleContent = 'A senha estava incorreta. Tente novamente.'
                break
        }

        titleRef.current.textContent = titleContent
    }, [reason])

    return (
        <S.MessageContainer
            className={className}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [null, 1], scale: [null, 1] }}
        >
            <strong ref={titleRef}></strong>
            <p>
                {reason === 'emailExists' &&
                    'Email existente, use um e-mail diferente para continuar.'}
                {reason === 'passwordError' && (
                    <>
                        <Link href="/forgot-password">
                            <a>Esqueceu sua senha</a>
                        </Link>
                        ?
                    </>
                )}
                {reason === 'otpError' &&
                    'O código estava incorreto. Tente novamente.'}
                {reason === 'userNotExists' && (
                    <>
                        Quer{' '}
                        <button type="button" name="Criar conta">
                            criar uma conta
                        </button>
                        ?
                    </>
                )}
                {!reason && 'Falha interna, tente novamente mais tarde.'}
            </p>
            <span>
                <BiCommentError />
            </span>
        </S.MessageContainer>
    )
}

export default ErrorMessage
