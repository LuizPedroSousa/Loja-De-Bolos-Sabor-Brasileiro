import React from 'react'
import Head from 'next/head'

import { Wrapper, Container, BackgroundSvg } from '../styles/pages/home'
import Header from '../components/Header'
import Introduction from '../components/Home/Introduction'
import SomeFlavors from '../components/Home/SomeFlavors'
import { GetStaticProps } from 'next'
import ScheduleOrder from '../components/Home/ScheduleOrder'
import OurServices from '../components/Home/OurServices'
import ExploreOurFlavors from '../components/Home/ExploreOurFlavors'
import BestConfectioners from '../components/Home/BestConfectioners'
import Footer from '../components/Footer'
import SeeDelivery from '../components/Home/SeeDelivery'
import { QueryClient } from 'react-query'
import { getCakes } from '../hooks/useCake'
import { getConfectioners } from '../hooks/useConfectioners'
import { dehydrate } from 'react-query/hydration'

export default function Home() {
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
                    <SomeFlavors />
                    <ScheduleOrder />
                    <OurServices />
                    <ExploreOurFlavors />
                    <BestConfectioners />
                    <SeeDelivery />
                    <Footer />
                </Container>
            </main>
        </Wrapper>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['cakes', 6], () =>
        getCakes({ params: { _limit: 6 } })
    )

    await queryClient.prefetchQuery(['bestCakes', 2], () =>
        getCakes({ params: { isBest: true, _limit: 2 } })
    )

    await queryClient.prefetchQuery(['bestConfectioners', 4], () =>
        getConfectioners({ params: { _limit: 4 } })
    )

    return {
        props: {
            dehydratedState: dehydrate(queryClient)
        },
        revalidate: 60 * 60 * 5
    }
}
