import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { UnorderedList, List, Cart } from './styles'

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
            <Cart numberofitems={0}>
                <label htmlFor="cart">Meu carrinho</label>
                <button id="cart" type="button" name="Meu carrinho">
                    <span>
                        <AiOutlineShoppingCart size={70} />
                    </span>
                </button>
            </Cart>
        </>
    )
}

export default ItemsDesktop
