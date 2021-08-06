import React, { useRef, useState } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    useDisclosure
} from '@chakra-ui/react'

import * as S from './styles'
import DefaultDrawerHeaderTitle from '../DefaultDrawerHeaderTitle'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaMotorcycle, FaWhatsapp } from 'react-icons/fa'
import { BiStore } from 'react-icons/bi'
import { RiAdminLine, RiQuestionAnswerLine } from 'react-icons/ri'
import useCustomRipple from 'hooks/useCustomRipple'
import SignAndSignupModal from 'components/Modals/SignAndSignupModal/Index'
import { useUser } from 'hooks/useUser'
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiOutlineUser
} from 'react-icons/ai'

interface AccountDrawerProps {
    isOpen: boolean
    onOpen: () => void
    onClose: () => void
}

const AccountDrawerRender: React.FC<AccountDrawerProps> = ({
    isOpen,
    onClose,
    onOpen
}) => {
    const createAccountRef = useRef<HTMLButtonElement>(null)
    const loginRef = useRef<HTMLButtonElement>(null)
    const seeStoreRef = useRef<HTMLLIElement>(null)
    const buyInWhatsappRef = useRef<HTMLLIElement>(null)
    const faqRef = useRef<HTMLLIElement>(null)
    const [initialFormModalSign, setInitialFormModalSign] = useState<
        'login' | 'register'
    >('login')

    const {
        isOpen: isModalSignOpen,
        onOpen: onModalSignOpen,
        onClose: onModalSignClose
    } = useDisclosure()
    useCustomRipple([
        { ref: seeStoreRef },
        { ref: buyInWhatsappRef },
        { ref: faqRef },
        { ref: createAccountRef },
        { ref: loginRef }
    ])

    function handleOpenSign() {
        setInitialFormModalSign('login')
        onModalSignOpen()
        onClose()
    }
    function handleOpenSignup() {
        setInitialFormModalSign('register')
        onModalSignOpen()
        onClose()
    }

    const { user, isLoggedIn } = useUser()
    return (
        <>
            <SignAndSignupModal
                initialForm={initialFormModalSign}
                isOpen={isModalSignOpen}
                onDrawerOpen={onOpen}
                onClose={onModalSignClose}
            />
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
                        {isLoggedIn ? (
                            <>
                                <S.UserLogged>
                                    <S.Avatar
                                        name={user?.name}
                                        src={user?.avatar?.url}
                                    />
                                    <div>
                                        <strong>{user?.name}</strong>
                                        <strong>{user?.surname}</strong>
                                    </div>
                                </S.UserLogged>
                                <S.AccountServices>
                                    <S.AccountServiceListItem>
                                        <strong>Minha conta</strong>
                                    </S.AccountServiceListItem>
                                    <S.AccountServiceListItem>
                                        <Link href="/minha-conta/meus-dados">
                                            <motion.a
                                                whileHover={{
                                                    scale: [1, 0.94, 0.95, 0.94]
                                                }}
                                            >
                                                <span>
                                                    <AiOutlineUser />
                                                </span>{' '}
                                                Meu perfil
                                            </motion.a>
                                        </Link>
                                    </S.AccountServiceListItem>
                                    <S.AccountServiceListItem>
                                        <Link href="/minha-conta/meus-pedidos">
                                            <motion.a
                                                whileHover={{
                                                    scale: [1, 0.94, 0.95, 0.94]
                                                }}
                                            >
                                                <span>
                                                    <AiOutlineShoppingCart />
                                                </span>{' '}
                                                Meus Pedidos
                                            </motion.a>
                                        </Link>
                                    </S.AccountServiceListItem>

                                    <S.AccountServiceListItem>
                                        <Link href="/minha-conta/endereços">
                                            <motion.a
                                                whileHover={{
                                                    scale: [1, 0.94, 0.95, 0.94]
                                                }}
                                            >
                                                <span>
                                                    <FaMotorcycle />
                                                </span>{' '}
                                                Endereços de entrega
                                            </motion.a>
                                        </Link>
                                    </S.AccountServiceListItem>
                                    <S.AccountServiceListItem>
                                        <Link href="/minha-conta/lista-de-desejos">
                                            <motion.a
                                                whileHover={{
                                                    scale: [1, 0.94, 0.95, 0.94]
                                                }}
                                            >
                                                <span>
                                                    <AiOutlineHeart />
                                                </span>{' '}
                                                Lista de favoritos
                                            </motion.a>
                                        </Link>
                                    </S.AccountServiceListItem>
                                    {user?.isAdmin && (
                                        <S.AccountServiceListItem>
                                            <Link href="/admin">
                                                <motion.a
                                                    whileHover={{
                                                        scale: [
                                                            1, 0.94, 0.95, 0.94
                                                        ]
                                                    }}
                                                >
                                                    <span>
                                                        <RiAdminLine />
                                                    </span>{' '}
                                                    Painel administrativo
                                                </motion.a>
                                            </Link>
                                        </S.AccountServiceListItem>
                                    )}
                                </S.AccountServices>
                            </>
                        ) : (
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
                                        whileHover={{
                                            scale: [1, 0.9, 0.91, 0.9]
                                        }}
                                        type="button"
                                        name="Entrar em sua conta"
                                        onClick={handleOpenSign}
                                        ref={loginRef}
                                    >
                                        Entrar
                                    </motion.button>
                                    <motion.button
                                        whileHover={{
                                            scale: [1, 0.94, 0.95, 0.94]
                                        }}
                                        type="button"
                                        name="Criar uma conta"
                                        onClick={handleOpenSignup}
                                        ref={createAccountRef}
                                    >
                                        Criar uma conta
                                    </motion.button>
                                </S.UserNotLoggedFooter>
                            </S.UserNotLogged>
                        )}

                        <S.ServiceList role="list">
                            <S.ServiceListItem>
                                <strong>Serviços</strong>
                            </S.ServiceListItem>
                            <S.ServiceListItem ref={buyInWhatsappRef}>
                                <motion.a
                                    href="https://wa.me/5511961947550/?text=Ol%C3%A1%20gost%C3%A1ria%20de%20fazer%20um%20pedido%21"
                                    whileHover={{
                                        scale: [1, 0.94, 0.95, 0.94]
                                    }}
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
                                    whileHover={{
                                        scale: [1, 0.94, 0.95, 0.94]
                                    }}
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
        </>
    )
}

const AccountDrawer: React.FC<AccountDrawerProps> = props => {
    return <AccountDrawerRender {...props} />
}

export default AccountDrawer
