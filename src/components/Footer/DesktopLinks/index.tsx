import NextLink from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiPhoneCall, BiTime } from 'react-icons/bi'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'

import { Container } from './styles'

const DesktopLinks: React.FC = () => {
    return (
        <Container>
            <div>
                <p>Informações de contato</p>
                <a href="#">
                    <span>
                        <FaMapMarkerAlt />
                    </span>
                    Av parada pinto 1608
                </a>
                <a href="#">
                    <span>
                        <BiTime />
                    </span>
                    Seg. a sex. de 8h às 18h
                </a>
                <a href="#">
                    <span>
                        <FaWhatsapp />
                    </span>
                    (11) 967890564
                </a>
                <a href="#">
                    <span>
                        <BiPhoneCall />
                    </span>
                    (11) 967890564
                </a>
                <a href="#">
                    <span>
                        <AiOutlineMail />
                    </span>
                    saborbrasileiro@gmail.com
                </a>
            </div>
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
