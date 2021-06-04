import React from 'react'

import {
    Section,
    Title,
    Content,
    PlaceToEat,
    ArrowRight,
    ArrowLeft,
    OpeningAt,
    Cutlery,
    Eat,
    Delivery
} from './styles'
import EatIcon from '../../../../public/images/table-eat.svg'
import CutleryIcon from '../../../../public/images/cutlery.svg'
import ScooterIcon from '../../../../public/images/scooter.svg'
const OurServices: React.FC = () => {
    return (
        <Section>
            <Title>
                <strong>Nossos serviços</strong>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Est, adipiscing cursus auctor eget sed phasellus senectus.
                    Ut tellus donec vestibulum tristique leo bibendum in a,
                    tincidunt. Volutpat metus id amet, nam hac magna accumsan.
                    Nascetur ac tortor purus ultrices morbi tellus. Lorem ipsum
                    dolor sit amet, consectetur adipiscing elit. Est, adipiscing
                    cursus auctor eget sed.
                </p>
            </Title>
            <Content>
                <PlaceToEat>
                    <strong>Lugar para</strong>
                    <strong>comer</strong>
                    <ArrowLeft />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </PlaceToEat>
                <Eat>
                    <EatIcon />
                </Eat>
                <OpeningAt>
                    <strong>ABerto até</strong>
                    <strong>ás 19hs</strong>
                    <ArrowRight />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </OpeningAt>
                <Cutlery>
                    <CutleryIcon />
                </Cutlery>
                <Delivery>
                    <span>
                        <ScooterIcon />
                    </span>
                    <strong>
                        Entregamos o melhor
                        <br />
                        em sua casa
                    </strong>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </Delivery>
            </Content>
        </Section>
    )
}

export default OurServices
