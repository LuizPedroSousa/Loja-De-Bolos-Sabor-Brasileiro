import React, { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Hamburger from '../AnimatedSvgs/Hamburger'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import {
    Container,
    Logo,
    HamburgerButton,
    Nav,
    LinkList,
    Cart,
    CartMobal
} from './styles'
import { useMotionValue, useTransform, useViewportScroll } from 'framer-motion'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

interface INavigationLinks {
    href: ActiveHrefType
    label: string
}

interface HeaderProps {
    activePage: ActiveHrefType
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
    const { scrollY } = useViewportScroll()
    const { navigationLinks } = useMemo(() => {
        const navigationLinks: INavigationLinks[] = [
            { href: '/', label: 'Home' },
            { href: '/bolos', label: 'Bolos' },
            { href: '/contato', label: 'Contato' },
            { href: '/encomendar', label: 'Encomendar' }
        ]
        return { navigationLinks }
    }, [])

    const [hasViewMenu, setHasViewMenu] = useState<boolean>(false)

    const toggleViewMenu = () => setHasViewMenu(!hasViewMenu)

    // navbar
    // let prevScrollPos = scrollY.get()

    // const y = useMotionValue(0)

    // useTransform(scrollY, value => {
    //     const currentScrollPos = value

    //     if (prevScrollPos > currentScrollPos) {
    //         prevScrollPos = currentScrollPos
    //         return y.set(0)
    //     } else if (currentScrollPos > 10) {
    //         prevScrollPos = currentScrollPos
    //         return y.set(-100)
    //     }
    // })

    return (
        <Container>
            <Link href="/">
                <Logo>
                    <Image
                        src="/images/icon.png"
                        width={618}
                        height={369}
                        alt="logo"
                    />
                </Logo>
            </Link>
            <Nav hasViewMenu={hasViewMenu}>
                <HamburgerButton type="button" onClick={toggleViewMenu}>
                    <span>
                        <Hamburger />
                    </span>
                </HamburgerButton>
                <ul role="list">
                    {navigationLinks.map(({ href, label }, index) => (
                        <LinkList
                            hasActivePage={activePage === href}
                            key={index}
                        >
                            <Link href={href}>
                                <a>{label}</a>
                            </Link>
                        </LinkList>
                    ))}
                    <CartMobal numberOfItems={0}>
                        <button type="button" name="Meu carrinho">
                            <span>
                                <AiOutlineShoppingCart size={40} />
                            </span>
                        </button>
                    </CartMobal>
                </ul>
            </Nav>
            <Cart numberOfItems={0}>
                <label htmlFor="cart">Meu carrinho</label>
                <button id="cart" type="button" name="Meu carrinho">
                    <span>
                        <AiOutlineShoppingCart size={70} />
                    </span>
                </button>
            </Cart>
        </Container>
    )
}

export default Header
