const ROOT = Cypress.env('ROOT')
const NAME_ROOT = Cypress.env('NAME_ROOT')

describe(
  'Search',
  {
    retries: {
      runMode: 5
    }
  },
  () => {
    it('can list a domain', () => {
      const name = 'resolver.go'
      cy.visit(ROOT)
      cy.getByPlaceholderText('Search', { exact: false }).type('resolver')
      cy.wait(1500)
      cy.get('button')
        .contains('Search')
        .click({ force: true })
      cy.wait(1500)
      cy.getByTestId(`domain-${name}`).within(container => {
        cy.queryByText(name, { exact: false }).should('exist')
        cy.queryByText('Expires', { exact: false }).should('exist')
      })
    })

    //Visit a domain, check the owner, resolver, address, content exists
    it('can search for a domain', () => {
      cy.visit(ROOT)
      cy.getByPlaceholderText('Search', { exact: false }).type('resolver.go')
      cy.wait(1500)
      cy.get('button')
        .contains('Search')
        .click({ force: true })
      cy.wait(1500)
      cy.getByTestId('details-value-registrant', { exact: false }).should(
        'have.text',
        Cypress.env('ownerAddress')
      )
      cy.getByTestId('details-value-controller', { exact: false }).should(
        'have.text',
        Cypress.env('ownerAddress')
      )
      cy.getByTestId('details-value-resolver', { exact: false }).should(
        'have.text',
        Cypress.env('resolverAddress')
      )
    })

    it('can not search names with invalid format', () => {
      cy.visit(ROOT)
      cy.getByPlaceholderText('Search', { exact: false }).type('abc defg')
      cy.wait(10000)
      cy.getByTestId('home-search-button').click({ force: true })
      cy.wait(10000)
      cy.queryByText('Domain malformed. abc defg is not a valid domain.', {
        exact: false
      }).should('exist')
    })

    it('cannot directly search too short name', () => {
      cy.visit(`${ROOT}/search/ab`)
      cy.queryByText('Name is too short', { exact: false }).should('exist')
    })

    it('cannot register malformated name', () => {
      cy.visit(`${ROOT}/search/ab go`)
      cy.queryByText('Domain malformed. ab go is not a valid domain', {
        exact: false
      }).should('exist')
    })

    it('can see the list of Names if no TLDS are specified', () => {
      cy.visit(ROOT)
      cy.getByPlaceholderText('Search', { exact: false }).type(
        'notldispsecified'
      )
      cy.wait(10000)
      cy.get('button')
        .contains('Search')
        .click({ force: true })
      cy.wait(10000)
      cy.queryByText('Names', { exact: false }).should('exist')
      cy.queryByText('notldispsecified.go', { exact: false }).should('exist')
    })

    it('should uri encode search term', () => {
      cy.visit(ROOT)
      cy.getByPlaceholderText('Search', { exact: false }).type(
        '%E2%80%8Btest.go'
      )
      cy.wait(10000)
      cy.get('button')
        .contains('Search')
        .click({ force: true })
      cy.wait(10000)
      cy.queryByText(
        'Domain malformed. %e2%80%8btest.go is not a valid domain.',
        {
          exact: false
        }
      ).should('exist')
    })
  }
)
