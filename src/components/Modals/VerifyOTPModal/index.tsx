import React, { useRef, useEffect } from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    PinInput
} from '@chakra-ui/react'

import * as S from './styles'
import IconSvg from 'components/AnimatedSvgs/IconSvg'
import { maskEmailAddress } from 'utils/masks/hideEmail'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useFormik } from 'formik'

import { authUser, useUser } from 'hooks/useUser'

interface VerifyPinCodeModalProps {
    isOpen: boolean
    onClose: () => void
}
const VerifyOTPModal: React.FC<VerifyPinCodeModalProps> = ({
    isOpen,
    onClose
}) => {
    const {
        isAuthUserLoading,
        isAuthUserSuccess,
        authUserMutate,
        isAuthUserError,
        authUserErrorReason
    } = authUser({ step: 1 })
    const { user } = useUser()
    const formRef = useRef<HTMLFormElement>(null)
    const {
        handleSubmit,
        values: { code },
        setFieldValue,
        submitForm
    } = useFormik({
        initialValues: { code: '' },
        onSubmit: ({ code }) => {
            return authUserMutate({ code })
        }
    })

    useEffect(() => {
        if (code.length === 6) {
            setTimeout(() => {
                if (code.length === 6) submitForm()
            }, 500)
        }
    }, [code])

    useEffect(() => {
        if (isAuthUserSuccess) {
            onClose()
        }
    }, [isAuthUserSuccess])

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay backdropFilter="blur(6px)" />
            <S.ModalContent>
                <ModalHeader>
                    <S.Title>
                        <span>
                            <IconSvg />
                        </span>
                        <h2>Verifique o código de login</h2>
                    </S.Title>
                </ModalHeader>
                <form onSubmit={handleSubmit} ref={formRef}>
                    <ModalBody>
                        {isAuthUserError && (
                            <S.CustomErrorMessage
                                form="verifyOTP"
                                reason={authUserErrorReason}
                            />
                        )}
                        <h2>Que bom te ver outra vez, {user.name}</h2>
                        <p>
                            Parece que você está tentando se conectar a partir
                            de um novo dispositivo ou local.
                        </p>
                        <p>
                            Como medida de segurança adicional, insira o código
                            de seis dígitos que enviamos para{' '}
                            <b>{user.email && maskEmailAddress(user.email)}</b>
                        </p>
                        <Link href="/faq/requests/new">
                            <motion.a
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                    opacity: [null, 1],
                                    scale: [null, 1]
                                }}
                            >
                                Precisa de ajuda?
                            </motion.a>
                        </Link>

                        <S.PinGroup>
                            <PinInput
                                onChange={v => setFieldValue('code', v)}
                                otp
                            >
                                <S.PinInputField />
                                <S.PinInputField />
                                <S.PinInputField />
                                <S.PinInputField />
                                <S.PinInputField />
                                <S.PinInputField />
                            </PinInput>
                        </S.PinGroup>
                        <motion.button
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: [null, 1], scale: [null, 1] }}
                            name="Reenviar código"
                            type="button"
                        >
                            Reenviar código
                        </motion.button>
                    </ModalBody>
                    <ModalFooter>
                        <motion.button
                            whileHover={{
                                scale: [1, 0.92, 0.93, 0.92],
                                transition: { duration: 0.25 }
                            }}
                            name="enviar código de verificação"
                            type="submit"
                        >
                            {isAuthUserLoading ? (
                                <S.CircularProgress />
                            ) : (
                                'Enviar'
                            )}
                        </motion.button>
                    </ModalFooter>
                </form>
            </S.ModalContent>
        </Modal>
    )
}

export default VerifyOTPModal
