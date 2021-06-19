import React from 'react'
import { useCake } from '../../../hooks/useCake'
import CheckBox from '../../CheckBox'

import { Aside, Content, Categories, CategoryItem } from './styles'

const DesktopFilters: React.FC = () => {
    const { categories } = useCake()
    return (
        <Aside>
            <Content>
                <Categories>
                    <strong>Categories</strong>
                    {categories.map(category => (
                        <CategoryItem key={category.id}>
                            <CheckBox
                                labelId={category.id}
                                label={category.name}
                                color="orange"
                            />
                        </CategoryItem>
                    ))}
                </Categories>
            </Content>
        </Aside>
    )
}

export default DesktopFilters
