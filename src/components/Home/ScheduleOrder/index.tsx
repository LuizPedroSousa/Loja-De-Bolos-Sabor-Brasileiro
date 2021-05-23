import React, { FormEvent, useState } from 'react'
import { DatePicker, TimePicker } from '@material-ui/pickers'
import Image from 'next/image'

import {
    Section,
    Content,
    DotsTop,
    ChocolateOverlay,
    Chocolate,
    DateContent,
    Form,
    InputGroup,
    ScheduleContainer,
    Strawberry,
    StrawBerryOverlay,
    TimeContent,
    DotsBottom,
    DotsRight
} from './styles'

const ScheduleOrder: React.FC = () => {
    const handleScheduleOrder = (e: FormEvent) => {
        e.preventDefault()
    }

    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())

    return (
        <Section>
            <Strawberry>
                <Image
                    src="/images/strawberry.png"
                    alt="Morango"
                    width={1477}
                    height={1557}
                />
            </Strawberry>
            <Content>
                <Form onSubmit={handleScheduleOrder}>
                    <strong>Agendar encomenda</strong>
                    <InputGroup>
                        <input placeholder="seu endereço" type="text" />
                        <button type="submit">Go</button>
                    </InputGroup>
                    <ScheduleContainer>
                        <DateContent>
                            <DatePicker
                                disablePast
                                label="Data"
                                value={date}
                                onChange={setDate}
                            />
                        </DateContent>
                        <TimeContent>
                            <TimePicker
                                ampm={false}
                                label="Horário"
                                value={time}
                                onChange={setTime}
                            />
                        </TimeContent>
                    </ScheduleContainer>
                </Form>
                <DotsTop />
                <DotsRight />
                <DotsBottom />
            </Content>
            <ChocolateOverlay>
                <Chocolate>
                    <Image
                        src="/images/chocolate.png"
                        alt="Chocolate"
                        width={1569}
                        height={954}
                    />
                </Chocolate>
            </ChocolateOverlay>
        </Section>
    )
}

export default ScheduleOrder
