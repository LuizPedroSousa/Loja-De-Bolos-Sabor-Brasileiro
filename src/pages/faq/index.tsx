import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import {
    Container,
    SectionSearch,
    SectionCategories
} from '../../styles/pages/faq/index'
import { GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getArticleCategories } from '../../hooks/useFAQ'
import { Skeleton, useDisclosure } from '@chakra-ui/react'
import InputSearchArticles from '../../components/Faq/InputSearchArticles'
import CategoryItem from '../../components/Faq/CategoryItem'
import SolicitationModal from '../../components/Modals/SolicitationModal'
import Cookies from 'js-cookie'

type Solicitation = {
    name: string
    surname: string
    email: string
    reason: string
    subject: string
    description: string
}

export default function Faq() {
    const { data: categories, isLoading } = useQuery(
        ['articleCategories'],
        () => getArticleCategories()
    )

    const [solicitation, setSolicitation] = useState<Solicitation>()

    const { onClose, onOpen, isOpen } = useDisclosure()

    useEffect(() => {
        const solicitationCookie = Cookies.get('hasSolicitation')
        if (solicitationCookie) {
            setSolicitation(JSON.parse(solicitationCookie))
            onOpen()
            Cookies.remove('hasSolicitation')
        }
    }, [])

    return (
        <DefaultLayout>
            <Head>
                <title>FAQ | Sabor Brasileiro</title>
            </Head>
            <main>
                <Header activePage="/faq" />
                <SolicitationModal
                    status="success"
                    isOpen={isOpen}
                    solicitation={solicitation}
                    onClose={onClose}
                />
                <Container>
                    <SectionSearch>
                        <h2>Central de ajuda</h2>
                        <InputSearchArticles />
                    </SectionSearch>
                    <SectionCategories
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: [null, 0], opacity: [null, 1] }}
                    >
                        {isLoading ? (
                            <>
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                                <Skeleton h="90px" />
                            </>
                        ) : (
                            <ul>
                                {categories.map(category => (
                                    <CategoryItem
                                        key={category.id}
                                        category={category}
                                    />
                                ))}
                            </ul>
                        )}
                    </SectionCategories>
                </Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['articleCategories'], () =>
        getArticleCategories()
    )
    await queryClient.refetchQueries({ active: true })
    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
        revalidate: 60 * 60 * 10
    }
}
