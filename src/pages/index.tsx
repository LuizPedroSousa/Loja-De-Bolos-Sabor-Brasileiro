import React from 'react'
import Head from 'next/head'

import { Wrapper, Container, BackgroundSvg } from '../styles/pages/home'
import Header from '../components/Header'
import Introduction from '../components/Home/Introduction'
import SomeFlavors from '../components/Home/SomeFlavors'
import { GetStaticProps } from 'next'
import api from '../services/api'
import ScheduleOrder from '../components/Home/ScheduleOrder'
import OurServices from '../components/Home/OurServices'
import ExploreOurFlavors from '../components/Home/ExploreOurFlavors'

type Cake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

interface HomeProps {
    bestCakes: Cake[]
    cakes: Cake[]
}

export default function Home({ bestCakes, cakes }: HomeProps) {
    return (
        <Wrapper>
            <Head>
                <title>Home | Sabor Brasileiro</title>
            </Head>
            <main>
                <BackgroundSvg />
                <Header activePage="/" />
                <Container>
                    <Introduction />
                    <SomeFlavors bestCakes={bestCakes} />
                    <ScheduleOrder />
                    <OurServices />
                    <ExploreOurFlavors cakes={cakes} />
                </Container>
            </main>
        </Wrapper>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const cakes = await api.get('/cakes', {
        params: {
            _sort: 'inserted_at',
            _limit: 6,
            _order: 'desc'
        }
    })
    const bestCakes = await api.get('/best-cakes', {
        params: {
            _sort: 'inserted_at',
            _limit: 2,
            _order: 'desc'
        }
    })

    return {
        props: {
            bestCakes: bestCakes.data,
            cakes: cakes.data
        },
        revalidate: 60 * 60 * 5
    }
}
