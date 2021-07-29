import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useDisclosure } from '@chakra-ui/react'
import useCart from '../../../hooks/useCart'
import { UnorderedList, List, Cart, SendSolicitation } from './styles'
import useCustomRipple from '../../../hooks/useCustomRipple'
import MiniCartDrawer from 'components/Drawers/MiniCartDrawer'

export type ActiveHrefType =
    | '/'
    | '/bolos'
    | '/bolos/bolo'
    | '/contato'
    | '/encomendar'
    | '/faq'
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
    const sendSolicitationRef = useRef<HTMLAnchorElement>(null)

    useCustomRipple([{ ref: sendSolicitationRef }])

    const {
        isOpen: isDrawerOpen,
        onClose: onDrawerClose,
        onOpen: onDrawerOpen
    } = useDisclosure()

    const { itemsLength } = useCart()
    return (
        <>
            <UnorderedList activePage={activePage} role="list">
                {navigationLinks.map(({ href, label }, index) => (
                    <List hasActivePage={activePage === href} key={index}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </List>
                ))}
            </UnorderedList>
            {activePage === '/faq' ? (
                <Link href="/faq/requests/new">
                    <SendSolicitation ref={sendSolicitationRef}>
                        {' '}
                        Enviar Solicitação
                    </SendSolicitation>
                </Link>
            ) : (
                <Cart onClick={onDrawerOpen} activePage={activePage}>
                    <span>
                        <AiOutlineShoppingCart
                            size={activePage !== '/' ? 60 : 70}
                        />
                        <p>{itemsLength}</p>
                    </span>
                </Cart>
            )}
            <MiniCartDrawer isOpen={isDrawerOpen} onClose={onDrawerClose} />
        </>
    )
}

export default ItemsDesktop
