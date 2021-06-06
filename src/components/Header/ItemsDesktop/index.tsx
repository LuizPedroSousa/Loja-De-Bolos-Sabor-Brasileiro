import Link from 'next/link'
import React from 'react'
import {
    AiOutlineArrowDown,
    AiOutlineArrowUp,
    AiOutlineShoppingCart
} from 'react-icons/ai'
import {
    UnorderedList,
    List,
    Cart,
    AnyItems,
    CartContent,
    CartRemoveItem,
    CartItem,
    ItemInfo
} from './styles'

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
import { IoMdClose } from 'react-icons/io'
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
    const {
        total,
        cartItems,
        itemsLength,
        hasItems,
        removeItem,
        upAmount,
        downAmount
    } = useCart()
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
                <PopoverContent
                    as={CartContent}
                    mr="10"
                    mt="1"
                    w="sm"
                    bg="white"
                    borderRadius="xl"
                >
                    <PopoverArrow bg="white" />
                    <PopoverHeader
                        borderColor="orange.100"
                        textAlign="right"
                        py="4"
                    >
                        <strong>Meu Carrinho</strong>
                    </PopoverHeader>
                    <PopoverBody py={hasItems ? '16' : '4'}>
                        {!hasItems ? (
                            <AnyItems>
                                <p>Nenhum bolo no carrinho</p>
                            </AnyItems>
                        ) : (
                            cartItems.map(item => (
                                <CartItem key={item.cake.id}>
                                    <Image
                                        objectFit="cover"
                                        src={item.cake.photo.url}
                                        alt={item.cake.name}
                                        width={600}
                                        height={600}
                                    />
                                    <ItemInfo hasDownAmount={item.amount > 1}>
                                        <p>
                                            {item.cake.name}
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
                                        onClick={() => removeItem(item)}
                                    >
                                        <IoMdClose size={50} />
                                    </CartRemoveItem>
                                </CartItem>
                            ))
                        )}
                    </PopoverBody>
                    <PopoverFooter
                        borderColor="orange.100"
                        px="0"
                        pb="0"
                        pt="4"
                    >
                        <p>
                            Total (valor sem frete){' '}
                            <span>R$ {total || '0.00'}</span>
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
