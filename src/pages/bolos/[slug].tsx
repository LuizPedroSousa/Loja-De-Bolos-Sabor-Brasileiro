import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Footer from 'components/Footer'
import Header from 'components/Header'
import DefaultLayout from 'components/Layout/DefaultLayout'
import Seo from 'components/Seo'
import {
    getCakes,
    getCake,
    getCakeQuery,
    getRelatedCakesQuery
} from 'hooks/useCake'
import useBreakPoint from 'hooks/useBreakPoint'
import * as Yup from 'yup'
import {
    AiOutlineCheck,
    AiOutlineHeart,
    AiOutlineLine,
    AiOutlinePlus
} from 'react-icons/ai'
import { IoMdHeartDislike } from 'react-icons/io'
import MobalSlider from 'components/Bolos/Bolo/MobalSlider'
import DesktopImagesPreview from 'components/Bolos/Bolo/DesktopImagesPreview'
import { motion } from 'framer-motion'
import IngredientIcon from 'components/AnimatedSvgs/IngredientIcon'
import { useFormik } from 'formik'
import { maskCep } from 'utils/masks/cep'
import * as S from 'styles/pages/bolos/bolo'
import axios from 'axios'
import CepConsultMessage from 'components/CepConsultMessage'
import { BiErrorAlt } from 'react-icons/bi'
import {
    useHasInFavorite,
    useToggleFavoriteCake,
    useFavorites
} from 'hooks/useFavoriteCakes'
import { useAddToCart } from 'hooks/useCart'
import BuyCakeModal from 'components/Modals/BuyCakeModal'
import { Editable, EditableInput, useDisclosure } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import UserRating from 'components/Bolos/Bolo/UserRating'
import Rating from '@material-ui/lab/Rating'
import RelatedCake from 'components/Bolos/Bolo/RelatedCake'

type Photo = {
    id: string
    url: string
}

type Ingredient = {
    id: string
    name: string
}

type CakeFromApi = {
    id: string
    price: string
    name: string
    slug: string
    description: string
    category: string
    photos: Photo[]
    ingredients: Ingredient[]
}

type Address = {
    cep: string
    state: string
    city: string
    neighborhood: string
    street: string
}

type QueryDeliveryCep = {
    status: 'notFound' | 'notDelivering' | 'success'
    address: Address
    request: {
        isLoading: boolean
        isError: boolean
        isSuccess: boolean
    }
}

interface BoloProps {
    slug: string
}

