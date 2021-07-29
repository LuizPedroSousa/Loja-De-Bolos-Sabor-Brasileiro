/// <reference types="cypress" />
import { defaultTestSolicitation } from '../../../support/test-constants'

describe('FAQ Solicitation', () => {
    it('should successfully loads', () => {
        cy.visit('faq/requests/new')
    })

    describe('Create solicitation', () => {
        beforeEach(() => {
            cy.visit('http://localhost:3000/faq')
            cy.viewport('macbook-11')
            cy.get('nav')
                .children('div')
                .children('a')
                .contains('Enviar Solicitação')
                .click()

            cy.location().should(location =>
                expect(location.href).to.eq(
                    'http://localhost:3000/faq/requests/new'
                )
            )
        })

        it('should render a page with correct seo meta tags', () => {
            const seo = {
                title: 'Enviar uma solicitação | FAQ | Sabor Brasileiro',
                description:
                    'Envie uma solicitação com informações sobre sugestões, problemas ou duvidas. Sabor Brasileiro | O melhor sempre!',
                url: 'http://localhost:3000/faq/requests/new',
                thumb: 'http://localhost:3000/images/thumbs/solicitation.png'
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
                seo.thumb
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
                seo.url
            )
            cy.get('meta[property="twitter:url"]').should(
                'have.attr',
                'content',
                seo.url
            )
        })

        it('should render a successfully modal when user sends a successfully solicitation', () => {
            cy.get('input[name="name"]').type(defaultTestSolicitation.firstName)
            cy.get('input[name="surname"]').type(
                defaultTestSolicitation.lastName
            )
            cy.get('input[type="email"]').type(defaultTestSolicitation.email)
            cy.get(`button[name="${defaultTestSolicitation.reason}"]`).click()
            cy.get('input[name="subject"]').type(
                defaultTestSolicitation.subject
            )
            cy.get('textarea[name="description"]').type(
                defaultTestSolicitation.description
            )
            cy.get('button[name="Enviar solicitação"]').click()
            cy.location().should(location =>
                expect(location.href).to.eq('http://localhost:3000/faq')
            )

            cy.root().should('match', 'html')
            cy.get('.chakra-modal__body').within(() => {
                // Check title
                cy.root()
                    .should('have.class', 'chakra-modal__body')
                    .children('strong')
                    .contains('Solicitação enviada!')
                cy.root()
                    .should('have.class', 'chakra-modal__body')
                    .children('p')
                    .contains(
                        'Solicitação enviada com sucesso, veja abaixo os seus dados.'
                    )
            })
            cy.getCookie('hasSolicitation').should('be.null')
        })

        it('should render a error modal when user sends a bad solicitation', () => {
            cy.intercept(
                {
                    method: 'POST',
                    url: 'http://localhost:4000/faq/solicitations/create'
                },
                { forceNetworkError: true }
            ).as('createSolicitation')

            cy.get('input[name="name"]').type(defaultTestSolicitation.firstName)
            cy.get('input[name="surname"]').type(
                defaultTestSolicitation.lastName
            )
            cy.get('input[type="email"]').type(defaultTestSolicitation.email)
            cy.get(`button[name="${defaultTestSolicitation.reason}"]`).click()
            cy.get('input[name="subject"]').type(
                defaultTestSolicitation.subject
            )
            cy.get('textarea[name="description"]').type(
                defaultTestSolicitation.description
            )

            cy.get('button[name="Enviar solicitação"]').click()
            cy.wait('@createSolicitation')

            cy.location().should(location =>
                expect(location.href).to.eq(
                    'http://localhost:3000/faq/requests/new'
                )
            )
            cy.getCookie('hasSolicitation').should('be.null')

            cy.root().should('match', 'html')
            cy.get('.chakra-modal__body').within(() => {
                // Check title
                cy.root()
                    .should('have.class', 'chakra-modal__body')
                    .children('strong')
                    .contains('Ooops!')
                cy.root()
                    .should('have.class', 'chakra-modal__body')
                    .children('p')
                    .contains(
                        'Parece que houve uma falha interna ao tentar enviar uma solicitação, tente novamente mais tarde.'
                    )
            })
        })
    })
})
