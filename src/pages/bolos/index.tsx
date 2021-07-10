import React, { useEffect, useRef, useState } from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Header from '../../components/Header'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import {
    getCakes,
    getCakeCategories,
    getCakesQueryWithFilter,
    useCake
} from '../../hooks/useCake'
import { QueryClient } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import useBreakPoint from '../../hooks/useBreakPoint'
import Footer from '../../components/Footer'
import MobalCategories from '../../components/MobalCategories'
import { BsFillGridFill, BsSearch } from 'react-icons/bs'
import { MdGridOff } from 'react-icons/md'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import {
    Container,
    SearchBar,
    SearchTitle,
    SearchLayoutControls,
    InputSearch,
    CakesSection,
    CakesNotFound,
    AsideFilters,
    CategoriesFilters,
    CategoryItemFilters,
    Checkbox,
    ContentFilters,
    PriceFilters,
    PriceItemFilters,
    InputPriceFilter
} from '../../styles/pages/bolos/index'
import CakeRow from '../../components/Bolos/Cakes/CakeRow'
import CakeColumn from '../../components/Bolos/Cakes/CakeColumn'
import CakeHideInfo from '../../components/Bolos/Cakes/CakeHideInfo'
import { useRouter } from 'next/router'
import { Skeleton } from '@chakra-ui/react'
import { useFormik } from 'formik'
import useCustomRipple from '../../hooks/useCustomRipple'
import Lottie from 'react-lottie'
import CakeAnim from '../../../public/lottie/cake-not-found-anim.json'
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
    const { categories } = useCake()

    const goRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: goRef }])
    const { cakes, isLoading, isError } = getCakesQueryWithFilter({
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
            <Head>
                <title>Sabor Brasileiro | Bolos</title>
            </Head>
            <main>
                <Header activePage="/bolos" />
                <Container>
                    {md3 && (
                        <AsideFilters>
                            <ContentFilters>
                                <CategoriesFilters>
                                    <strong>Categorias</strong>
                                    {categories.map(({ id, slug, name }) => (
                                        <CategoryItemFilters key={id}>
                                            <Checkbox
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
                                            </Checkbox>
                                        </CategoryItemFilters>
                                    ))}
                                </CategoriesFilters>

                                <PriceFilters>
                                    <strong>Filtrar por preço</strong>
                                    {priceFilters.map(({ label, value }) => (
                                        <PriceItemFilters key={label + value}>
                                            <Checkbox
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
                                            </Checkbox>
                                        </PriceItemFilters>
                                    ))}
                                    <InputPriceFilter onSubmit={handleSubmit}>
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
                                    </InputPriceFilter>
                                </PriceFilters>
                            </ContentFilters>
                        </AsideFilters>
                    )}
                    {xsDown && !md3 && <MobalCategories />}
                    <SearchBar>
                        <SearchTitle>
                            <strong>
                                {query.category.name
                                    ? query.category.name
                                    : 'Todos'}
                            </strong>
                            <p>
                                {cakes?.length || '0'} resultados{' '}
                                {xs && ' relacionados'}
                            </p>
                        </SearchTitle>
                        <InputSearch>
                            <span>
                                <BsSearch />
                            </span>
                            <input
                                onChange={({ target: { value } }) =>
                                    setQuery({ ...query, name: value })
                                }
                                name="buscar"
                            />
                        </InputSearch>
                        <SearchLayoutControls viewLayout={viewLayout}>
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
                        </SearchLayoutControls>
                    </SearchBar>
                    <CakesSection
                        cakeNotFound={isError}
                        viewLayout={viewLayout}
                    >
                        {isError && (
                            <CakesNotFound>
                                <Lottie
                                    options={{
                                        autoplay: true,
                                        loop: true,
                                        animationData: CakeAnim
                                    }}
                                />
                                <strong>Nenhum bolo encontrado</strong>
                                <p>Tente buscar por outro termo.</p>
                            </CakesNotFound>
                        )}
                        {isLoading ? (
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
                    </CakesSection>
                </Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    query: { search, price, category }
}) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(
        [
            'cakes',
            {
                search: search || '',
                category: category || '',
                price: price || ''
            }
        ],
        () => getCakes({ params: { name: search, category, price } })
    )
    await queryClient.prefetchQuery('cakeCategories', () => getCakeCategories())
    await queryClient.refetchQueries({ active: true })
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            search: search || '',
            category: category || '',
            price: price || ''
        }
    }
}
