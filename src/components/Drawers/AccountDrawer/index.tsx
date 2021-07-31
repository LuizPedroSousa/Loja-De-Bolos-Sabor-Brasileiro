import React, { useRef } from 'react'
import { Drawer, DrawerBody, DrawerOverlay } from '@chakra-ui/react'

import * as S from './styles'
import DefaultDrawerHeaderTitle from '../DefaultDrawerHeaderTitle'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaWhatsapp } from 'react-icons/fa'
import { BiStore } from 'react-icons/bi'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import useCustomRipple from 'hooks/useCustomRipple'
// import { Container } from './styles';

interface AccountDrawerProps {
    isOpen: boolean
    onClose: () => void
}
const AccountDrawer: React.FC<AccountDrawerProps> = ({ isOpen, onClose }) => {
    const createAccountRef = useRef<HTMLButtonElement>(null)
    const loginRef = useRef<HTMLButtonElement>(null)
    const seeStoreRef = useRef<HTMLLIElement>(null)
    const buyInWhatsappRef = useRef<HTMLLIElement>(null)
    const faqRef = useRef<HTMLLIElement>(null)

    useCustomRipple([
        { ref: seeStoreRef },
        { ref: buyInWhatsappRef },
        { ref: faqRef },
        { ref: createAccountRef },
        { ref: loginRef }
    ])
    return (
        <Drawer size="sm" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay />
            <S.DrawerContent>
                <DefaultDrawerHeaderTitle
                    title="Minha Conta"
                    buttonProps={{
                        name: 'Fechar drawer de usuário',
                        type: 'button',
                        onClick: onClose
                    }}
                />
                <DrawerBody>
                    <S.UserNotLogged>
                        <S.UserNotLoggedHeader>
                            <S.Avatar />
                            <p>
                                <b>Entre ou cadastre-se</b>
                                <br />
                                seus pedidos, favoritos, conta...
                            </p>
                        </S.UserNotLoggedHeader>
                        <S.UserNotLoggedFooter>
                            <motion.button
                                whileHover={{ scale: [1, 0.9, 0.91, 0.9] }}
                                type="button"
                                name="Entrar em sua conta"
                                ref={loginRef}
                            >
                                Entrar
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: [1, 0.94, 0.95, 0.94] }}
                                type="button"
                                name="Criar uma conta"
                                ref={createAccountRef}
                            >
                                Criar uma conta
                            </motion.button>
                        </S.UserNotLoggedFooter>
                    </S.UserNotLogged>

                    <S.ServiceList role="list">
                        <S.ServiceListItem ref={buyInWhatsappRef}>
                            <motion.a
                                href="https://wa.me/5511961947550/?text=Ol%C3%A1%20gost%C3%A1ria%20de%20fazer%20um%20pedido%21"
                                whileHover={{ scale: [1, 0.94, 0.95, 0.94] }}
                                target="__blank"
                                rel="noreferrer"
                            >
                                <span>
                                    <FaWhatsapp />
                                </span>{' '}
                                Comprar pelo Whatsapp
                            </motion.a>
                        </S.ServiceListItem>
                        <S.ServiceListItem ref={seeStoreRef}>
                            <motion.a
                                whileHover={{ scale: [1, 0.94, 0.95, 0.94] }}
                                href="https://www.google.com/maps/dir/-23.4585594,-46.6820388/loja+de+bolos+sabor+brasileiro"
                                target="__blank"
                                rel="noreferrer"
                            >
                                <span>
                                    <BiStore />
                                </span>{' '}
                                Encontrar a loja
                            </motion.a>
                        </S.ServiceListItem>
                        <S.ServiceListItem ref={faqRef}>
                            <Link href="/faq">
                                <motion.a
                                    whileHover={{
                                        scale: [1, 0.94, 0.95, 0.94]
                                    }}
                                >
                                    <span>
                                        <RiQuestionAnswerLine />
                                    </span>{' '}
                                    Central de atendimento
                                </motion.a>
                            </Link>
                        </S.ServiceListItem>
                    </S.ServiceList>
                </DrawerBody>
            </S.DrawerContent>
        </Drawer>
    )
}

export default AccountDrawer
