import Footer from 'components/Footer'
import Header from 'components/Header'
import DefaultLayout from 'components/Layout/DefaultLayout'
import Seo from 'components/Seo'
import { prefetchUserShow, useUser } from 'hooks/useUser'
import useCart from 'hooks/useCart'
import { withAuth } from 'lib/withAuth'
import { GetServerSideProps } from 'next'
import React, { useEffect, useState } from 'react'
import {
    AiOutlineCheckCircle,
    AiOutlineHome,
    AiOutlineRight,
    AiOutlineShoppingCart,
    AiOutlineUser
} from 'react-icons/ai'
import { FiEdit } from 'react-icons/fi'
import { MdPayment } from 'react-icons/md'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Link from 'next/link'
import * as S from 'styles/pages/checkout'
import Image from 'next/image'
import { useRouter } from 'next/router'
function Checkout() {
    const [currentStep, setCurrentStep] = useState<number>(2)

    const { cartItems } = useCart()
    const { user } = useUser()

    const router = useRouter()
    useEffect(() => {
        if (!cartItems.length) {
            router.push('/meu-carrinho')
        }
    }, [])
    return (
        <DefaultLayout>
            <Seo
                title="Checkout"
                description="Finalização de compra"
                thumb=""
            />
            <main>
                <Header activePage="/bolos" />
                <S.StepSectionWrapper>
                    <S.StepSectionContainer>
                        <header>
                            <h2>Checkout</h2>
                            <S.Breadcrumb>
                                <Link href="/">
                                    <a>
                                        <span>
                                            <AiOutlineHome />
                                        </span>
                                        Home
                                    </a>
                                </Link>
                                <span>
                                    <AiOutlineRight />
                                </span>
                                <Link href="/bolos">
                                    <a>Bolos</a>
                                </Link>
                                <span>
                                    <AiOutlineRight />
                                </span>

                                <span>Checkout</span>
                            </S.Breadcrumb>
                        </header>

                        <S.StepSectionSteps>
                            <S.StepsLine currentStep={currentStep} />
                            <Link href="/meu-carrinho">
                                <S.ButtonStep
                                    hasCompleted={currentStep >= 1}
                                    as="a"
                                    hasCurrent={currentStep === 1}
                                    disabled={currentStep === 1}
                                    onClick={() => setCurrentStep(1)}
                                    name="Primeiro passo - carrinho"
                                    type="button"
                                >
                                    <span>1</span>
                                    <div>
                                        <span>
                                            <AiOutlineShoppingCart />
                                        </span>
                                        Carrinho
                                    </div>
                                </S.ButtonStep>
                            </Link>
                            <S.ButtonStep
                                hasCompleted={currentStep > 1}
                                hasCurrent={currentStep === 2}
                                disabled={currentStep === 2}
                                onClick={() => setCurrentStep(2)}
                                name="Segundo passo - detalhes"
                                type="button"
                            >
                                <span>2</span>
                                <div>
                                    <span>
                                        <AiOutlineUser />
                                    </span>
                                    Detalhes
                                </div>
                            </S.ButtonStep>
                            <S.ButtonStep
                                hasCompleted={currentStep > 2}
                                hasCurrent={currentStep === 3}
                                disabled={currentStep === 3}
                                onClick={() => setCurrentStep(3)}
                                name="Terceiro passo - pagar com"
                                type="button"
                            >
                                <span>3</span>
                                <div>
                                    <span>
                                        <MdPayment />
                                    </span>
                                    Pagar com
                                </div>
                            </S.ButtonStep>
                            <S.ButtonStep
                                hasCompleted={currentStep > 3}
                                disabled={currentStep === 4}
                                hasCurrent={currentStep === 4}
                                onClick={() => setCurrentStep(4)}
                                name="Quarto passo - confirmar"
                                type="button"
                            >
                                <span>4</span>
                                <div>
                                    <span>
                                        <AiOutlineCheckCircle />
                                    </span>
                                    Confirmação
                                </div>
                            </S.ButtonStep>
                        </S.StepSectionSteps>
                    </S.StepSectionContainer>
                </S.StepSectionWrapper>
                <S.Container>
                    <S.UserCard>
                        <S.UserInfo>
                            <S.UserAvatar
                                name={user?.name}
                                src={user?.avatar?.url}
                            />
                            <div>
                                <h3>{user?.name}</h3>
                                <span>{user?.email}</span>
                            </div>
                        </S.UserInfo>
                        <Link href="/profile">
                            <a>
                                <span>
                                    <FiEdit />
                                </span>
                                Editar perfil
                            </a>
                        </Link>
                    </S.UserCard>
                    <S.BuyInfoFieldset>
                        <legend>Informações da compra</legend>
                        <form>
                            <S.InputGroup>
                                <label htmlFor="name">Nome</label>
                                <input
                                    placeholder="Seu nome"
                                    id="name"
                                    value={user?.name}
                                    name="name"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="surname">Sobrenome</label>
                                <input
                                    placeholder="Seu sobrenome"
                                    value={user?.surname}
                                    id="surname"
                                    name="surname"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="email">Email</label>
                                <input
                                    value={user?.email}
                                    placeholder="Seu email"
                                    id="email"
                                    name="email"
                                    type="text"
                                />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label htmlFor="phone">
                                    Telefone <span>( Opcional )</span>
                                </label>
                                <input
                                    placeholder="Seu telefone"
                                    id="phone"
                                    name="name"
                                    type="text"
                                />
                            </S.InputGroup>

                            <S.InputGroup>
                                <label htmlFor="cep">CEP</label>
                                <input
                                    placeholder="00000-000"
                                    id="cep"
                                    name="cep"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="neighborhood">Bairro</label>
                                <input
                                    placeholder="Seu bairro"
                                    id="neighborhood"
                                    name="street"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="street-address">Rua</label>
                                <input
                                    placeholder="Sua rua"
                                    id="street-address"
                                    name="street"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="address-number">
                                    Número da casa
                                </label>
                                <input
                                    placeholder="Número da casa"
                                    id="address-number"
                                    name="address-number"
                                    type="text"
                                />
                            </S.InputGroup>
                            <S.InputGroup>
                                <label htmlFor="address-reference">
                                    Ponto de referencia{' '}
                                    <span>( Opcional )</span>
                                </label>
                                <input
                                    placeholder="Digite um ponto de referencia"
                                    id="address-reference"
                                    name="address-reference"
                                    type="text"
                                />
                            </S.InputGroup>
                        </form>
                    </S.BuyInfoFieldset>
                    <S.OrderSummaryAside>
                        <h2>Resumo do pedido</h2>

                        {cartItems.map(({ cake, amount }) => (
                            <S.OrderItem key={cake.id}>
                                <S.OrderItemThumb>
                                    <Image
                                        src={cake.photos[0].url}
                                        alt={cake.name}
                                        objectFit="contain"
                                        width={400}
                                        height={400}
                                    />
                                </S.OrderItemThumb>
                                <S.OrderItemInfo>
                                    <Link href={`/bolos/${cake.slug}`}>
                                        <a>{cake.name}</a>
                                    </Link>
                                    <div>
                                        <span>R${cake.price}</span>
                                        <span>x {amount}</span>
                                    </div>
                                </S.OrderItemInfo>
                            </S.OrderItem>
                        ))}
                        <footer>
                            <S.OrderTotalPrice>
                                <div>
                                    <span>Subtotal</span>
                                    <span>R$</span>
                                </div>
                                <div><span>Frete<span>R1</span></span></div>
                                <div></div>
                            </S.OrderTotalPrice>
                        </footer>
                    </S.OrderSummaryAside>
                </S.Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export default Checkout

export const getServerSideProps: GetServerSideProps = withAuth(async ctx => {
    const queryClient = new QueryClient()
    await prefetchUserShow({ ctx, queryClient })
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        }
    }
})
