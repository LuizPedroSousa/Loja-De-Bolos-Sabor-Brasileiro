import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import ArticleItem from '.'
import { render, screen } from '../../../../utils/test-utils'
import faker from 'faker'
type Article = {
    title: string
    slug: string
}

let article: Article

beforeEach(() => {
    const articleTitle = faker.name.title()
    article = {
        title: articleTitle,
        slug: faker.helpers.slugify(articleTitle)
    }
})

describe('<ArticleItem />', () => {
    it('expect href attribute contain article slug', () => {
        render(<ArticleItem article={article} />)

        const link = screen.getByRole('link', { name: article.title })

        expect(link).toHaveAttribute('href', `/faq/artigos/${article.slug}`)
    })

    it('expect a list element with style class', () => {
        render(<ArticleItem article={article} />)

        const list = screen.getByRole('listitem')

        expect(list).toHaveClass('styles__ArticleItemContainer-sc-2dlo5l-0')
    })

    it('expect a strong element with the same text of title article', () => {
        render(<ArticleItem article={article} />)

        const strong = screen.getByText(article.title)

        expect(strong).toHaveTextContent(article.title)
    })

    it('should render a Article Component', () => {
        render(<ArticleItem article={article} />)

        const list = screen.getByRole('listitem')
        const strong = screen.getByText(article.title)
        const link = screen.getByRole('link')

        expect(list).not.toBeNull()
        expect(strong).not.toBeNull()
        expect(link).not.toBeNull()
        expect(list).toContainElement(strong)
        expect(link).toContainElement(strong)
        expect(link).toHaveAttribute('href', `/faq/artigos/${article.slug}`)
        expect(strong).toHaveTextContent(article.title)
    })
})
