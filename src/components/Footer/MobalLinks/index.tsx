import React from 'react'

import { Container, Title, AccordionItem, Details } from './styles'
import NextLink from 'next/link'
import {
    Accordion,
    AccordionIcon,
    AccordionButton,
    AccordionPanel
} from '@chakra-ui/accordion'

const MobalLinks: React.FC = () => {
    return (
        <Container>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Title>Dúvidas</Title>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Details>
                            <a href="#">Perguntas Frequentes</a>
                            <a href="#">Perguntas Sobre entrega</a>
                        </Details>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
            <Accordion allowToggle>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Title>Paginas</Title>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        <Details>
                            <NextLink href="">
                                <a>Home</a>
                            </NextLink>
                            <NextLink href="/bolos">
                                <a>Bolos</a>
                            </NextLink>
                            <NextLink href="/contato">
                                <a>Contato</a>
                            </NextLink>
                            <NextLink href="/encomendar">
                                <a>Encomendar</a>
                            </NextLink>
                            <NextLink href="/faq">
                                <a>FAQ</a>
                            </NextLink>
                        </Details>
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Container>
    )
}

export default MobalLinks
