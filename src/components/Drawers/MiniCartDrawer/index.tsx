import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Drawer,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'
import ClearCartModal from 'components/Modals/ClearCartModal'
import { motion } from 'framer-motion'
import useCart from 'hooks/useCart'
import useCustomRipple from 'hooks/useCustomRipple'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineLine, AiOutlinePlus } from 'react-icons/ai'
import { BsTrash } from 'react-icons/bs'
import { IoMdClose } from 'react-icons/io'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { theme } from 'twin.macro'
import DefaultDrawerHeaderTitle from '../DefaultDrawerHeaderTitle'

import * as S from './styles'

interface MiniCartDrawerProps {
    isOpen: boolean
    onClose: () => void
}

const MiniCartDrawer: React.FC<MiniCartDrawerProps> = ({ isOpen, onClose }) => {
    const { total, cartItems, hasItems, removeItem, upAmount, downAmount } =
        useCart()

    const mobalDownAmountRef = useRef<HTMLButtonElement>(null)
    const mobalUpAmountRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([
        { ref: mobalDownAmountRef, color: theme`colors.pink.400` },
        { ref: mobalUpAmountRef, color: theme`colors.green.400` }
    ])

    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose
    } = useDisclosure()
    return (
        <>
            <Drawer size="sm" isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <S.DrawerContent>
                    <DefaultDrawerHeaderTitle
                        title="Meu carrinho"
                        buttonProps={{
                            name: 'Fechar mini cart',
                            type: 'button',
                            onClick: onClose
                        }}
                    />
                    <S.DrawerBody>
                        {!hasItems ? (
                            <S.AnyItems>
                                <span>
                                    <MdRemoveShoppingCart size={48} />
                                </span>
                                <strong>O seu carrinho esta vazio</strong>
                                <p>
                                    Volte para a loja e adicionar alguns bolos
                                    ao seu carrinho
                                </p>
                            </S.AnyItems>
                        ) : (
                            cartItems.map(item => (
                                <Accordion allowToggle key={item.cake.id}>
                                    <AccordionItem>
                                        <S.CakeItem>
                                            <S.Thumb>
                                                <Image
                                                    objectFit="cover"
                                                    width={400}
                                                    height={400}
                                                    src={
                                                        item.cake.photos[0].url
                                                    }
                                                    alt={item.cake.name}
                                                />
                                            </S.Thumb>
                                            <S.Info>
                                                <strong>
                                                    {item.cake.name}
                                                </strong>
                                                <p>R$ {item.cake.price}</p>
                                                <S.AmountControls
                                                    hasDownAmount={
                                                        item.amount > 1
                                                    }
                                                >
                                                    <button
                                                        onClick={() =>
                                                            downAmount(item)
                                                        }
                                                        disabled={
                                                            item.amount === 1
                                                        }
                                                        type="button"
                                                        name="Remover um bolo"
                                                        ref={mobalDownAmountRef}
                                                    >
                                                        <AiOutlineLine />
                                                    </button>
                                                    <span>{item.amount}</span>
                                                    <button
                                                        onClick={() =>
                                                            upAmount(item)
                                                        }
                                                        type="button"
                                                        name="Adicionar um bolo"
                                                        ref={mobalUpAmountRef}
                                                    >
                                                        <AiOutlinePlus />
                                                    </button>
                                                </S.AmountControls>
                                            </S.Info>
                                            <S.CakeControls>
                                                <button
                                                    type="button"
                                                    name="Remover bolo do carrinho"
                                                    onClick={() =>
                                                        removeItem(item)
                                                    }
                                                >
                                                    <IoMdClose />
                                                </button>
                                                <AccordionButton>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </S.CakeControls>
                                        </S.CakeItem>
                                        <AccordionPanel tw="border-t-2" pb={4}>
                                            {item.cake.description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        )}
                    </S.DrawerBody>
                    <S.DrawerFooter hasItems={hasItems}>
                        <S.CartOptions>
                            <motion.button
                                name="Esvaziar carrinho"
                                type="button"
                                disabled={!hasItems}
                                onClick={onModalOpen}
                                whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                            >
                                Esvaziar carrinho
                                <span>
                                    <BsTrash />
                                </span>
                            </motion.button>
                            <Link href="/meu-carrinho">
                                <motion.a
                                    whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                                >
                                    Ver carrinho
                                </motion.a>
                            </Link>
                        </S.CartOptions>
                        <S.Total>
                            <strong>Total R${total}</strong>
                            <Link href="/finish">
                                <motion.a
                                    whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                                >
                                    Finalizar compra
                                </motion.a>
                            </Link>
                        </S.Total>
                    </S.DrawerFooter>
                </S.DrawerContent>
            </Drawer>

            <ClearCartModal isOpen={isModalOpen} onClose={onModalClose} />
        </>
    )
}

export default MiniCartDrawer
