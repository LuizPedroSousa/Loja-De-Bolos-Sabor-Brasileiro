import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import CategoryItem from '.'
import { render, screen } from '../../../utils/test-utils'
import faker from 'faker'
type Category = {
    name: string
    slug: string
}
let category: Category

beforeEach(() => {
    const categoryName = faker.name.title()
    category = {
        name: categoryName,
        slug: faker.helpers.slugify(categoryName)
    }
})

describe('<CategoryItem />', () => {
    it('should contain a span with first category name letter', () => {
        const firstCategoryNameLetter = category.name.split('')[0]
        render(<CategoryItem category={category} />)

        const span = screen.getByRole('span')

        expect(span).not.toBeNull()
        expect(span).toHaveTextContent(firstCategoryNameLetter)
    })

    it('should contain a list element with class style', () => {
        render(<CategoryItem category={category} />)

        const list = screen.getByRole('listitem')

        expect(list).not.toBeNull()
        expect(list).toHaveClass('styles__CategoryItemContainer-sc-1kgh9cn-0')
    })

    it('should contain a link with href as category slug', () => {
        render(<CategoryItem category={category} />)

        const link = screen.getByRole('link')

        expect(link).not.toBeNull()
        expect(link).toHaveAttribute(
            'href',
            `/faq/artigos/categorias/${category.slug}`
        )
    })

    it('should render a CategoryItem', () => {
        render(<CategoryItem category={category} />)
        const firstCategoryNameLetter = category.name.split('')[0]
        const list = screen.getByRole('listitem')
        const span = screen.getByText(category.name.split('')[0])
        const link = screen.getByRole('link')
        const strong = screen.getByText(category.name)

        expect(list).not.toBeNull()
        expect(span).not.toBeNull()
        expect(strong).not.toBeNull()
        expect(link).not.toBeNull()
        expect(list).toContainElement(link)
        expect(link).toContainElement(strong)
        expect(link).toContainElement(span)
        expect(list).not.toBeNull()
        expect(list).toHaveClass('styles__CategoryItemContainer-sc-1kgh9cn-0')
        expect(span).toHaveTextContent(firstCategoryNameLetter)
        expect(link).toHaveAttribute(
            'href',
            `/faq/artigos/categorias/${category.slug}`
        )
    })
})
