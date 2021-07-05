import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useRef } from 'react'
import useCustomRipple from '../../../../hooks/useCustomRipple'

import { ArticleItemContainer } from './styles'
type Article = {
    category: string
    title: string
    slug: string
    description: string
}

interface ArticleItemProps {
    article: Article
}

const ArticleItem: React.FC<ArticleItemProps> = ({
    article: { title, slug, description, category }
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    useCustomRipple([{ ref: linkRef }])
    return (
        <ArticleItemContainer>
            <Link href={'/faq/artigos/' + slug}>
                <motion.a ref={linkRef}>
                    <div>
                        <span>{category.split('')[0]}</span>
                        <strong>{category}</strong>
                    </div>
                    <h2>{title}</h2>
                    <p>{description.replace(/<[^>]+>/g, '')}</p>
                </motion.a>
            </Link>
        </ArticleItemContainer>
    )
}

export default ArticleItem
