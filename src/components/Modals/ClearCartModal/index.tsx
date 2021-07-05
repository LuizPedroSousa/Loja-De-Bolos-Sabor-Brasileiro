import React from 'react'
import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useToast
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { BiX } from 'react-icons/bi'
import useCart from '../../../hooks/useCart'
import ClearCartToast from '../../Toasts/ClearCartToast'

import { ExitButton, ModalContent } from './styles'

interface CakeModalProps {
    onClose: () => void
    isOpen: boolean
}

const ClearCartModal: React.FC<CakeModalProps> = ({ isOpen, onClose }) => {
    const { clearCart } = useCart()
    const toast = useToast()
    function handleClearCart() {
        clearCart()
        ClearCartToast({ toast })
        onClose()
    }
    return (
        <Modal
            isOpen={isOpen}
            isCentered
            motionPreset="scale"
            onClose={onClose}
        >
            <ModalOverlay backdropFilter="blur(8px)" />
            <ModalContent>
                <ModalHeader>
                    <ExitButton onClick={onClose}>
                        <BiX />
                    </ExitButton>
                </ModalHeader>
                <ModalBody>
                    <strong>Oopss!</strong>
                    <p>
                        Tem certeza que quer excluir todos os bolos do carrinho?
                    </p>
                </ModalBody>
                <ModalFooter>
                    <motion.button
                        name="Não"
                        type="button"
                        onClick={onClose}
                        whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                    >
                        Não, voltar
                    </motion.button>
                    <motion.button
                        name="Sim"
                        onClick={handleClearCart}
                        type="button"
                        whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                    >
                        Sim, tenho
                    </motion.button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default ClearCartModal
