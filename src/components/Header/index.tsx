import React, { useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container, Logo, Nav } from './styles'

import useBreakPoint from '../../hooks/useBreakPoint'
import ItemsDesktop from './ItemsDesktop'
import ItemsMobal from './ItemsMobal'

export type ActiveHrefType = '/' | '/bolos' | '/contato' | '/encomendar'

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
            { href: '/encomendar', label: 'Encomendar' }
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
            <Nav>
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
            </Nav>
        </Container>
    )
}

export default Header
