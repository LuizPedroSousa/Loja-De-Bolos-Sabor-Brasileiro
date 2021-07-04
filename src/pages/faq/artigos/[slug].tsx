import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import React from 'react'
import { QueryClient, useQuery } from 'react-query'
import { dehydrate } from 'react-query/hydration'
import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import DefaultLayout from '../../../components/Layout/DefaultLayout'
import { getArticle, getArticles } from '../../../hooks/useFAQ'
import { AiFillInstagram, AiFillPhone } from 'react-icons/ai'
import { RiWhatsappFill } from 'react-icons/ri'
import parseHTML from 'html-react-parser'

import {
    Container,
    ArticleHeader,
    ArticleContent,
    ArticleFooter
} from '../../../styles/pages/faq/artigos'
import Link from 'next/link'
import InputSearchArticles from '../../../components/Faq/InputSearchArticles'
import { Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'

type Article = {
    id: string
    title: string
    slug: string
    description: string
}

export default function Artigo({ slug }) {
    const { data: article } = useQuery(['article', slug], () =>
        getArticle({ slug })
    )
    return (
        <DefaultLayout>
            <Head>
                <title>{article.title} - FAQ | Sabor Brasileiro</title>
            </Head>
            <main>
                <Header activePage="/faq" />
                <Container>
                    <ArticleHeader>
                        <motion.h2
                            initial={{ y: -25, opacity: 0 }}
                            animate={{ y: [null, 0], opacity: [null, 1] }}
                        >
                            {article.title}
                        </motion.h2>
                    </ArticleHeader>
                    <ArticleContent
                        initial={{ y: 25, opacity: 0 }}
                        animate={{ y: [null, 0], opacity: [null, 1] }}
                    >
                        {parseHTML(article.description)}
                    </ArticleContent>
                    <ArticleFooter>
                        <div>
                            <motion.a
                                whileHover={{ scale: [1, 0.91, 0.93, 0.91] }}
                                target="_blank"
                                href="https://www.instagram.com/bolossaborbrasileiro/"
                            >
                                <span>
                                    <AiFillInstagram />
                                </span>
                                Instagram
                            </motion.a>
                            <motion.a
                                whileHover={{ scale: [1, 0.91, 0.93, 0.91] }}
                                href=""
                            >
                                <span>
                                    <RiWhatsappFill />
                                </span>
                                Whatsapp
                            </motion.a>
                            <motion.button
                                whileHover={{ scale: [1, 0.91, 0.93, 0.91] }}
                                type="button"
                                name="telefone para contato"
                            >
                                <span>
                                    <AiFillPhone />
                                </span>
                                Telefone
                            </motion.button>
                        </div>
                        <div>
                            <p>Tem mais alguma dúvida?</p>
                            <Link href="/faq/requests/new">
                                <a>Envie uma solicitação.</a>
                            </Link>
                        </div>
                        <Divider
                            bg="orange.500"
                            w="80%"
                            mx="auto"
                            h="0.5"
                            mb="6"
                        />
                        <InputSearchArticles />
                    </ArticleFooter>
                </Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['articles', 6], () =>
        getArticles({ params: { _limit: 6 } })
    )

    const articles = queryClient.getQueryData<Article[]>(['articles', 6])

    const paths = []

    articles.forEach(({ slug }) => paths.push({ params: { slug } }))

    return {
        fallback: 'blocking',
        paths
    }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery(['article', slug], () =>
        getArticle({ slug: slug as string })
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
