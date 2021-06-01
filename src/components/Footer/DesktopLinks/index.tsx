import NextLink from 'next/link'
import React from 'react'

import { Container } from './styles'

const DesktopLinks: React.FC = () => {
    return (
        <Container>
            <div>
                <p>Dúvidas</p>
                <a href="#">Perguntas Frequentes</a>
                <a href="#">Perguntas Sobre entrega</a>
            </div>
            <div>
                <p>Paginas</p>
                <NextLink href="">
                    <a>Home</a>
                </NextLink>
                <NextLink href="/bolos">
                    <a>Bolos</a>
                </NextLink>
                <NextLink href="/contato">
                    <a>Contato</a>
                </NextLink>
                <NextLink href="/encomendar">
                    <a>Encomendar</a>
                </NextLink>
                <NextLink href="/faq">
                    <a>FAQ</a>
                </NextLink>
            </div>
        </Container>
    )
}

export default DesktopLinks
