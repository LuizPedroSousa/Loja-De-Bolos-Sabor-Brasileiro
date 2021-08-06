import Link from 'next/link'
import React, { useRef } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

import { useDisclosure } from '@chakra-ui/react'
import useCart from '../../../hooks/useCart'
import * as S from './styles'
import useCustomRipple from '../../../hooks/useCustomRipple'
import MiniCartDrawer from 'components/Drawers/MiniCartDrawer'
import AccountDrawer from 'components/Drawers/AccountDrawer'
import { useUser } from 'hooks/useUser'

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
        isOpen: isMiniCartDrawerOpen,
        onClose: onMiniCartDrawerClose,
        onOpen: onMiniCartDrawerOpen
    } = useDisclosure()

    const {
        isOpen: isAccountDrawerOpen,
        onClose: onAccountDrawerClose,
        onOpen: onAccountDrawerOpen
    } = useDisclosure()

    const { itemsLength } = useCart()
    const { isLoggedIn, user } = useUser()
    return (
        <>
            <S.UnorderedList activePage={activePage} role="list">
                {navigationLinks.map(({ href, label }, index) => (
                    <S.List hasActivePage={activePage === href} key={index}>
                        <Link href={href}>
                            <a>{label}</a>
                        </Link>
                    </S.List>
                ))}
            </S.UnorderedList>
            {activePage === '/faq' ? (
                <Link href="/faq/requests/new">
                    <S.SendSolicitation ref={sendSolicitationRef}>
                        {' '}
                        Enviar Solicitação
                    </S.SendSolicitation>
                </Link>
            ) : (
                <S.ButtonDrawersContainer>
                    <S.UserAccount
                        type="button"
                        onClick={onAccountDrawerOpen}
                        activePage={activePage}
                        name="Abrir drawer de usuário"
                    >
                        <span>
                            <AiOutlineUser
                                size={activePage !== '/' ? 60 : 70}
                            />
                        </span>
                        <p>
                            {isLoggedIn ? 'Olá, ' + user?.name : 'Minha conta'}
                            <br />
                            <strong>meus pedidos</strong>
                        </p>
                    </S.UserAccount>
                    <S.Cart
                        onClick={onMiniCartDrawerOpen}
                        type="button"
                        name="Abrir drawer de mini cart"
                        activePage={activePage}
                    >
                        <span>
                            <AiOutlineShoppingCart
                                size={activePage !== '/' ? 60 : 65}
                            />
                            <p>{itemsLength}</p>
                        </span>
                    </S.Cart>
                </S.ButtonDrawersContainer>
            )}
            <MiniCartDrawer
                isOpen={isMiniCartDrawerOpen}
                onClose={onMiniCartDrawerClose}
            />
            <AccountDrawer
                onOpen={onAccountDrawerOpen}
                isOpen={isAccountDrawerOpen}
                onClose={onAccountDrawerClose}
            />
        </>
    )
}

export default ItemsDesktop
