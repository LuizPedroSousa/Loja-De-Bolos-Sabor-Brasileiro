import React, { FormEvent, useRef, useState } from 'react'
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
    TimeContent,
    DotsBottom,
    DotsRight
} from './styles'
import useCustomRipple from '../../../hooks/useCustomRipple'

const ScheduleOrder: React.FC = () => {
    const handleScheduleOrder = (e: FormEvent) => {
        e.preventDefault()
    }

    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())

    const goRef = useRef<HTMLButtonElement>(null)

    useCustomRipple([{ ref: goRef }])

    return (
        <Section>
            <Strawberry>
                <Image
                    objectFit="cover"
                    src="/images/strawberry.png"
                    alt="Morango"
                    width={3068}
                    height={2126}
                />
            </Strawberry>
            <Content>
                <Form onSubmit={handleScheduleOrder}>
                    <strong>Agendar encomenda</strong>
                    <InputGroup>
                        <input placeholder="seu endereço" type="text" />
                        <button type="submit" name="enviar" ref={goRef}>
                            Go
                        </button>
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
                        objectFit="cover"
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
