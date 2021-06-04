import Link from 'next/link'
import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { UnorderedList, List, Cart, CartItem, CartFooter } from './styles'

import {
    Popover,
    PopoverArrow,
    PopoverBody,
    PopoverContent,
    PopoverFooter,
    PopoverHeader,
    PopoverTrigger
} from '@chakra-ui/react'
import useCart from '../../../hooks/useCart'
import Image from 'next/image'
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
    const { total, cartItems, itemsLength } = useCart()
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
            <Popover>
                <PopoverTrigger>
                    <Cart>
                        <span>
                            <AiOutlineShoppingCart size={70} />
                            <p>{itemsLength}</p>
                        </span>
                    </Cart>
                </PopoverTrigger>
                <PopoverContent bg="white">
                    <PopoverArrow bg="white" />
                    <PopoverHeader textAlign="right">
                        Meu carrinho
                    </PopoverHeader>
                    <PopoverBody>
                        {cartItems.map(
                            ({
                                cake: {
                                    id,
                                    name,
                                    photo: { url },
                                    price
                                }
                            }) => (
                                <CartItem key={id}>
                                    <Image
                                        src={url}
                                        alt={name}
                                        width={600}
                                        height={600}
                                    />
                                    <p>{name}</p>
                                    <span>{price}</span>
                                </CartItem>
                            )
                        )}
                    </PopoverBody>
                    <PopoverFooter px="0" pb="0" pt="4" as={CartFooter}>
                        <p>
                            Total (valor sem frete) <span>{total}</span>
                        </p>

                        <Link href="/meu-carrinho">
                            <a>Ver meu carrinho</a>
                        </Link>
                    </PopoverFooter>
                </PopoverContent>
            </Popover>
        </>
    )
}

export default ItemsDesktop
