import React from 'react'
import { RiErrorWarningFill } from 'react-icons/ri'

import * as S from './styles'

type Address = {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
}

interface CepConsultMessageProps {
    status: 'notFound' | 'notDelivering' | 'success'
    address: Address
}

const CepConsultMessage: React.FC<CepConsultMessageProps> = ({
    status,
    address
}) => {
    switch (status) {
        case 'notDelivering':
            return (
                <S.NotDelivering
                    initial={{ opacity: 0, scale: 0.25 }}
                    animate={{
                        opacity: [null, 1],
                        scale: [null, 1],
                        transition: { duration: 0.5 }
                    }}
                >
                    <strong>
                        Não entregamos nessa região.{' '}
                        <span>
                            <RiErrorWarningFill />
                        </span>
                    </strong>
                    <p>
                        Infelizmente ainda não entregamos no cep consultado,
                        tente por outro ou busque o seu pedido diretamente em
                        nossa loja.
                    </p>
                </S.NotDelivering>
            )
        case 'notFound':
            return (
                <S.NotFound
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [null, 1],
                        scale: [null, 1],
                        transition: { duration: 0.5 }
                    }}
                >
                    <strong>
                        Cep não encontrado.{' '}
                        <span>
                            <RiErrorWarningFill />
                        </span>
                    </strong>
                    <p>
                        O cep digitado não foi encontrado, tente por outro ou{' '}
                        <a
                            target="_blank"
                            href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                            rel="noreferrer"
                        >
                            busque no site dos correios.
                        </a>
                    </p>
                </S.NotFound>
            )

        case 'success':
            return (
                <S.Success
                    className="warning-success"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [null, 1],
                        scale: [null, 1],
                        transition: { duration: 0.5 }
                    }}
                >
                    <strong>
                        Entregamos nessa região!
                        <span>
                            <RiErrorWarningFill />
                        </span>
                    </strong>
                    <S.SuccessAddress>
                        <div>
                            <strong>Cidade</strong>
                            <p>{address.city}</p>
                        </div>
                        <div>
                            <strong>Estado</strong>
                            <p>{address.state}</p>
                        </div>
                        <div>
                            <strong>Bairro</strong>
                            <p>{address.neighborhood}</p>
                        </div>
                        <div>
                            <strong>Rua</strong>
                            <p>{address.street}</p>
                        </div>
                    </S.SuccessAddress>
                </S.Success>
            )

        default:
    }
}

export default CepConsultMessage
