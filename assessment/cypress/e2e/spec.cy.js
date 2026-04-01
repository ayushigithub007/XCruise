<<<<<<< HEAD
describe("XProfile Tests", () => {
  beforeEach(() => {
    // Visits the page before each test
    cy.visit('http://43.204.141.169:8081/') // Replace with your actual URL
  });

  it("has the correct title", () => {
    cy.title().should("include", "XProfile - My Virtual Profile Card");
  });

  it("displays a profile picture", () => {
    cy.get(".profile-pic").should("be.visible");
  });

  it("shows the correct user name", () => {
    cy.get(".profile-box h3").should("have.text", "Learner Beaver");
  });

  it("displays the correct job title", () => {
    cy.get(".profile-box p").should(
      "have.text",
      "Frontend Dev at CrioDo, Bengaluru"
    );
  });

  it("has functioning social media links", () => {
    cy.get(".social-media img").should("have.length", 3);
  });

  it("menu and settings icons are visible", () => {
    cy.get(".menu-icon").should("be.visible");
    cy.get(".setting-icon").should("be.visible");
  });

  it("applies the correct styles to the profile box", () => {
    cy.get(".profile-box")
      .should("have.css", "background-color", "rgb(255, 87, 74)") // Convert hex #ff574a to rgb
      .and("have.css", "text-align", "center")
      .and("have.css", "padding", "40px 90px")
      .and("have.css", "color", "rgb(255, 255, 255)") // #fff converted to rgb
      .and("have.css", "border-radius", "20px");
  });

  it("has correctly styled menu and setting icons", () => {
    cy.get(".menu-icon").should("have.css", "width", "25px");
    cy.get(".setting-icon").should("have.css", "width", "25px");
  });

  it("has a profile picture with the correct styles", () => {
    cy.get(".profile-pic")
      .should("have.css", "width", "150px")
      .and("have.css", "border-radius", "50%") // #fff converted to rgb
      .and("have.css", "padding", "6px");
  });

  it("ensures social media images have the correct size and are clickable", () => {
    cy.get(".social-media img")
      .should("have.css", "width", "20px")
      .and("have.css", "cursor", "pointer");
  });
});
=======
describe('xCruise Landing Page Tests', () => {
  beforeEach(() => {
    // Visit the xCruise home page before each test
    cy.visit('http://13.233.130.0:8081/') // Replace with the actual URL
  });

  it('Navigation Bar - should display the xCruise logo', () => {
    cy.get('.navbar .logo img').should('be.visible');
  });

  it('Navigation Bar - should have links to Home, Destinations, and Deals', () => {
    cy.get('.navbar .menu a').contains('Home').should('be.visible');
    cy.get('.navbar .menu a').contains('Destinations').should('be.visible');
    cy.get('.navbar .menu a').contains('Deals').should('be.visible');
  });

  it('Navigation Bar - should have a background color of #000033', () => {
    cy.get('.navbar').should('have.css', 'background-color', 'rgb(0, 0, 51)');
  });

  it('Hero Section - should display the main heading', () => {
    cy.get('.hero h1').contains('DISCOVER THE BEAUTY OF CRUISING WITH US').should('be.visible');
  });

  it('Hero Section - should have a Book Now button', () => {
    cy.get('.hero button').contains('Book Now').should('be.visible');
  });

  it('Hero Section - should display the hero image as a background', () => {
    cy.get('.hero').should('have.css', 'background-image').and('include', 'hero-cruise.png');
  });

  it('Discover Section - should display the heading "DISCOVER OUR DESTINATIONS"', () => {
    cy.get('.discover .heading h2').contains('DISCOVER OUR DESTINATIONS').should('be.visible');
  });

  it('Discover Section - should display popular destinations with images', () => {
    cy.get('.discover .popular .pills div img').should('have.length', 3);
  });

  it('Discover Section - should have cards with a cursor pointer on hover', () => {
    cy.get('.discover .card').should('have.css', 'cursor', 'pointer');
  });

  it('Discover Section - popular pills should have a shadow', () => {
    cy.get('.discover .popular .pills > div').first().invoke('css', 'box-shadow').should('not.be.empty');
  });

  it('Contact Us Section - should display the Contact Us section with correct information', () => {
    // Verify the Contact Us heading
    cy.get('#contact > h3').should('contain', 'Contact Us');

    // Check for Contact Information
    cy.get('.contact_info > div').first().within(() => {
      cy.get('h4').should('contain', 'Contact Information');
      cy.get('p').first().should('contain', '6750 N. Andrews Avenue Suite 100 Fort Lauderdale, FL 33309');
      cy.get('p').last().should('contain', 'Call Us: +62-813 346 100');
    });

    // Check Hours of Operation
    cy.get('.contact_info > div').last().within(() => {
      cy.get('h4').should('contain', 'Hours of Operation');
      cy.get('p').first().should('contain', 'Mon-Fri: 8:00 am - 11:00 pm EST');
      cy.get('p').last().should('contain', 'Sat-Sun: 9:00 am - 9:00 pm EST');
    });
  });

  it('Footer Section - should display the Footer section with all elements correctly', () => {
    cy.get('.social-icons').children().should('have.length', 4);
    cy.get('.footer_rights').should('contain', '© 2024 xCruise In. All rights reserved');
  });
});
>>>>>>> bd37c7d75beabdea437aed744400a6c9361b3d8e
