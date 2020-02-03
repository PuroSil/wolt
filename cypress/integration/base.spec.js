const searchValueCity = 'Helsinki';
const searchValueFood = 'Sushi';

describe('Base end-to-end functionality tests', () => {
  it('Test API request validity', () => {
    cy.request('http://localhost:8080/api/getAllRestaurants')
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.greaterThan(0)
    });
  });
  
  it('Base setup tests', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.search__form')
    cy.get('input')
  });

  it('Input and submit at landing', () => {
    cy.get('input')
      .type(searchValueCity)
      .should('have.value', searchValueCity)
      .type('{enter}')
  });

  it('Use query search and validate it', () => {
    cy.request(`http://localhost:8080/api/getRestaurantsByName?name=${searchValueFood}&userLon=24.909268599999997&userLat=60.1563668`)
    .then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.lessThan(50)
    });
  });

  it('Input and submit at results', () => {
    cy.get('.search__input')
      .type(searchValueFood)
      .should('have.value', searchValueFood)
      .type('{enter}')
    cy.contains('Descending').click()
    cy.contains('Ascending').click()
    cy.contains('Show all').click()
  })

  it('Move to restaurant page', () => {
    cy.get('.block__sale').click()
    cy.contains('Category One Link').click()
    cy.contains('Category Two Link').click()
    cy.contains('Category Three Link').click()
    cy.get('.logo').click()
  })
});
