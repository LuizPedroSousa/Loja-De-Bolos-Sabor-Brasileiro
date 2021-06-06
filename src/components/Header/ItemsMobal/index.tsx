import React, { useRef } from 'react'
import Link from 'next/link'
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiOutlineShoppingCart
} from 'react-icons/ai'
import Hamburger from '../../AnimatedSvgs/Hamburger'

import { MdRemoveShoppingCart } from 'react-icons/md'
import { IoMdClose, IoMdExit } from 'react-icons/io'
import {
    CartMobal,
    ExitButton,
    ModalContent,
    HamburgerButton,
    LinkList,
    CartItem,
    ItemInfo,
    CartRemoveItem,
    AnyItems
} from './styles'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Divider,
    List,
    ListItem,
    DrawerBody,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from '@chakra-ui/react'
import useCustomRipple from '../../../hooks/useCustomRipple'
import useCart from '../../../hooks/useCart'
import Image from 'next/image'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

interface INavigationLinks {
    href: ActiveHrefType
    label: string
}

interface ItemsMobalProps {
    navigationLinks: INavigationLinks[]
    activePage: ActiveHrefType
}

const ItemsMobal: React.FC<ItemsMobalProps> = ({
    navigationLinks,
    activePage
}) => {
    const {
        isOpen: isDrawerOpen,
        onOpen: onOpenDrawer,
        onClose: onCloseDrawer
    } = useDisclosure()
    const {
        isOpen: isModalOpen,
        onOpen: onModalOpen,
        onClose: onModalClose
    } = useDisclosure()
    const cartRef = useRef<HTMLButtonElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    const exitRef = useRef<HTMLButtonElement>(null)
    const exitModalRef = useRef<HTMLButtonElement>(null)
    const {
        itemsLength,
        cartItems,
        total,
        hasItems,
        upAmount,
        downAmount,
        removeItem
    } = useCart()
    useCustomRipple([{ ref: cartRef }, { ref: linkRef }, { ref: exitRef }])

    return (
        <>
            <HamburgerButton type="button" onClick={onOpenDrawer}>
                <span>
                    <Hamburger />
                </span>
            </HamburgerButton>
            <Drawer isOpen={isDrawerOpen} onClose={onCloseDrawer}>
                <DrawerOverlay />
                <DrawerContent bg="white">
                    <DrawerHeader align="end">
                        <ExitButton ref={exitRef} onClick={onCloseDrawer}>
                            <IoMdExit size={38} />
                        </ExitButton>
                    </DrawerHeader>
                    <Divider />
                    <DrawerBody px="0" mt="2">
                        <List>
                            {navigationLinks.map(({ href, label }, index) => (
                                <LinkList
                                    key={index}
                                    hasActivePage={activePage === href}
                                >
                                    <Link href={href}>
                                        <a ref={linkRef}>{label}</a>
                                    </Link>
                                </LinkList>
                            ))}

                            <ListItem>
                                <CartMobal
                                    color="primary"
                                    type="button"
                                    name="Meu Carrinho"
                                    onClick={onModalOpen}
                                    ref={cartRef}
                                >
                                    <span>
                                        <AiOutlineShoppingCart size={40} />
                                        <p>{itemsLength}</p>
                                    </span>
                                    Meu carrinho
                                </CartMobal>
                            </ListItem>
                        </List>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
            <Modal isOpen={isModalOpen} onClose={onModalClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        Meu Carrinho
                        <button ref={exitModalRef} onClick={onModalClose}>
                            <IoMdExit size={38} />
                        </button>
                    </ModalHeader>
                    <ModalBody>
                        {hasItems ? (
                            cartItems.map(item => (
                                <CartItem key={item.cake.id}>
                                    <Image
                                        objectFit="cover"
                                        width={600}
                                        height={600}
                                        src={item.cake.photo.url}
                                        alt={item.cake.name}
                                    />
                                    <ItemInfo>
                                        <p>
                                            {item.cake.name} <br />
                                            <span>R$ {item.cake.price}</span>
                                        </p>
                                        <div>
                                            <button
                                                type="button"
                                                onClick={() => upAmount(item)}
                                                name="Adicionar um"
                                            >
                                                <AiOutlineArrowUp />
                                            </button>
                                            <span>{item.amount}</span>
                                            <button
                                                type="button"
                                                name="Remover um"
                                                disabled={item.amount === 1}
                                                onClick={() => downAmount(item)}
                                            >
                                                <AiOutlineArrowDown />
                                            </button>
                                        </div>
                                    </ItemInfo>
                                    <CartRemoveItem
                                        type="button"
                                        onClick={() => removeItem(item)}
                                    >
                                        <IoMdClose />
                                    </CartRemoveItem>
                                </CartItem>
                            ))
                        ) : (
                            <AnyItems>
                                <p>Nenhum bolo no carrinho ainda</p>
                                <span>
                                    <MdRemoveShoppingCart size={50} />
                                </span>
                            </AnyItems>
                        )}
                    </ModalBody>
                    <ModalFooter>
                        <div>
                            <p>
                                Total (valor sem frete){' '}
                                <span>R$ {total || '0.00'}</span>
                            </p>
                        </div>

                        <Link href="/meu-carrinho">
                            <a>Ver meu carrinho</a>
                        </Link>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default ItemsMobal
