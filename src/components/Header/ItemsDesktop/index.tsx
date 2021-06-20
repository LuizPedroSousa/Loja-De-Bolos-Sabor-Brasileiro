import Link from 'next/link'
import React, { useRef } from 'react'
import {
    AiOutlineLine,
    AiOutlinePlus,
    AiOutlineShoppingCart
} from 'react-icons/ai'

import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Drawer,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'
import useCart from '../../../hooks/useCart'
import Image from 'next/image'
import { IoMdClose } from 'react-icons/io'
import { BsTrash } from 'react-icons/bs'
import ClearCartModal from '../../Modals/ClearCartModal'
import {
    UnorderedList,
    List,
    Cart,
    DrawerContent,
    DrawerBody,
    DrawerFooter,
    Total,
    ExitButton,
    CartOptions,
    AnyItems,
    CakeItem,
    Thumb,
    Info,
    AmountControls,
    CakeControls
} from './styles'
import { motion } from 'framer-motion'
import { MdRemoveShoppingCart } from 'react-icons/md'
import useCustomRipple from '../../../hooks/useCustomRipple'
import { theme } from 'twin.macro'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

interface INavigationLinks {
    href: ActiveHrefType
    label: string
}

interface ItemsDesktopProps {
    navigationLinks: INavigationLinks[]
    activePage: ActiveHrefType
}

const ItemsDesktop: React.FC<ItemsDesktopProps> = ({
    navigationLinks,
    activePage
}) => {
    const mobalDownAmountRef = useRef<HTMLButtonElement>(null)
    const mobalUpAmountRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([
        { ref: mobalDownAmountRef, color: theme`colors.pink.400` },
        { ref: mobalUpAmountRef, color: theme`colors.green.400` }
    ])

    const {
        total,
        cartItems,
        itemsLength,
        hasItems,
        removeItem,
        upAmount,
        downAmount
    } = useCart()
    const {
        isOpen: isDrawerOpen,
        onClose: onDrawerClose,
        onOpen: onDrawerOpen
    } = useDisclosure()
    const {
        isOpen: isModalOpen,
        onClose: onModalClose,
        onOpen: onModalOpen
    } = useDisclosure()

    return (
        <>
            <UnorderedList role="list">
                {navigationLinks.map(({ href, label }, index) => (
                    <List hasActivePage={activePage === href} key={index}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </List>
                ))}
            </UnorderedList>
            <ClearCartModal isOpen={isModalOpen} onClose={onModalClose} />
            <Cart onClick={onDrawerOpen} activePage={activePage}>
                <span>
                    <AiOutlineShoppingCart size={70} />
                    <p>{itemsLength}</p>
                </span>
            </Cart>
            <Drawer size="sm" isOpen={isDrawerOpen} onClose={onDrawerClose}>
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerHeader>
                        <strong>Meu carrinho</strong>
                        <ExitButton
                            name="Fechar mini cart"
                            onClick={onDrawerClose}
                            whileHover={{ scale: [1, 0.9] }}
                        >
                            <IoMdClose />
                        </ExitButton>
                    </DrawerHeader>
                    <DrawerBody>
                        {!hasItems ? (
                            <AnyItems>
                                <span>
                                    <MdRemoveShoppingCart size={48} />
                                </span>
                                <strong>O seu carrinho esta vazio</strong>
                                <p>
                                    Volte para a loja e adicionar alguns bolos
                                    ao seu carrinho
                                </p>
                            </AnyItems>
                        ) : (
                            cartItems.map(item => (
                                <Accordion allowToggle key={item.cake.id}>
                                    <AccordionItem>
                                        <CakeItem>
                                            <Thumb>
                                                <Image
                                                    objectFit="cover"
                                                    width={400}
                                                    height={400}
                                                    src={
                                                        item.cake.photos[0].url
                                                    }
                                                    alt={item.cake.name}
                                                />
                                            </Thumb>
                                            <Info>
                                                <strong>
                                                    {item.cake.name}
                                                </strong>
                                                <p>R$ {item.cake.price}</p>
                                                <AmountControls
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
                                                </AmountControls>
                                            </Info>
                                            <CakeControls>
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
                                            </CakeControls>
                                        </CakeItem>
                                        <AccordionPanel tw="border-t-2" pb={4}>
                                            {item.cake.description}
                                        </AccordionPanel>
                                    </AccordionItem>
                                </Accordion>
                            ))
                        )}
                    </DrawerBody>
                    <DrawerFooter hasItems={hasItems}>
                        <CartOptions>
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
                        </CartOptions>
                        <Total>
                            <strong>Total R${total}</strong>
                            <Link href="/finish">
                                <motion.a
                                    whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                                >
                                    Finalizar compra
                                </motion.a>
                            </Link>
                        </Total>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default ItemsDesktop
