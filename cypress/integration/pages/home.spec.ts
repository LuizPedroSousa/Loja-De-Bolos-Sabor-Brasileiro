/// <reference types="cypress" />
describe('/', () => {
    before(() => {
        cy.visit('/')
    })

    it('should render a page with correct seo meta tags', () => {
        const seo = {
            title: 'Home | Sabor Brasileiro',
            description:
                'Sabor Brasileiro | A melhor loja de bolos com os melhores sabores.'
        }
        cy.get('title').should('have.text', seo.title)
        cy.get('meta[name="description"]').should(
            'have.attr',
            'content',
            seo.description
        )
        cy.get('meta[property="og:type"]').should(
            'have.attr',
            'content',
            'website'
        )
        cy.get('meta[property="og:title"]').should(
            'have.attr',
            'content',
            seo.title
        )
        cy.get('meta[property="og:image"]').should(
            'have.attr',
            'content',
            'http://localhost:3000/images/thumbs/home.png'
        )
        cy.get('meta[property="twitter:title"]').should(
            'have.attr',
            'content',
            seo.title
        )
        cy.get('meta[property="twitter:card"]').should(
            'have.attr',
            'content',
            'summary_large_image'
        )
        cy.get('meta[property="twitter:description"]').should(
            'have.attr',
            'content',
            seo.description
        )
        cy.get('meta[property="og:url"]').should(
            'have.attr',
            'content',
            'http://localhost:3000/'
        )
        cy.get('meta[property="twitter:url"]').should(
            'have.attr',
            'content',
            'http://localhost:3000/'
        )
    })

    it('should have a header with respective page links in all devices', () => {
        cy.viewport('iphone-3')
        cy.get('main > header > nav > a')
            .should('not.be.null')
            .should('have.attr', 'href', '/')

        cy.get('main > header >nav >div >button')
            .should('have.attr', 'name', 'Menu')
            .should('not.be.null')
            .click()

        cy.get('[id^=chakra-modal--body] > ul')
            .should('not.be.null')
            .within(() => {
                cy.root()
                    .get('li:nth-of-type(1) > a')
                    .should('not.be.null')
                    .should('have.attr', 'href', '/')

                cy.root()
                    .get('li:nth-of-type(2) > a')
                    .should('not.be.null')
                    .should('have.attr', 'href', '/bolos')

                cy.root()
                    .get('li:nth-of-type(3) > a')
                    .should('not.be.null')
                    .should('have.attr', 'href', '/contato')

                cy.root()
                    .get('li:nth-of-type(4) > a')
                    .should('not.be.null')
                    .should('have.attr', 'href', '/encomendar')

                cy.root()
                    .get('li:nth-of-type(5) > a')
                    .should('not.be.null')
                    .should('have.attr', 'href', '/faq')

                cy.root()
                    .get('li:last-of-type > button')
                    .should('not.be.null')
                    .should('have.attr', 'name', 'Mini Carrinho')
                    .click()
            })
    })
})
