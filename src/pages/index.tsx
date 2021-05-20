import React from 'react'
import Head from 'next/head'

import { Wrapper, Container, BackgroundSvg } from '../styles/pages/home'
import Header from '../components/Header'
import Introduction from '../components/Home/Introduction'
import SomeFlavors from '../components/Home/SomeFlavors'
export default function Home() {
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
                    <SomeFlavors />
                </Container>
            </main>
        </Wrapper>
    )
}
