/* eslint-disable array-callback-return */
import React from 'react'
import { useCake } from '../../../hooks/useCake'
import CakeColumn from './CakeColumn'
import CakeRow from './CakeRow'

import { Section } from './styles'
import CakeHideInfo from './CakeHideInfo'

type ViewLayout = 'column' | 'column-hide-info' | 'row'

interface CakesProps {
    viewLayout: ViewLayout
}

const Cakes: React.FC<CakesProps> = ({ viewLayout }) => {
    const { cakes } = useCake()

    return (
        <Section viewLayout={viewLayout}>
            {cakes.map(cake => {
                switch (viewLayout) {
                    case 'row':
                        return <CakeRow key={cake.id} cake={cake} />
                    case 'column':
                        return <CakeColumn key={cake.id} cake={cake} />
                    case 'column-hide-info':
                        return <CakeHideInfo key={cake.id} cake={cake} />
                }
            })}
        </Section>
    )
}

export default Cakes
