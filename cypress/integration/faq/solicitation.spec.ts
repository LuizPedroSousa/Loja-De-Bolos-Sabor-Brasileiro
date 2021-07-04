/// <reference types="cypress" />
import { defaultTestSolicitation } from '../../support/test-constants'

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
