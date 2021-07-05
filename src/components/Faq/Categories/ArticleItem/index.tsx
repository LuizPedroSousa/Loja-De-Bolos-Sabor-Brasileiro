import React, { useRef } from 'react'
import Link from 'next/link'

import { ArticleItemContainer } from './styles'
import useCustomRipple from '../../../../hooks/useCustomRipple'
type Article = {
    title: string
    slug: string
}

interface ArticleItemProps {
    article: Article
}
const ArticleItem: React.FC<ArticleItemProps> = ({
    article: { slug, title }
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null)
    useCustomRipple([{ ref: linkRef }])
    return (
        <ArticleItemContainer>
            <Link href={'/faq/artigos/' + slug}>
                <a ref={linkRef}>
                    <strong>{title}</strong>
                </a>
            </Link>
        </ArticleItemContainer>
    )
}

export default ArticleItem
