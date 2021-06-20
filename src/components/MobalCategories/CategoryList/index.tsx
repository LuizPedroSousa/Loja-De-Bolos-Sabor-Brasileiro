import React, { useRef } from 'react'
import useCustomRipple from '../../../hooks/useCustomRipple'

import { Category } from './styles'

type Photo = {
    url: string
}

type Cake = {
    id: string
    name: string
    description: string
    price: string
    photos: Photo[]
}

type CategoryType = {
    id: string
    name: string
    cakes: Cake[]
}

interface CategoryListProps {
    category: CategoryType
}

const CategoryList: React.FC<CategoryListProps> = ({ category }) => {
    const categoryRef = useRef<HTMLButtonElement>(null)
    useCustomRipple([{ ref: categoryRef }])

    return (
        <Category>
            <button ref={categoryRef} type="button" name={category.name}>
                {category.name}
            </button>
        </Category>
    )
}

export default CategoryList
