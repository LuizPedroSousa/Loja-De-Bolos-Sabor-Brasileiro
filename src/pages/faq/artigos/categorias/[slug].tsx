import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../../../../components/Layout/DefaultLayout'
import { GetStaticPaths, GetStaticProps } from 'next'
import { QueryClient, useQuery } from 'react-query'
import {
    getArticleCategories,
    getArticleCategory
} from '../../../../hooks/useFAQ'
import { dehydrate } from 'react-query/hydration'
import Header from '../../../../components/Header'
import Footer from '../../../../components/Footer'
import { Container, Articles } from '../../../../styles/pages/faq/categorias'
import ArticleItem from '../../../../components/Faq/Categories/ArticleItem'
import { motion } from 'framer-motion'

type Article = {
    id: string
    title: string
    slug: string
    description: string
}

type ArticleCategory = {
    id: string
    name: string
    slug: string
    articles: Article[]
}

export default function Categories({ slug }) {
    const { data: category } = useQuery(['articleCategory', slug], () =>
        getArticleCategory({ slug })
    )
    return (
        <DefaultLayout>
            <Head>
                <title>
                    {category.name.charAt(0).toUpperCase() +
                        category.name.slice(1)}{' '}
                    | Sabor Brasileiro
                </title>
            </Head>
            <Header activePage="/faq" />
            <main>
                <Container>
                    <motion.header
                        initial={{ x: 25, opacity: 0 }}
                        animate={{ x: [null, 0], opacity: [null, 1] }}
                    >
                        <h2>{category.name}</h2>
                        <p>{category.articles.length} Artigos</p>
                    </motion.header>
                    <Articles
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: [null, 0], opacity: [null, 1] }}
                    >
                        {category.articles.map(article => (
                            <ArticleItem key={article.id} article={article} />
                        ))}
                    </Articles>
                </Container>
            </main>
            <Footer />
        </DefaultLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['articleCategories', 6], () =>
        getArticleCategories({ params: { _limit: 6 } })
    )

    const categories = queryClient.getQueryData<ArticleCategory[]>([
        'articleCategories',
        6
    ])

    const paths = []

    categories.forEach(({ slug }) => paths.push({ params: { slug } }))

    return {
        fallback: 'blocking',
        paths
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['articleCategory', slug], () =>
        getArticleCategory({ slug: slug as string })
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
