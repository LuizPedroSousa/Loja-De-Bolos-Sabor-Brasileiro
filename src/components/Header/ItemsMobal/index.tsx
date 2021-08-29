import React, { FormEvent, useRef } from 'react'
import Link from 'next/link'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Hamburger from '../../AnimatedSvgs/Hamburger'

import { IoMdExit } from 'react-icons/io'
import {
    CartMobal,
    ExitButton,
    HamburgerButton,
    PageList,
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
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionPanel
} from '@chakra-ui/react'
import useCustomRipple from '../../../hooks/useCustomRipple'
import useCart from '../../../hooks/useCart'
import { useCakeCategories } from '../../../hooks/useCake'
import useBreakPoint from '../../../hooks/useBreakPoint'
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

interface ItemsMobalProps {
    navigationLinks: INavigationLinks[]
    activePage: ActiveHrefType
}

const ItemsMobal: React.FC<ItemsMobalProps> = ({
    navigationLinks,
    activePage
}) => {
    const {
        isOpen: isMenuOpen,
        onOpen: onMenuOpen,
        onClose: onMenuClose
    } = useDisclosure()

    const {
        isOpen: isMiniCartOpen,
        onOpen: onMiniCartOpen,
        onClose: onMiniCartClose
    } = useDisclosure()
    const { sm } = useBreakPoint()
    const cartRef = useRef<HTMLButtonElement>(null)
    const linkRef = useRef<HTMLAnchorElement>(null)
    const exitRef = useRef<HTMLButtonElement>(null)
    const buttonGoRef = useRef<HTMLButtonElement>(null)
    const sendSolicitationRef = useRef<HTMLAnchorElement>(null)
    const { itemsLength } = useCart()
    useCustomRipple([
        { ref: cartRef },
        { ref: linkRef },
        { ref: exitRef },
        { ref: buttonGoRef },
        { ref: sendSolicitationRef }
    ])

    const { '3md': md3 } = useBreakPoint()

    const { categories } = useCakeCategories()

    function handleFilterPrice(e: FormEvent) {
        e.preventDefault()
    }

    function handleOpenMiniCart() {
        onMenuClose()
        onMiniCartOpen()
    }

    function handleCloseMiniCart() {
        onMiniCartClose()
        onMenuOpen()
    }

    return (
        <>
            <HamburgerButton
                activePage={activePage}
                type="button"
                name="Menu"
                onClick={onMenuOpen}
            >
                <span>
                    <Hamburger />
                </span>
            </HamburgerButton>
            <Drawer
                size={sm ? 'md' : 'full'}
                isOpen={isMenuOpen}
                onClose={onMenuClose}
            >
                <DrawerOverlay />
                <DrawerContent bg="white">
                    <DrawerHeader
                        borderBottom="1px"
                        borderColor="gray.100"
                        align="end"
                    >
                        <ExitButton ref={exitRef} onClick={onMenuClose}>
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
                                                    {categories?.map(
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
                                                    {categories?.map(
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
                                        name="Mini Carrinho"
                                        onClick={handleOpenMiniCart}
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
            <MiniCartDrawer
                isOpen={isMiniCartOpen}
                onClose={handleCloseMiniCart}
            />
        </>
    )
}

export default ItemsMobal
