import React, { useEffect } from 'react'
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
import BestConfectioners from '../components/Home/BestConfectioners'
import Footer from '../components/Footer'
import SeeDelivery from '../components/Home/SeeDelivery'
import useCake from '../hooks/useCake'

type Cake = {
    id: string
    price: string
    name: string
    description: string
    photo: {
        url: string
    }
}

type BestConfectioner = {
    id: string
    name: string
    photo: {
        url: string
    }
}

interface HomeProps {
    bestCakes: Cake[]
    bestConfectioners: BestConfectioner[]
    cakes: Cake[]
}

export default function Home({
    bestCakes,
    bestConfectioners,
    cakes
}: HomeProps) {
    const { setCakes } = useCake()
    useEffect(() => {
        setCakes(cakes)
    }, [])
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
                    <ExploreOurFlavors />
                    <BestConfectioners bestConfectioners={bestConfectioners} />
                    <SeeDelivery />
                    <Footer />
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

    const bestConfectioners = await api.get('/best-confectioners', {
        params: {
            _sort: 'inserted_at',
            _limit: 4,
            _order: 'desc'
        }
    })

    return {
        props: {
            bestCakes: bestCakes.data,
            bestConfectioners: bestConfectioners.data,
            cakes: cakes.data
        },
        revalidate: 60 * 60 * 5
    }
}
