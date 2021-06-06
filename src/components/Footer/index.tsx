import React, { FormEvent, useMemo, useRef } from 'react'
import Image from 'next/image'

import {
    Container,
    Content,
    Logo,
    Newsletter,
    Form,
    InputGroup,
    Contact,
    Social
} from './styles'
import { motion } from 'framer-motion'
import { lighten } from 'polished'
import { FaMapMarkerAlt, FaWhatsapp, FaWhatsappSquare } from 'react-icons/fa'
import { BiPhoneCall, BiTime } from 'react-icons/bi'
import { AiFillFacebook, AiFillInstagram, AiOutlineMail } from 'react-icons/ai'
import MobalLinks from './MobalLinks'
import DesktopLinks from './DesktopLinks'
import useBreakPoint from '../../hooks/useBreakPoint'
import useCustomRipple from '../../hooks/useCustomRipple'
import { theme } from 'twin.macro'

type ContactList = {
    href: string
    label: string
    icon: any
}

type SocialContact = {
    href: string
    icon: any
}

const Footer: React.FC = () => {
    const { md, xsDown, l } = useBreakPoint()

    const sendButtonRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([
        { ref: sendButtonRef, color: lighten(0.2, theme`colors.orange.500`) }
    ])

    const handleSubscribe = (e: FormEvent) => {
        e.preventDefault()
    }

    const { contactList, socialContact } = useMemo(() => {
        const contactList: ContactList[] = [
            {
                href: '#',
                label: 'Av parada pinto 1608',
                icon: <FaMapMarkerAlt />
            },
            {
                href: '#',
                label: 'Seg. a sex. de 8h às 18h',
                icon: <BiTime />
            },
            {
                href: '#',
                label: '(11) 967890564',
                icon: <FaWhatsapp />
            },
            {
                href: '#',
                label: '(11) 967890564',
                icon: <BiPhoneCall />
            },
            {
                href: '#',
                label: 'saborbrasileiro@gmail.com',
                icon: <AiOutlineMail />
            }
        ]

        const socialContact: SocialContact[] = [
            { href: '#', icon: <AiFillFacebook size={20} /> },
            { href: '#', icon: <AiFillInstagram size={20} /> },
            { href: '#', icon: <FaWhatsappSquare size={20} /> }
        ]
        return { socialContact, contactList }
    }, [])

    return (
        <Container>
            <Content>
                <Newsletter>
                    <Logo>
                        <Image
                            width={977}
                            height={585}
                            objectFit="cover"
                            src="/images/logo.png"
                            alt="Sabor Brasileiro"
                        />
                    </Logo>
                    <Form onSubmit={handleSubscribe}>
                        <label htmlFor="email">
                            Fique dentro de novos sabores
                        </label>
                        <InputGroup>
                            <input
                                placeholder="Digite seu email"
                                type="text"
                                id="email"
                                name="email"
                            />
                            <motion.button type="submit" ref={sendButtonRef}>
                                Enviar
                            </motion.button>
                        </InputGroup>
                    </Form>
                </Newsletter>
                {xsDown && !l && (
                    <Contact>
                        <p>Informações de contato</p>
                        <div>
                            {contactList.map(({ href, label, icon }, index) => (
                                <a key={label + index} href={href}>
                                    <span>{icon}</span>
                                    {label}
                                </a>
                            ))}
                        </div>
                    </Contact>
                )}

                {md && <DesktopLinks />}
                {xsDown && !md && <MobalLinks />}
            </Content>
            <Social>
                <p>2020 Sabor brasileiro &copy;</p>
                <div>
                    {socialContact.map(({ href, icon }, i) => (
                        <a key={href + i} href={href}>
                            <span>{icon}</span>
                        </a>
                    ))}
                </div>
            </Social>
        </Container>
    )
}

export default Footer
