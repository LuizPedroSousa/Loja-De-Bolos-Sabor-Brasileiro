import React, { useEffect, useRef, useState } from 'react'
import DefaultLayout from '../../../components/Layout/DefaultLayout'
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'
import {
    Container,
    FieldGroup,
    Reason,
    ReasonButton
} from '../../../styles/pages/faq/requests/new'
import { RiErrorWarningLine } from 'react-icons/ri'
import { motion } from 'framer-motion'
import useCustomRipple from '../../../hooks/useCustomRipple'
import { useFormik } from 'formik'
import { useMutation } from 'react-query'
import { createSolicitation } from '../../../hooks/useFAQ'
import { CircularProgress, useDisclosure } from '@chakra-ui/react'
import * as Yup from 'yup'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie'
import SolicitationModal from '../../../components/Modals/SolicitationModal'
import Seo from 'components/Seo'
type ReasonType = {
    name: string
}
type Solicitation = {
    name: string
    surname: string
    email: string
    reason: string
    subject: string
    description: string
}
export default function Solicitação() {
    const reasons: ReasonType[] = [
        { name: 'Dúvida' },
        { name: 'Problema' },
        { name: 'Sugestão/Elogio' },
        { name: 'Denúncia' },
        { name: 'Outros' }
    ]

    const { mutate, isSuccess, isError, isLoading } = useMutation(
        (solicitation: Solicitation) => createSolicitation({ solicitation })
    )

    const { isOpen, onClose, onOpen } = useDisclosure()
    const [activeReason, setActiveReason] = useState(0)
    const router = useRouter()

    const { getFieldProps, handleSubmit, errors, touched, isValid, values } =
        useFormik({
            initialValues: {
                name: '',
                surname: '',
                email: '',
                subject: '',
                description: ''
            },
            validationSchema: Yup.object().shape({
                name: Yup.string().required('O nome é um campo obrigatório'),
                surname: Yup.string().required(
                    'O sobrenome é um campo obrigatório'
                ),
                email: Yup.string()
                    .email('Porfavor digite um email valido.')
                    .required('O email é um campo obrigatório'),
                subject: Yup.string().required(
                    'O assunto é um campo obrigatório'
                ),
                description: Yup.string().required(
                    'A menssagem é um campo obrigatório'
                )
            }),
            onSubmit: async values => {
                const solicitation = {
                    ...values,
                    reason: reasons[activeReason].name
                }
                mutate({ ...solicitation })
            }
        })

    const submitRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: submitRef }])

    useEffect(() => {
        const solicitation = {
            ...values,
            reason: reasons[activeReason].name
        }
        if (isSuccess) {
            Cookies.set('hasSolicitation', JSON.stringify(solicitation))
            router.push('/faq')
        }
        if (isError) {
            onOpen()
        }
    }, [isLoading])

    return (
        <DefaultLayout>
            <Seo
                thumb={`${process.env.NEXT_PUBLIC_URL}/images/thumbs/solicitation.png`}
                description="Envie uma solicitação com informações sobre sugestões, problemas ou duvidas. Sabor Brasileiro | O melhor sempre!"
                title="Enviar uma solicitação | FAQ"
            />
            <Header activePage="/faq" />
            <main>
                <Container hasErrors={!isValid}>
                    <SolicitationModal
                        status="failed"
                        isOpen={isOpen}
                        onClose={onClose}
                        solicitation={{
                            ...values,
                            reason: reasons[activeReason].name
                        }}
                    />
                    <motion.form
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: [null, 0], opacity: [null, 1] }}
                        onSubmit={handleSubmit}
                    >
                        <fieldset>
                            <legend>Enviar solicitação</legend>
                            <div>
                                <FieldGroup
                                    hasValue={values.name && touched.name}
                                    hasErrors={errors.name && touched.name}
                                >
                                    <label htmlFor="name">Nome</label>
                                    <input
                                        type="text"
                                        name="name"
                                        {...getFieldProps('name')}
                                        id="name"
                                        placeholder="Digite seu nome"
                                    />
                                    {errors.name && touched.name && (
                                        <div>
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                            <p>{errors.name}</p>
                                        </div>
                                    )}
                                </FieldGroup>
                                <FieldGroup
                                    hasValue={values.surname && touched.surname}
                                    hasErrors={
                                        errors.surname && touched.surname
                                    }
                                >
                                    <label htmlFor="surname">Sobrenome</label>
                                    <input
                                        type="text"
                                        id="surname"
                                        {...getFieldProps('surname')}
                                        name="surname"
                                        placeholder="Digite seu sobrenome"
                                    />
                                    {errors.surname && touched.surname && (
                                        <div>
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                            <p>{errors.surname}</p>
                                        </div>
                                    )}
                                </FieldGroup>
                                <FieldGroup
                                    hasValue={values.email && touched.email}
                                    hasErrors={errors.email && touched.email}
                                >
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        {...getFieldProps('email')}
                                        id="email"
                                        placeholder="Digite seu email"
                                    />
                                    {errors.email && touched.email && (
                                        <div>
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                            <p>{errors.email}</p>
                                        </div>
                                    )}
                                </FieldGroup>
                                <Reason>
                                    <label>
                                        Motivo <span>(Opcional)</span>
                                    </label>
                                    {reasons.map(({ name }, i) => (
                                        <ReasonButton
                                            type="button"
                                            onClick={() => setActiveReason(i)}
                                            name={name}
                                            activeReason={
                                                reasons[activeReason].name ===
                                                name
                                            }
                                            key={name + i}
                                        >
                                            {name}
                                        </ReasonButton>
                                    ))}
                                </Reason>
                                <FieldGroup
                                    hasValue={values.subject && touched.subject}
                                    hasErrors={
                                        errors.subject && touched.subject
                                    }
                                >
                                    <label htmlFor="subject">Assunto</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        {...getFieldProps('subject')}
                                        name="subject"
                                        placeholder="Digite o assunto"
                                    />
                                    {errors.subject && touched.subject && (
                                        <div>
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                            <p>{errors.subject}</p>
                                        </div>
                                    )}
                                </FieldGroup>
                                <FieldGroup
                                    hasValue={
                                        values.description &&
                                        touched.description
                                    }
                                    hasErrors={
                                        errors.description &&
                                        touched.description
                                    }
                                >
                                    <label htmlFor="message">Descrição</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        {...getFieldProps('description')}
                                        rows={4}
                                        placeholder="Digite sua menssagem"
                                    />
                                    {errors.description && touched.description && (
                                        <div>
                                            <span>
                                                <RiErrorWarningLine />
                                            </span>
                                            <p>{errors.description}</p>
                                        </div>
                                    )}
                                </FieldGroup>
                            </div>
                            <footer>
                                <div>
                                    <span>
                                        <RiErrorWarningLine />
                                    </span>
                                    <p>
                                        Um staff ou admininstrador da loja ira
                                        responder sua solicitação em breve.
                                    </p>
                                </div>
                                <motion.button
                                    ref={submitRef}
                                    whileHover={
                                        isValid && {
                                            scale: [1, 0.91, 0.93, 0.91]
                                        }
                                    }
                                    name="Enviar solicitação"
                                    type="submit"
                                    disabled={!isValid}
                                >
                                    {isLoading ? (
                                        <CircularProgress
                                            isIndeterminate
                                            bg="none"
                                            justifyContent="center!important"
                                            trackColor="none"
                                            color="white"
                                        />
                                    ) : (
                                        'Enviar solicitação'
                                    )}
                                </motion.button>
                            </footer>
                        </fieldset>
                    </motion.form>
                </Container>
            </main>
            <Footer />
        </DefaultLayout>
    )
}
