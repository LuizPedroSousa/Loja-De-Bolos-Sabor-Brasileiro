/// <reference types="cypress" />
import faker from 'faker'
import { theme } from 'twin.macro'
describe('/Bolos', () => {
    before(() => {
        cy.visit('/bolos')
    })

    it('should render a page with correct seo meta tags', () => {
        const seo = {
            title: 'Bolos | Sabor Brasileiro',
            description: 'Sabor brasileiros | Os melhores sabores sempre'
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
            'http://localhost:3000/images/thumbs/bolos.png'
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
            'http://localhost:3000/bolos?search='
        )
        cy.get('meta[property="twitter:url"]').should(
            'have.attr',
            'content',
            'http://localhost:3000/bolos?search='
        )
    })

    it('should open a drawer with cake, when click in thumb', () => {
        cy.viewport('iphone-6+')
        cy.request('http://localhost:4000/cakes').then(({ body }) => {
            const cake = faker.random.arrayElement(body?.cakes) as any
            cy.get(`[alt="${cake.name}"]`).click()
            cy.get('[id^=chakra-modal--body]').within(() => {
                cy.root()
                    .get('section > header > strong')
                    .should('have.text', cake.name)
                cy.root()
                    .get('section > header > p')
                    .should('have.text', cake.description)
            })
        })
        cy.get('[id^=chakra-modal--header] > button').click()
    })

    it('should open a modal with cake, when click in thumb', () => {
        cy.viewport('macbook-11')
        cy.visit('bolos')
        cy.request('http://localhost:4000/cakes').then(({ body }) => {
            const cake = faker.random.arrayElement(body?.cakes) as any
            cy.get(`[alt="${cake.name}"]`).click()
            cy.get('[id^=chakra-modal--body]').within(() => {
                cy.root()
                    .get('.styles__Info-sc-1ogmen8-6 > strong')
                    .should('have.text', cake.name)
                cy.root()
                    .get('.styles__Info-sc-1ogmen8-6 > p')
                    .should('have.text', cake.description)
            })
        })
        cy.get('[id^=chakra-modal--header] > button').click()
    })
})