export default function Bolo({ slug }: BoloProps) {
    const { sm, xsDown } = useBreakPoint()

    const { cake } = getCakeQuery({ slug })

    const [hasInFavorites, setHasInFavorites] = useState(false)
    const [queryDelivery, setQueryDelivery] = useState<QueryDeliveryCep>(
        {} as QueryDeliveryCep
    )
    const router = useRouter()
    const { isOpen, onClose, onOpen } = useDisclosure()
    const { addToCart, hasInCart } = useAddToCart(cake)
    const { favoriteCakes } = useFavorites()
    const { toggleFavoriteCake } = useToggleFavoriteCake()
    const { hasCakeInFavorites } = useHasInFavorite()

    const { relatedCakes } = getRelatedCakesQuery({
        categoryName: cake.category
    })
    useEffect(() => {
        setHasInFavorites(hasCakeInFavorites(cake))
    }, [favoriteCakes])

    const {
        handleSubmit,
        getFieldProps,
        values: { cep }
    } = useFormik({
        initialValues: { cep: '' },
        validationSchema: Yup.object().shape({
            cep: Yup.string().matches(/^(\d{5})-(\d{3})/, 'Cep invalido')
        }),
        onSubmit: async ({ cep }) => {
            setQueryDelivery({
                ...queryDelivery,
                request: {
                    isError: false,
                    isSuccess: false,
                    isLoading: true
                }
            })
            const firstNumbers = Number(cep.substring(1, 5))
            if (
                (firstNumbers >= 2100 && firstNumbers <= 2399) ||
                firstNumbers < 2000 ||
                firstNumbers > 2999 ||
                Number(cep.substring(0, 1)) !== 0
            ) {
                return setQueryDelivery({
                    status: 'notDelivering',
                    address: {
                        ...queryDelivery.address
                    },
                    request: {
                        isError: true,
                        isSuccess: false,
                        isLoading: false
                    }
                })
            }

            try {
                const { data: address } = await axios.get<Address>(
                    'https://brasilapi.com.br/api/cep/v1/' + cep
                )
                return setQueryDelivery({
                    status: 'success',
                    address,
                    request: {
                        isError: false,
                        isSuccess: true,
                        isLoading: false
                    }
                })
            } catch {
                return setQueryDelivery({
                    status: 'notFound',
                    address: {
                        ...queryDelivery.address
                    },
                    request: {
                        isError: true,
                        isSuccess: false,
                        isLoading: false
                    }
                })
            }
        }
    })
    const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
        maskCep(e)
    }, [])

    useEffect(() => {
        if (
            queryDelivery.request?.isSuccess ||
            queryDelivery.request?.isError
        ) {
            setQueryDelivery({
                ...queryDelivery,
                request: {
                    isLoading: false,
                    isError: false,
                    isSuccess: false
                }
            })
        }
    }, [cep])

    function handleAddToCart() {
        if (hasInCart) {
            return router.push('/meu-carrinho')
        }
        addToCart({ cake, amount: 1 })
        onOpen()
    }

    return (
        <DefaultLayout>
            <Seo
                description={cake.description}
                thumb={cake.photos[0].url}
                title={cake.name}
            />
            <main>
                <Header activePage="/bolos/bolo" />
                <S.Container>
                    <S.CakePhotosSection>
                        {!sm && xsDown && <MobalSlider cake={cake} />}
                        {sm && <DesktopImagesPreview cake={cake} />}
                    </S.CakePhotosSection>
                    <S.CakeInfoSection>
                        <S.CakeInfoTitle>
                            <strong>{cake.name}</strong>
                            <p>{cake.description}</p>
                            <S.Stars>
                                <Rating readOnly value={cake.starsAverage} />
                                <p>({cake.ratings.length})</p>
                            </S.Stars>
                            {cake.starsAverage >= 4 && (
                                <S.CakeInfoBest>
                                    <strong>Prove o melhor Sabor</strong>
                                </S.CakeInfoBest>
                            )}

                            <S.CakeInfoPrice>
                                <p>
                                    Por <strong>R$ {cake.price}</strong> <br />
                                    em dinheiro ou avista <span>
                                        sem juros
                                    </span>{' '}
                                    cart??o!
                                </p>
                            </S.CakeInfoPrice>
                        </S.CakeInfoTitle>
                        <S.CakeInfoShop></S.CakeInfoShop>
                        <S.CakeInfoIngredients>
                            <strong>Principais Ingredientes</strong>
                            <ul>
                                {cake.ingredients.map(ingredient => (
                                    <motion.li
                                        key={'ingredient_' + ingredient.id}
                                    >
                                        <span>
                                            <IngredientIcon />
                                        </span>
                                        <p>{ingredient.name}</p>
                                    </motion.li>
                                ))}
                            </ul>
                        </S.CakeInfoIngredients>
                    </S.CakeInfoSection>
                    <S.CakeDeliveryOptionsSection>
                        <strong>Op????es de entrega</strong>
                        <S.DeliveryOptionsPickUpAtStore>
                            <div>
                                <strong>Retire na loja</strong>
                                <p>
                                    Compre e retire seu pedido diretamente em
                                    nossa loja e com{' '}
                                    <strong>frete gratis</strong>!
                                </p>
                            </div>
                            <motion.a
                                href="https://www.google.com/maps/dir/-23.4585594,-46.6820388/sabor+brasileiro/@-23.4641003,-46.6860563,14z"
                                target="_blank"
                                rel="noreferrer"
                                initial={{ opacity: 1, y: 10 }}
                                animate={{
                                    opacity: [null, 1],
                                    y: [null, 0]
                                }}
                                whileHover={{
                                    scale: [null, 0.94, 0.95, 0.94]
                                }}
                            >
                                Ver endere??o
                            </motion.a>
                        </S.DeliveryOptionsPickUpAtStore>
                        <S.DeliveryOptionsReceiveAtHome
                            isError={queryDelivery.request?.isError}
                            isSuccess={queryDelivery.request?.isSuccess}
                        >
                            <legend>Receba em casa</legend>
                            <p>
                                Informe seu CEP para consultar se entregamos em
                                sua casa
                            </p>
                            <form onSubmit={handleSubmit}>
                                <input
                                    onKeyUp={handleChange}
                                    type="text"
                                    maxLength={9}
                                    {...getFieldProps('cep')}
                                    name="cep"
                                    placeholder="00000-000"
                                />
                                <motion.button
                                    initial={{ opacity: 1, y: 10 }}
                                    animate={{
                                        opacity: [null, 1],
                                        y: [null, 0]
                                    }}
                                    whileHover={{
                                        scale: [null, 0.94, 0.95, 0.94]
                                    }}
                                    name="Consultar cep"
                                    type="submit"
                                >
                                    Consultar{' '}
                                    {queryDelivery.request?.isLoading && (
                                        <S.ConsultSpinner />
                                    )}
                                    {queryDelivery.request?.isSuccess && (
                                        <S.ConsultSuccess
                                            initial={{
                                                scale: 0,
                                                opacity: 0,
                                                rotate: 180
                                            }}
                                            animate={{
                                                scale: [null, 1],
                                                opacity: [null, 1],
                                                rotate: [null, 0],
                                                transition: { duration: 0.4 }
                                            }}
                                        >
                                            <AiOutlineCheck size={12} />
                                        </S.ConsultSuccess>
                                    )}
                                    {queryDelivery.request?.isError && (
                                        <S.ConsultError
                                            initial={{
                                                scale: 0,
                                                opacity: 0,
                                                rotate: 180
                                            }}
                                            animate={{
                                                scale: [null, 1],
                                                opacity: [null, 1],
                                                rotate: [null, 0],
                                                transition: { duration: 0.4 }
                                            }}
                                        >
                                            <BiErrorAlt size={16} />
                                        </S.ConsultError>
                                    )}
                                </motion.button>
                            </form>
                            {queryDelivery.request?.isError && (
                                <CepConsultMessage
                                    address={queryDelivery.address}
                                    status={queryDelivery.status}
                                />
                            )}
                            {queryDelivery.request?.isSuccess && (
                                <CepConsultMessage
                                    address={queryDelivery.address}
                                    status={queryDelivery.status}
                                />
                            )}

                            <a
                                href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                target="_blank"
                                rel="noreferrer"
                            >
                                N??o sei meu CEP
                            </a>
                        </S.DeliveryOptionsReceiveAtHome>
                    </S.CakeDeliveryOptionsSection>
                    <S.CakeRelationsSection>
                        <h2>Veja tamb??m</h2>
                        <S.CakeRelations>
                            {relatedCakes?.map(cake => (
                                <RelatedCake
                                    key={cake.id + '_related_cake'}
                                    cake={cake}
                                />
                            ))}
                        </S.CakeRelations>
                    </S.CakeRelationsSection>
                    <S.CakeRatingSection>
                        <S.CakeRatingTitle>
                            <h2>opini??es de quem j?? comprou</h2>
                            <div>
                                <div>
                                    <strong>{cake.starsAverage}</strong>
                                    <S.CakeRatingsStars>
                                        <Rating
                                            readOnly
                                            value={cake.starsAverage}
                                        />
                                    </S.CakeRatingsStars>
                                    <p>
                                        <strong>
                                            Baseado em {cake.ratings.length}{' '}
                                            {cake.ratings?.length > 1
                                                ? 'avalia????es'
                                                : 'avalia????o'}
                                        </strong>
                                    </p>
                                </div>
                                <div>
                                    <strong>98%</strong>
                                    <p>dos clientes recomendam este produto!</p>
                                </div>
                            </div>
                        </S.CakeRatingTitle>
                        <S.CakeRatings>
                            <S.CakeRatingsOrder>
                                <strong>Avalia????es mais recentes</strong>
                                <S.OrderSelect
                                    defaultValue="recent"
                                    options={[
                                        {
                                            value: 'recent',
                                            label: 'Mais Recente'
                                        },
                                        {
                                            value: 'relevant',
                                            label: 'Mais Relevante'
                                        },
                                        {
                                            value: 'negative',
                                            label: 'Negativo'
                                        }
                                    ]}
                                ></S.OrderSelect>
                            </S.CakeRatingsOrder>
                            {cake.ratings?.map(rating => (
                                <UserRating key={rating.id} rating={rating} />
                            ))}
                        </S.CakeRatings>
                    </S.CakeRatingSection>
                </S.Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['cakes', { star: 4 }], () =>
        getCakes({ params: { star: 4 } })
    )

    const cakes = queryClient.getQueryData<CakeFromApi[]>([
        'cakes',
        { star: 4 }
    ])

    const paths = []

    cakes.forEach(({ slug }) => paths.push({ params: { slug } }))

    return {
        fallback: 'blocking',
        paths
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['cake', slug], () =>
        getCake({ slug: slug as string })
    )

    const cake = queryClient.getQueryData<CakeFromApi>(['cake', slug])

    await queryClient.prefetchQuery(
        ['relatedCakes', { category_name: cake.category }],
        () => getCakes({ params: { category_name: cake.category } })
    )

    await queryClient.refetchQueries({ active: true })
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            slug
        },
        revalidate: 60 * 60 * 10
    }
}
