import React from 'react'
import Head from 'next/head'
import DefaultLayout from '../components/Layout/DefaultLayout'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { AiFillInstagram, AiOutlineMail, AiOutlinePhone } from 'react-icons/ai'
import {
    Container,
    AboutUs,
    ContactWays,
    Illustration,
    GetInTouch,
    SocialMedia,
    OtherPlatforms
} from '../styles/pages/contato'
import CakeIllustration from '../components/AnimatedSvgs/CakeIlllustration'
import { motion } from 'framer-motion'
import RappiLogo from '../components/AnimatedSvgs/RappiLogo'
import UberEatsLogo from '../components/AnimatedSvgs/UberEatsLogo'
import IFoodLogo from '../components/AnimatedSvgs/IFoodLogo'
import Link from 'next/link'
export default function Contato() {
    return (
        <DefaultLayout>
            <Head>
                <title>Contato | Sabor Brasileiro</title>
            </Head>
            <main>
                <Header activePage="/contato" />
                <Container>
                    <ContactWays>
                        <strong>Formas de contato</strong>
                        <div>
                            <div>
                                <span>
                                    <FaWhatsapp />
                                </span>
                                <p>(11)961947550</p>
                            </div>
                            <div>
                                <span>
                                    <AiOutlinePhone />
                                </span>
                                <p>(11)22356145</p>
                            </div>
                            <div>
                                <span>
                                    <AiOutlineMail />
                                </span>
                                <p>saborbrasileiro@gmail.com</p>
                            </div>
                            <div>
                                <span>
                                    <FaMapMarkerAlt />
                                </span>
                                <p>Av Parada Pinto 1608</p>
                            </div>
                        </div>
                    </ContactWays>
                    <SocialMedia>
                        <strong>Redes sociais</strong>
                        <div>
                            <motion.a
                                whileHover={{
                                    scale: [1, 0.92, 0.93, 0.92]
                                }}
                                href="https://www.instagram.com/bolossaborbrasileiro/"
                                target="_blank"
                            >
                                <span>
                                    <AiFillInstagram />
                                </span>
                            </motion.a>
                        </div>
                    </SocialMedia>
                    <OtherPlatforms>
                        <strong>Outras plataformas</strong>
                        <div>
                            <motion.a
                                whileHover={{
                                    scale: [1, 0.92, 0.93, 0.92]
                                }}
                                href="#"
                                target="_blank"
                            >
                                <span>
                                    <RappiLogo />
                                </span>
                            </motion.a>
                            <motion.a
                                whileHover={{
                                    scale: [1, 0.92, 0.93, 0.92]
                                }}
                                href="https://www.ubereats.com/br-en/store/casa-de-bolos-sabor-brasileiro/URPWopumTNuELPARMLIbdw"
                                target="_blank"
                            >
                                <span>
                                    <UberEatsLogo />
                                </span>
                            </motion.a>
                            <motion.a
                                whileHover={{
                                    scale: [1, 0.92, 0.93, 0.92]
                                }}
                                href="https://www.ifood.com.br/delivery/sao-paulo-sp/bolos-sabor-brasileiro-vila-nova-cachoeirinha/90d4317b-69e8-4b7e-9f7a-dd4d6deeb6f8?utm_medium=ReserveGoogle"
                                target="_blank"
                            >
                                <span>
                                    <IFoodLogo />
                                </span>
                            </motion.a>
                        </div>
                    </OtherPlatforms>
                    <AboutUs>
                        <strong>Sobre nós</strong>
                        <p>
                            A SB nasceu em nossos corações em 2018 mas nosso
                            sonho se tornou realidade em fevereiro de 2019
                            quando colocamos todo nossa dedicação na SB, e ja
                            nascemos com a preocupação em oferecer um produto de
                            qualidade e que garantisse a satisfação de todos que
                            experimentam nossas delicias.
                        </p>
                        <p>
                            Queremos levar o que tenhamos de muito especial, a
                            lembranças dos momentos em família, aquele momento
                            comendo o bolo da vovó, fazendo sempre com todo
                            carinho e cuidado.
                        </p>
                        <p>
                            Temos em nosso cardápio tudo que torna os nossos
                            bolos especiais e agradáveis ao paladar de todos os
                            nossos Clientes, que são amor, dedicação inspiração
                            e qualidade, a receita desse sucesso deve-se ao
                            cuidado e carinho com o que fazemos.
                        </p>
                    </AboutUs>
                    <Illustration>
                        <CakeIllustration />
                    </Illustration>
                    <GetInTouch>
                        <strong>Faça contato</strong>
                        <p>
                            Uma das formas de se conectar é fazer contato, caso
                            tenha alguma duvida use o nosso{' '}
                            <Link href="/faq">
                                <a>FAQ de ajuda</a>
                            </Link>
                            .
                        </p>
                        <form>
                            <input
                                type="name"
                                name="name"
                                placeholder="Seu nome"
                            />
                            <input type="email" placeholder="Seu email" />
                            <input
                                name="subject"
                                placeholder="Assunto"
                                type="text"
                            />
                            <textarea
                                name="message"
                                placeholder="Digite sua menssagem"
                                rows={6}
                            />
                            <motion.button
                                whileHover={{
                                    scale: [1, 0.9, 0.91, 0.9]
                                }}
                                name="Enviar email"
                                type="submit"
                            >
                                Enviar email
                            </motion.button>
                        </form>
                    </GetInTouch>
                </Container>
                <Footer />
            </main>
        </DefaultLayout>
    )
}
