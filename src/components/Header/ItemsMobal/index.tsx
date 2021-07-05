import React, { FormEvent, useRef } from 'react'
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
    PageList,
    CartItem,
    ItemInfo,
    CartRemoveItem,
    AnyItems,
    AccordionItem,
    FilterItem,
    FilterCheckbox,
    FilterPriceForm,
    SendSolicitation
} from './styles'
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    useDisclosure,
    List,
    ListItem,
    DrawerBody,
    ModalOverlay,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'
import useCustomRipple from '../../../hooks/useCustomRipple'
import useCart from '../../../hooks/useCart'
import Image from 'next/image'
import { useCake } from '../../../hooks/useCake'
import useBreakPoint from '../../../hooks/useBreakPoint'

export type ActiveHrefType =
    | '/'
    | '/bolos'
    | '/contato'
    | '/encomendar'
    | '/faq'

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
    const { sm } = useBreakPoint()
    const cartRef = useRef<HTMLButtonElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    const exitRef = useRef<HTMLButtonElement>(null)
    const exitModalRef = useRef<HTMLButtonElement>(null)
    const buttonGoRef = useRef<HTMLButtonElement>(null)
    const sendSolicitationRef = useRef<HTMLAnchorElement>(null)
    const {
        itemsLength,
        cartItems,
        total,
        hasItems,
        upAmount,
        downAmount,
        removeItem
    } = useCart()
    const { categories } = useCake()
    useCustomRipple([
        { ref: cartRef },
        { ref: linkRef },
        { ref: exitRef },
        { ref: buttonGoRef },
        { ref: sendSolicitationRef }
    ])

    const { '3md': md3 } = useBreakPoint()

    function handleFilterPrice(e: FormEvent) {
        e.preventDefault()
    }

    return (
        <>
            <HamburgerButton
                activePage={activePage}
                type="button"
                onClick={onOpenDrawer}
            >
                <span>
                    <Hamburger />
                </span>
            </HamburgerButton>
            <Drawer
                size={sm ? 'md' : 'full'}
                isOpen={isDrawerOpen}
                onClose={onCloseDrawer}
            >
                <DrawerOverlay />
                <DrawerContent bg="white">
                    <DrawerHeader
                        borderBottom="1px"
                        borderColor="gray.100"
                        align="end"
                    >
                        <ExitButton ref={exitRef} onClick={onCloseDrawer}>
                            <IoMdExit size={38} />
                        </ExitButton>
                    </DrawerHeader>
                    <DrawerBody px="0">
                        <List>
                            {navigationLinks.map(({ href, label }, index) => (
                                <PageList
                                    key={index}
                                    hasActivePage={activePage === href}
                                >
                                    <Link href={href}>
                                        <a ref={linkRef}>{label}</a>
                                    </Link>
                                </PageList>
                            ))}
                            {activePage === '/bolos' && !md3 && (
                                <>
                                    <ListItem>
                                        <Accordion px="4" allowToggle>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <p>Categorias</p>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel>
                                                    <FilterItem>
                                                        <FilterCheckbox>
                                                            Todos
                                                        </FilterCheckbox>
                                                    </FilterItem>
                                                    {categories.map(
                                                        category => (
                                                            <FilterItem
                                                                key={
                                                                    category.id
                                                                }
                                                            >
                                                                <FilterCheckbox>
                                                                    {
                                                                        category.name
                                                                    }
                                                                </FilterCheckbox>
                                                            </FilterItem>
                                                        )
                                                    )}
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <p>Mais Comprados</p>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel>
                                                    {categories.map(
                                                        category => (
                                                            <FilterItem
                                                                key={
                                                                    category.id
                                                                }
                                                            >
                                                                <FilterCheckbox>
                                                                    {
                                                                        category.name
                                                                    }
                                                                </FilterCheckbox>
                                                            </FilterItem>
                                                        )
                                                    )}
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <p>Descontos</p>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel>
                                                    {categories.map(
                                                        category => (
                                                            <FilterItem
                                                                key={
                                                                    category.id
                                                                }
                                                            >
                                                                <FilterCheckbox>
                                                                    {
                                                                        category.name
                                                                    }
                                                                </FilterCheckbox>
                                                            </FilterItem>
                                                        )
                                                    )}
                                                </AccordionPanel>
                                            </AccordionItem>
                                            <AccordionItem>
                                                <h2>
                                                    <AccordionButton>
                                                        <p>Filtrar por preço</p>
                                                        <AccordionIcon />
                                                    </AccordionButton>
                                                </h2>
                                                <AccordionPanel>
                                                    <FilterItem>
                                                        <FilterCheckbox>
                                                            R$0.00 - R$10.00
                                                        </FilterCheckbox>
                                                    </FilterItem>
                                                    <FilterItem>
                                                        <FilterCheckbox>
                                                            R$10.00 - R$20.00
                                                        </FilterCheckbox>
                                                    </FilterItem>
                                                    <FilterItem>
                                                        <FilterCheckbox>
                                                            R$20.00 - R$30.00
                                                        </FilterCheckbox>
                                                    </FilterItem>
                                                    <FilterItem>
                                                        <FilterCheckbox>
                                                            R$60.00 +
                                                        </FilterCheckbox>
                                                    </FilterItem>
                                                    <FilterPriceForm
                                                        onSubmit={
                                                            handleFilterPrice
                                                        }
                                                    >
                                                        <div>
                                                            <input
                                                                type="text"
                                                                placeholder="R$0.00 - R$100.00"
                                                            />
                                                            <button
                                                                ref={
                                                                    buttonGoRef
                                                                }
                                                                type="submit"
                                                                name="Enviar"
                                                            >
                                                                Go
                                                            </button>
                                                        </div>
                                                    </FilterPriceForm>
                                                </AccordionPanel>
                                            </AccordionItem>
                                        </Accordion>
                                    </ListItem>
                                </>
                            )}

                            <ListItem>
                                {activePage === '/faq' ? (
                                    <Link href="/faq/requests/new">
                                        <SendSolicitation
                                            ref={sendSolicitationRef}
                                        >
                                            Enviar Solicitação
                                        </SendSolicitation>
                                    </Link>
                                ) : (
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
                                )}
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
                                        src={item.cake.photos[0].url}
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
