import React, { useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Hamburger from '../../AnimatedSvgs/Hamburger'
import { IoMdExit } from 'react-icons/io'
import { CartMobal, ExitButton, HamburgerButton, LinkList } from './styles'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    Divider,
    List,
    ListItem,
    DrawerBody
} from '@chakra-ui/react'
import useCustomRipple from '../../../hooks/useCustomRipple'
import useCart from '../../../hooks/useCart'

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
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cartRef = useRef<HTMLButtonElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    const exitRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([{ ref: cartRef }, { ref: linkRef }, { ref: exitRef }])
    const { itemsLength } = useCart()

    return (
        <>
            <HamburgerButton type="button" onClick={onOpen}>
                <span>
                    <Hamburger />
                </span>
            </HamburgerButton>
            <Drawer isOpen={isOpen} onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="white">
                    <DrawerHeader align="end">
                        <ExitButton ref={exitRef} onClick={onClose}>
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
        </>
    )
}

export default ItemsMobal
