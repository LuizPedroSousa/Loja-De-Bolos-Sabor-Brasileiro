import React from 'react'
import Head from 'next/head'

import { Wrapper, Container, BackgroundSvg } from '../styles/pages/home'
import Header from '../components/Header'
import Introduction from '../components/Home/Introduction'
import SomeFlavors from '../components/Home/SomeFlavors'
import { GetStaticProps } from 'next'
import api from '../services/api'
import ScheduleOrder from '../components/Home/ScheduleOrder'

type BestCake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

interface HomeProps {
    bestCakes: BestCake[]
}

export default function Home({ bestCakes }: HomeProps) {
    return (
        <Wrapper>
            <Head>
                <title>Home</title>
            </Head>
            <main>
                <BackgroundSvg />
                <Header activePage="/" />
                <Container>
                    <Introduction />
                    <SomeFlavors bestCakes={bestCakes} />
                    <ScheduleOrder />
                </Container>
            </main>
        </Wrapper>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await api.get('/best-cakes', {
        params: {
            _sort: 'inserted_at',
            _limit: 2,
            _order: 'desc'
        }
    })

    return {
        props: {
            bestCakes: data
        },
        revalidate: 60 * 60 * 5
    }
}
