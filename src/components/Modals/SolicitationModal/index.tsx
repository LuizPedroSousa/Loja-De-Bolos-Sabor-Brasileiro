import React, { useRef } from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import { BiX } from 'react-icons/bi'

import {
    ModalContent,
    ExitButton,
    LottieAnim,
    FieldInfoContainer,
    FieldInfo
} from './styles'
import useCustomRipple from '../../../hooks/useCustomRipple'
import checkAnim from '../../../../public/lottie/check-anim.json'
import errorAnim from '../../../../public/lottie/error-anim.json'

import Lottie from 'react-lottie'

type Solicitation = {
    name: string
    surname: string
    email: string
    reason: string
    subject: string
    description: string
}

interface SolicitationModalProps {
    isOpen: boolean
    onClose: () => void
    status: 'failed' | 'success'
    solicitation?: Solicitation
}
const SolicitationModal: React.FC<SolicitationModalProps> = ({
    isOpen,
    onClose,
    status,
    solicitation
}) => {
    const exitButtonRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: exitButtonRef }])
    return (
        <Modal
            isCentered={status === 'failed'}
            isOpen={isOpen}
            motionPreset="scale"
            onClose={onClose}
        >
            <ModalOverlay backdropFilter="blur(8px)" />
            <ModalContent status={status}>
                <ModalHeader>
                    <ExitButton ref={exitButtonRef} onClick={onClose}>
                        <BiX />
                    </ExitButton>
                </ModalHeader>
                <ModalBody>
                    <LottieAnim status={status}>
                        <Lottie
                            options={{
                                loop: false,
                                autoplay: true,
                                animationData:
                                    status === 'success'
                                        ? checkAnim
                                        : errorAnim,
                                rendererSettings: {
                                    preserveAspectRatio: 'xMidYMid slice'
                                }
                            }}
                        />
                    </LottieAnim>
                    <strong>
                        {status === 'success'
                            ? 'Solicitação enviada!'
                            : 'Ooops!'}
                    </strong>
                    <p>
                        {status === 'success'
                            ? 'Solicitação enviada com sucesso, veja abaixo os seus dados.'
                            : 'Parece que houve uma falha interna ao tentar enviar uma solicitação, tente novamente mais tarde.'}
                    </p>
                    {status === 'success' && (
                        <FieldInfoContainer>
                            <FieldInfo>
                                <span>Nome</span>
                                <p>{solicitation?.name}</p>
                            </FieldInfo>
                            <FieldInfo>
                                <span>Sobrenome</span>
                                <p>{solicitation?.surname}</p>
                            </FieldInfo>
                            <FieldInfo>
                                <span>Email</span>
                                <p>{solicitation?.email}</p>
                            </FieldInfo>
                            <FieldInfo>
                                <span>Assunto</span>
                                <p>{solicitation?.subject}</p>
                            </FieldInfo>
                            <FieldInfo>
                                <span>Menssagem</span>
                                <p>{solicitation?.description}</p>
                            </FieldInfo>
                        </FieldInfoContainer>
                    )}
                </ModalBody>
                <ModalFooter></ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default SolicitationModal
