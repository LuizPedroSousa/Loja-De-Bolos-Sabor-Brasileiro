import React, { FormEvent, useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import * as S from 'styles/pages/home'
import Header from '../components/Header'
import { GetStaticProps } from 'next'
import { QueryClient } from 'react-query'
import { getCakes } from '../hooks/useCake'
import { getConfectioners } from '../hooks/useConfectioners'
import { dehydrate } from 'react-query/hydration'
import Seo from '../components/Seo'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import useBreakPoint from 'hooks/useBreakPoint'
import useCustomRipple from 'hooks/useCustomRipple'
import { lighten } from 'polished'
import { theme } from 'twin.macro'
const IntroductionCarousel = dynamic(
    () => import('components/Home/Introduction/Carousel')
)
const SeeDelivery = dynamic(import('../components/Home/SeeDelivery'))
const Footer = dynamic(import('../components/Footer'))
const BestConfectioners = dynamic(
    () => import('../components/Home/BestConfectioners')
)
const ExploreOurFlavors = dynamic(
    () => import('../components/Home/ExploreOurFlavors')
)
const OurServices = dynamic(() => import('../components/Home/OurServices'))
const ScheduleOrder = dynamic(() => import('../components/Home/ScheduleOrder'))
const SomeFlavors = dynamic(() => import('../components/Home/SomeFlavors'))

export default function Home() {
    const { xs } = useBreakPoint()

    const goRef = useRef<HTMLButtonElement>(null)
    const addressRef = useRef<HTMLAnchorElement>(null)
    const whatsappRef = useRef<HTMLButtonElement>(null)
    const introductionSectionRef = useRef<HTMLTableSectionElement>(null)
    const [backgroundHeight, setBackgroundHeight] = useState('140vh')

    useEffect(() => {
        const introductionSectionHeight = `${introductionSectionRef?.current.offsetHeight}px`
        const height = `calc(100vh + ${introductionSectionHeight})`
        setBackgroundHeight(height)
    }, [])

    useCustomRipple([
        { ref: goRef },
        { ref: addressRef },
        { ref: whatsappRef, color: lighten(0.1, theme`colors.green.400`) }
    ])

    const handleSeeDelivery = (e: FormEvent) => {
        e.preventDefault()
    }
    return (
        <S.Wrapper>
            <Seo
                title="Home"
                description="Sabor Brasileiro | A melhor loja de bolos com os melhores sabores."
                thumb={`${process.env.NEXT_PUBLIC_URL}/images/thumbs/home.png`}
            />

            <main>
                <S.BackgroundSvg style={{ height: backgroundHeight }} />
                <Header activePage="/" />
                <S.Container>
                    <S.IntroductionSection ref={introductionSectionRef}>
                        <S.IntroductionSearchLocals>
                            <span>Sabor</span>
                            <h2>
                                Descubra os locais
                                <br />
                                de entrega
                            </h2>

                            <S.SearchLocalsForm onSubmit={handleSeeDelivery}>
                                <input
                                    placeholder="Veja se entregamos em sua casa"
                                    type="text"
                                />
                                <button ref={goRef} name="GO" type="submit">
                                    Go
                                </button>
                            </S.SearchLocalsForm>
                        </S.IntroductionSearchLocals>
                        <S.IntroductionLocalContact>
                            <a href="#" ref={addressRef}>
                                <span>
                                    <FaMapMarkerAlt size={20} />
                                </span>{' '}
                                Av. Parada pinto 1608
                                {xs ? ', São Paulo' : '...'}
                            </a>
                            <button ref={whatsappRef} type="button">
                                <FaWhatsapp size={40} />
                            </button>
                        </S.IntroductionLocalContact>
                        <IntroductionCarousel />
                    </S.IntroductionSection>
                    <SomeFlavors />
                    <ScheduleOrder />
                    <OurServices />
                    <ExploreOurFlavors />
                    <BestConfectioners />
                    <SeeDelivery />
                    <Footer />
                </S.Container>
            </main>
        </S.Wrapper>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const queryClient = new QueryClient()
    await queryClient.prefetchQuery(['cakes', 6], () =>
        getCakes({ params: { _limit: 6 } })
    )

    await queryClient.prefetchQuery(['bestCakes', 2], () =>
        getCakes({ params: { stars: 4, _limit: 2 } })
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
