import React, { useEffect } from 'react'
import Head from 'next/head'
import DefaultLayout from '../../components/Layout/DefaultLayout'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { GetServerSideProps } from 'next'
import InputSearchArticles from '../../components/Faq/InputSearchArticles'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import { getArticles } from '../../hooks/useFAQ'
import ArticleItem from '../../components/Faq/Search/ArticleItem'
import { Container, SectionArticles } from '../../styles/pages/faq/search'
import { motion } from 'framer-motion'

export default function SearchArticles({ query }) {
    useEffect(() => {
        refetch()
    }, [query])
    const { data: articles, refetch } = useQuery(['articles', query], () =>
        getArticles({ params: { title: query } })
    )
    return (
        <DefaultLayout>
            <Head>
                <title>Buscar | FAQ | Sabor Brasileiro</title>
            </Head>
            <Header activePage="/faq" />
            <main>
                <Container>
                    <InputSearchArticles />
                    <header>
                        <p>
                            {articles
                                ? `${articles.length} resultados encontrados.`
                                : 'Nenhum resultado encontrado'}
                        </p>
                    </header>
                    <SectionArticles>
                        {articles && (
                            <motion.ul
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: [null, 0], opacity: [null, 1] }}
                            >
                                {articles.map(article => (
                                    <ArticleItem
                                        key={article.id}
                                        article={article}
                                    />
                                ))}
                            </motion.ul>
                        )}
                    </SectionArticles>
                </Container>
            </main>
            <Footer />
        </DefaultLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async ({
    query: { query }
}) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['articles', query], () =>
        getArticles({ params: { title: query } })
    )
    await queryClient.refetchQueries({ active: true })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            query
        }
    }
}
