import React, { useRef, useState, useEffect } from 'react'
import {
    Modal,
    ModalBody,
    ModalHeader,
    ModalOverlay,
    Tabs,
    TabList,
    TabPanels,
    useDisclosure
} from '@chakra-ui/react'
import IconSvg from 'components/AnimatedSvgs/IconSvg'
import Input from './Input'
import Link from 'next/link'
import useCustomRipple from 'hooks/useCustomRipple'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import * as S from './styles'
import { authUser, checkAvailableNickname, createUser } from 'hooks/useUser'
import { motion } from 'framer-motion'
import ErrorMessage from './ErrorMessage'
import VerifyOTPModal from '../VerifyOTPModal'

interface SignAndSignupModalProps {
    onClose: () => void
    isOpen: boolean
    initialForm: 'login' | 'register'
    onDrawerOpen: () => void
}

const SignAndSignupModal: React.FC<SignAndSignupModalProps> = ({
    initialForm,
    isOpen,
    onClose,
    onDrawerOpen
}) => {
    const [currentTabIndex, setCurrentTabIndex] = useState(0)
    const registerButtonRef = useRef<HTMLButtonElement>(null)
    const loginButtonRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([{ ref: registerButtonRef }, { ref: loginButtonRef }])

    const {
        isOpen: isVerifyOTPOpen,
        onClose: onVerifyOTPClose,
        onOpen: onVerifyOTPOpen
    } = useDisclosure()

    const {
        createUserMutate,
        isCreateUserError,
        isCreateUserLoading,
        createUserErrorReason,
        isCreateUserSuccess
    } = createUser()

    const {
        authUserMutate,
        isAuthUserError,
        authUserErrorReason,
        isAuthUserLoading,
        resetAuthRequest,
        isAuthUserSuccess
    } = authUser({ step: 0 })

    // Login
    const {
        handleSubmit: handleLoginSubmit,
        getFieldProps: getLoginFieldProps,
        errors: loginErrors,
        touched: loginTouched,
        isValid: isLoginValid
    } = useFormik({
        initialValues: {
            nickname: '',
            password: ''
        },
        validationSchema: Yup.object().shape({
            nickname: Yup.string().required(
                '*O nome de usuário é um campo obrigatório'
            ),
            password: Yup.string().required('*A senha é um campo obrigatório')
        }),
        onSubmit: v => {
            authUserMutate(v)
        }
    })

    // Register
    const {
        handleSubmit: handleRegisterSubmit,
        getFieldProps: getRegisterFieldProps,
        setFieldError: setRegisterFieldError,
        errors: registerErrors,
        touched: registerTouched,
        isValid: isRegisterValid,
        values: { email }
    } = useFormik({
        initialValues: {
            name: '',
            surname: '',
            nickname: '',
            email: '',
            password: '',
            passwordConfirmation: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().required('*O nome é um campo obrigatório'),
            surname: Yup.string().required(
                '*O sobrenome é um campo obrigatório'
            ),
            nickname: Yup.string()
                .required('*O nome de usuário é um campo obrigatório')
                .min(4, '*O nome de usuário deve ter pelo menos 4 caracteres.')
                .test(
                    'nickname',
                    '*Este nome de usuário está indisponível.',
                    function (nickname) {
                        return checkAvailableNickname(nickname)
                    }
                ),
            email: Yup.string()
                .email('*Insira um e-mail válido.')
                .required('*O email é um campo obrigatório'),
            password: Yup.string()
                .required('*A senha é um campo obrigatório')
                .min(6, '*As senhas devem ter pelo menos 6 caracteres.'),
            passwordConfirmation: Yup.string()
                .required('*A confirmação de senha é um campo obrigatório')
                .oneOf(
                    [Yup.ref('password'), null],
                    '*As senhas não conferem. Tente outra vez.'
                )
        }),
        onSubmit: async v => {
            const user = { ...v }
            delete user.passwordConfirmation

            return await createUserMutate(user)
        }
    })

    useEffect(() => {
        setCurrentTabIndex(initialForm === 'login' ? 0 : 1)
    }, [initialForm])

    useEffect(() => {
        if (createUserErrorReason === 'emailExists') {
            setRegisterFieldError('email', '*Digite um email diferente')
        }
    }, [isCreateUserError])

    useEffect(() => {
        if (createUserErrorReason === 'emailExists') {
            setRegisterFieldError('email', null)
        }
    }, [email])

    function handleOnVerifyOTPClose() {
        resetAuthRequest()
        onDrawerOpen()
        onVerifyOTPClose()
    }

    useEffect(() => {
        if (isAuthUserSuccess) {
            resetAuthRequest()
            onVerifyOTPOpen()
            onClose()
        }
    }, [isAuthUserSuccess])

    useEffect(() => {
        if (isCreateUserSuccess) {
            setCurrentTabIndex(0)
        }
    }, [isCreateUserSuccess])

    function handleClose() {
        console.log('asd')
        if (isVerifyOTPOpen) {
            return onClose()
        }
        onClose()
        onDrawerOpen()
    }

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay backdropFilter="blur(6px)" />
                <S.ModalContent>
                    <ModalHeader>
                        <S.Title>
                            <span>
                                <IconSvg />
                            </span>
                            <h2>
                                {currentTabIndex === 0
                                    ? 'Entrar na loja'
                                    : 'Juntar-se Hoje à loja'}
                            </h2>
                        </S.Title>
                    </ModalHeader>
                    <ModalBody>
                        <Tabs
                            isLazy
                            defaultIndex={currentTabIndex}
                            onChange={i => setCurrentTabIndex(i)}
                        >
                            <TabList>
                                <S.Tab>Entrar</S.Tab>
                                <S.Tab>Cadastre-se</S.Tab>
                            </TabList>

                            <TabPanels>
                                <S.LoginTabPanel>
                                    {isAuthUserError && (
                                        <ErrorMessage
                                            form="login"
                                            reason={authUserErrorReason}
                                        />
                                    )}
                                    <S.LoginForm
                                        isValid={!isLoginValid}
                                        onSubmit={handleLoginSubmit}
                                    >
                                        <S.InputGroup>
                                            <Input
                                                name="username"
                                                label="Nome de usuário"
                                                errors={loginErrors?.nickname}
                                                touched={loginTouched?.nickname}
                                                inputProps={{
                                                    type: 'text',
                                                    placeholder:
                                                        'Digite seu nome de usuário',
                                                    autoComplete: 'nickname',
                                                    ...getLoginFieldProps(
                                                        'nickname'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="password"
                                                label="Senha"
                                                errors={loginErrors?.password}
                                                touched={loginTouched?.password}
                                                isInputPassword
                                                inputProps={{
                                                    placeholder:
                                                        'Digite sua senha',
                                                    ...getLoginFieldProps(
                                                        'password'
                                                    )
                                                }}
                                            />
                                        </S.InputGroup>
                                        <Link href="user/account-recovery">
                                            <a>Problemas para efetuar login?</a>
                                        </Link>
                                        <motion.button
                                            whileHover={{
                                                scale: [1, 0.93, 0.94, 0.93]
                                            }}
                                            name="Entrar em sua conta"
                                            ref={loginButtonRef}
                                            type="submit"
                                            disabled={!isLoginValid}
                                        >
                                            Entrar
                                            {isAuthUserLoading && (
                                                <S.CircularProgress />
                                            )}
                                        </motion.button>
                                    </S.LoginForm>
                                </S.LoginTabPanel>
                                <S.RegisterTabPanel>
                                    {isCreateUserError && (
                                        <ErrorMessage
                                            form="register"
                                            reason={createUserErrorReason}
                                        />
                                    )}
                                    <S.RegisterForm
                                        isValid={!isRegisterValid}
                                        onSubmit={handleRegisterSubmit}
                                    >
                                        <S.RegisterInputGroup>
                                            <Input
                                                name="name"
                                                label="Nome"
                                                touched={registerTouched?.name}
                                                errors={registerErrors?.name}
                                                inputProps={{
                                                    type: 'text',
                                                    placeholder:
                                                        'Digite seu nome',
                                                    ...getRegisterFieldProps(
                                                        'name'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="surname"
                                                label="Sobrenome"
                                                errors={registerErrors?.surname}
                                                touched={
                                                    registerTouched?.surname
                                                }
                                                inputProps={{
                                                    type: 'text',
                                                    placeholder:
                                                        'Digite seu sobrenome',
                                                    ...getRegisterFieldProps(
                                                        'surname'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="username"
                                                label="Nome de usuário"
                                                errors={
                                                    registerErrors?.nickname
                                                }
                                                touched={
                                                    registerTouched?.nickname
                                                }
                                                inputProps={{
                                                    type: 'text',
                                                    placeholder:
                                                        'Digite seu nome de usuário',
                                                    ...getRegisterFieldProps(
                                                        'nickname'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="email"
                                                label="Email"
                                                errors={registerErrors?.email}
                                                touched={registerTouched?.email}
                                                inputProps={{
                                                    type: 'text',
                                                    placeholder:
                                                        'Digite seu email',
                                                    ...getRegisterFieldProps(
                                                        'email'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="password"
                                                errors={
                                                    registerErrors?.password
                                                }
                                                touched={
                                                    registerTouched?.password
                                                }
                                                label="Senha"
                                                isInputPassword
                                                inputProps={{
                                                    placeholder:
                                                        'Digite sua senha',
                                                    autoComplete:
                                                        'new-password',
                                                    ...getRegisterFieldProps(
                                                        'password'
                                                    )
                                                }}
                                            />
                                            <Input
                                                name="repeat-password"
                                                label="Confirmação de Senha"
                                                errors={
                                                    registerErrors?.passwordConfirmation
                                                }
                                                touched={
                                                    registerTouched?.passwordConfirmation
                                                }
                                                isInputPassword
                                                inputProps={{
                                                    placeholder:
                                                        'Repita sua senha',
                                                    autoComplete:
                                                        'current-password',
                                                    ...getRegisterFieldProps(
                                                        'passwordConfirmation'
                                                    )
                                                }}
                                            />
                                        </S.RegisterInputGroup>
                                        <motion.button
                                            name="Criar conta"
                                            ref={registerButtonRef}
                                            type="submit"
                                            whileHover={{
                                                scale: [1, 0.93, 0.94, 0.93]
                                            }}
                                            disabled={!isRegisterValid}
                                        >
                                            Cadastrar-se
                                            {isCreateUserLoading && (
                                                <S.CircularProgress />
                                            )}
                                        </motion.button>
                                    </S.RegisterForm>
                                </S.RegisterTabPanel>
                            </TabPanels>
                        </Tabs>
                    </ModalBody>
                </S.ModalContent>
            </Modal>
            <VerifyOTPModal
                isOpen={isVerifyOTPOpen}
                onClose={handleOnVerifyOTPClose}
            />
        </>
    )
}

export default SignAndSignupModal
