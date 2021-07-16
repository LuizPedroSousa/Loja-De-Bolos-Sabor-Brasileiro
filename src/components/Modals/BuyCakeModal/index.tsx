import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

import * as S from './styles'

type Photos = {
    id: string
    url: string
}

type Star = {
    toMap: {
        key: string
        hasStar: boolean
    }[]
    length: number
}

type Ingredient = {
    id: string
    name: string
}

type Cake = {
    id: string
    price: string
    slug: string
    name: string
    description: string
    photos: Photos[]
    stars: Star
    ingredients: Ingredient[]
    category: string
}

interface BuyCakeModalProps {
    isOpen: boolean
    onClose: () => void
    cake: Cake
}

const BuyCakeModal: React.FC<BuyCakeModalProps> = ({
    isOpen,
    onClose,
    cake
}) => {
    return (
        <Modal
            isCentered
            motionPreset="slideInBottom"
            scrollBehavior="inside"
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay backdropFilter="blur(8px)" />
            <S.ModalContent>
                <ModalHeader>
                    <S.CloseButton
                        whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                        onClick={onClose}
                        name="Fechar modal"
                        type="button"
                    >
                        <AiOutlineClose />
                    </S.CloseButton>
                </ModalHeader>

                <ModalBody>
                    <S.CakeThumb
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: [null, 1], scale: [null, 1] }}
                    >
                        <Image
                            width={400}
                            height={600}
                            src={cake.photos[0].url}
                            alt={cake.name}
                            objectFit="cover"
                        />
                    </S.CakeThumb>
                    <S.Info>
                        <motion.strong
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [null, 1] }}
                        >
                            Bolo adicionado ao carrinho
                        </motion.strong>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [null, 1] }}
                        >
                            {cake.name}
                        </motion.p>
                    </S.Info>
                </ModalBody>
                <ModalFooter>
                    <Link href={'/bolos?category=' + cake.category}>
                        <motion.a
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: [null, 0], opacity: [null, 1] }}
                            whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                        >
                            Continuar Comprando
                        </motion.a>
                    </Link>

                    <Link href="/meu-carrinho">
                        <motion.a
                            initial={{ y: 5, opacity: 0 }}
                            animate={{
                                y: [null, 0],
                                opacity: [null, 1],
                                transition: { delay: 0.5 }
                            }}
                            whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                        >
                            Finalizar compra
                        </motion.a>
                    </Link>
                </ModalFooter>
            </S.ModalContent>
        </Modal>
    )
}

export default BuyCakeModal
