import Link from 'next/link'
import React, { useRef } from 'react'
import useCustomRipple from '../../../hooks/useCustomRipple'

import { CategoryItemContainer } from './styles'
type Category = {
    slug: string
    name: string
}
interface CategoryItemProps {
    category: Category
}
const CategoryItem: React.FC<CategoryItemProps> = ({
    category: { slug, name }
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    useCustomRipple([{ ref: linkRef }])
    return (
        <CategoryItemContainer>
            <Link href={`/faq/artigos/categorias/${slug}`}>
                <a ref={linkRef}>
                    <span role="span">{name.split('')[0]}</span>
                    <strong>{name}</strong>
                </a>
            </Link>
        </CategoryItemContainer>
    )
}

export default CategoryItem
