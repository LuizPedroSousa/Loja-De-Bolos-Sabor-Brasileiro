import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Logo, Nav, PageLinks } from './styles'

import useBreakPoint from '../../hooks/useBreakPoint'

import dynamic from 'next/dynamic'
const ItemsMobal = dynamic(() => import('./ItemsMobal'))
const ItemsDesktop = dynamic(() => import('./ItemsDesktop'))

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

interface HeaderProps {
    activePage: ActiveHrefType
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
    const { l, xsDown } = useBreakPoint()
    const { navigationLinks } = useMemo(() => {
        const navigationLinks: INavigationLinks[] = [
            { href: '/', label: 'Home' },
            { href: '/bolos', label: 'Bolos' },
            { href: '/contato', label: 'Contato' },
            { href: '/encomendar', label: 'Encomendar' },
            { href: '/faq', label: 'FAQ' }
        ]
        return { navigationLinks }
    }, [])

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
        <Container activePage={activePage}>
            <Nav activePage={activePage}>
                <Link passHref href="/">
                    <Logo activePage={activePage}>
                        <Image
                            src="/images/icon.png"
                            width={618}
                            height={369}
                            objectFit="contain"
                            alt="logo"
                        />
                    </Logo>
                </Link>
                <PageLinks>
                    {l && (
                        <ItemsDesktop
                            activePage={activePage}
                            navigationLinks={navigationLinks}
                        />
                    )}
                    {xsDown && !l && (
                        <ItemsMobal
                            activePage={activePage}
                            navigationLinks={navigationLinks}
                        />
                    )}
                </PageLinks>
            </Nav>
        </Container>
    )
}

export default Header
