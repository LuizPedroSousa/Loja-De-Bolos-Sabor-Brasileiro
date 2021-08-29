import React, { useEffect, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import Header from 'components/Header'
import DefaultLayout from 'components/Layout/DefaultLayout'
import {
    getCakes,
    getCakeCategories,
    getCakesQueryWithFilter,
    useCakeCategories,
    getCakeCategoriesQuery
} from '../../hooks/useCake'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import useBreakPoint from '../../hooks/useBreakPoint'
import Footer from '../../components/Footer'
import MobalCategories from '../../components/MobalCategories'
import { BsFillGridFill, BsSearch } from 'react-icons/bs'
import { MdGridOff } from 'react-icons/md'
import {
    AiOutlineHome,
    AiOutlineRight,
    AiOutlineUnorderedList
} from 'react-icons/ai'
import * as S from 'styles/pages/bolos/index'
import CakeRow from '../../components/Bolos/Cakes/CakeRow'
import CakeColumn from '../../components/Bolos/Cakes/CakeColumn'
import CakeHideInfo from '../../components/Bolos/Cakes/CakeHideInfo'
import { useRouter } from 'next/router'
import { Skeleton } from '@chakra-ui/react'
import { useFormik } from 'formik'
import useCustomRipple from '../../hooks/useCustomRipple'
import Seo from 'components/Seo'
import Link from 'next/link'
import { getUserShow } from 'hooks/useUser'
type ViewLayout = 'column' | 'column-hide-info' | 'row'

interface BolosProps {
    search: string
    price: string
    category: string
}

interface PriceFilter {
    value: string
    label: string
}

interface Query {
    name: string
    price: string
    category: {
        name: string
        slug: string
    }
}

export default function Bolos({ search, price, category }: BolosProps) {
    const { xsDown, xs, '3md': md3 } = useBreakPoint()
    const [viewLayout, setViewLayout] = useState<ViewLayout>('column')
    const { categories, setCategories } = useCakeCategories()
    const { categories: categoriesData } = getCakeCategoriesQuery()

    const goRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: goRef }])
    const { cakes, isError } = getCakesQueryWithFilter({
        search,
        price,
        category
    })
    const [query, setQuery] = useState<Query>({
        name: '',
        price: '',
        category: { slug: '', name: '' }
    })

    const priceFilters: PriceFilter[] = [
        { label: 'R$0.00 - R$30.00', value: '0,30' },
        { label: 'R$30.00 - R$40.00', value: '30,40' },
        { label: 'R$40.00 - R$60.00', value: '40,60' },
        { label: 'R$60.00+', value: '60' }
    ]

    const router = useRouter()

    useEffect(() => {
        setCategories(categoriesData)
    }, [])

    useEffect(() => {
        router.push(
            `/bolos?search=${query.name}${
                query.price && '&price=' + query.price
            }${query.category.slug && '&category=' + query.category.slug}`
        )
    }, [query])

    const { getFieldProps, handleSubmit } = useFormik({
        initialValues: { to: '' },
        onSubmit: ({ to }) => {
            setQuery({ ...query, price: String(to) })
        }
    })
    return (
        <DefaultLayout>
            <Seo
                description="Sabor brasileiros | Os melhores sabores sempre"
                thumb={`${process.env.NEXT_PUBLIC_URL}/images/thumbs/bolos.png`}
                title="Bolos"
            />
            <main>
                <Header activePage="/bolos" />
                <S.HeaderTitle>
                    <div>
                        <h2>Nosso sabores</h2>
                        <S.Breadcrumb>
                            <Link href="">
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

                            <span>Bolos</span>
                        </S.Breadcrumb>
                    </div>
                </S.HeaderTitle>
                <S.Container>
                    {md3 && (
                        <S.AsideFilters>
                            <S.ContentFilters>
                                <S.CategoriesFilters>
                                    <strong>Categorias</strong>
                                    {categories?.map(({ id, slug, name }) => (
                                        <S.CategoryItemFilters key={id}>
                                            <S.Checkbox
                                                colorScheme="orange"
                                                size="md"
                                                isChecked={
                                                    slug === query.category.slug
                                                }
                                                onChange={() =>
                                                    setQuery({
                                                        ...query,
                                                        category:
                                                            slug ===
                                                            query.category.slug
                                                                ? {
                                                                      name: '',
                                                                      slug: ''
                                                                  }
                                                                : { name, slug }
                                                    })
                                                }
                                            >
                                                {name}
                                            </S.Checkbox>
                                        </S.CategoryItemFilters>
                                    ))}
                                </S.CategoriesFilters>

                                <S.PriceFilters>
                                    <strong>Filtrar por preço</strong>
                                    {priceFilters.map(({ label, value }) => (
                                        <S.PriceItemFilters key={label + value}>
                                            <S.Checkbox
                                                isChecked={
                                                    value === query.price
                                                }
                                                onChange={() =>
                                                    setQuery({
                                                        ...query,
                                                        price:
                                                            query.price ===
                                                            value
                                                                ? '0'
                                                                : value
                                                    })
                                                }
                                                colorScheme="pink"
                                            >
                                                {label}
                                            </S.Checkbox>
                                        </S.PriceItemFilters>
                                    ))}
                                    <S.InputPriceFilter onSubmit={handleSubmit}>
                                        <input
                                            type="number"
                                            name="Preço"
                                            {...getFieldProps('to')}
                                            placeholder="R$10.00"
                                        />
                                        <button
                                            name="Filtrar por preço"
                                            type="submit"
                                            ref={goRef}
                                        >
                                            GO
                                        </button>
                                    </S.InputPriceFilter>
                                </S.PriceFilters>
                            </S.ContentFilters>
                        </S.AsideFilters>
                    )}
                    {xsDown && !md3 && <MobalCategories />}
                    <S.SearchBar>
                        <S.SearchTitle>
                            <strong>
                                {query.category.name
                                    ? query.category.name
                                    : 'Todos'}
                            </strong>
                            <p>
                                {cakes?.length || '0'} resultados{' '}
                                {xs && ' relacionados'}
                            </p>
                        </S.SearchTitle>
                        <S.InputSearch>
                            <span>
                                <BsSearch />
                            </span>
                            <input
                                onChange={({ target: { value } }) =>
                                    setQuery({ ...query, name: value })
                                }
                                name="buscar"
                            />
                        </S.InputSearch>
                        <S.SearchLayoutControls viewLayout={viewLayout}>
                            <button
                                type="button"
                                name="layout de coluna"
                                onClick={() => setViewLayout('column')}
                            >
                                <BsFillGridFill />
                            </button>
                            <button
                                type="button"
                                name="layout de coluna sem descrição"
                                onClick={() =>
                                    setViewLayout('column-hide-info')
                                }
                            >
                                <MdGridOff />
                            </button>
                            <button
                                type="button"
                                name="layout de lista"
                                onClick={() => setViewLayout('row')}
                            >
                                <AiOutlineUnorderedList />
                            </button>
                        </S.SearchLayoutControls>
                    </S.SearchBar>
                    <S.CakesSection
                        cakeNotFound={isError}
                        viewLayout={viewLayout}
                    >
                        {!cakes?.length ? (
                            <>
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                                <Skeleton
                                    mx={{ base: 'auto' }}
                                    borderRadius="lg"
                                    w={{ base: '80%', md: '98%' }}
                                    h="20rem"
                                />
                            </>
                        ) : (
                            cakes?.map(cake => {
                                switch (viewLayout) {
                                    case 'row':
                                        return (
                                            <CakeRow
                                                key={cake.id}
                                                cake={cake}
                                            />
                                        )
                                    case 'column':
                                        return (
                                            <CakeColumn
                                                key={cake.id}
                                                cake={cake}
                                            />
                                        )
                                    default:
                                        return (
                                            <CakeHideInfo
                                                key={cake.id}
                                                cake={cake}
                                            />
                                        )
                                }
                            })
                        )}
                    </S.CakesSection>
                </S.Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    query: { search, price, category },
    req
}) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(
        [
            'cakes',
            {
                search: search || '',
                category_slug: category || '',
                price: price || ''
            }
        ],
        () =>
            getCakes({
                params: { name: search, category_slug: category, price }
            })
    )
    await queryClient.prefetchQuery('cakeCategories', () => getCakeCategories())
    await queryClient.refetchQueries({ active: true })
    const refreshToken = req.cookies['refresh-token']
    const accessToken = req.cookies['access-token']
    if (refreshToken && accessToken) {
        await queryClient.prefetchQuery(
            ['user', { refreshToken, accessToken }],
            () => getUserShow({ refreshToken, accessToken }),
            {
                retry: false,
                staleTime: 14 * 60
            }
        )
    }
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            search: search || '',
            category: category || '',
            price: price || ''
        }
    }
}
