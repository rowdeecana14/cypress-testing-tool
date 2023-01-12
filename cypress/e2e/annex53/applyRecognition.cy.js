/// <reference types="cypress" />
describe('Apply Testing Laboratory Recognition', () => {
  const MESSAGE = 'Application was successfully submited.';
  const USERNAME = "testingian";
  const PASSWORD = "password";
  const NAME = "Ian Miranda";
  const payload = {
    "company": "Isaiah Alexander",
    "brgy": "Bago Gallera",
    "district": "Unity Rios",
    "street": "Ad cupidatat minus s",
    "total_personel": "100",
    "contact": [
        {
            "phone": "111111",
            "mobile": "222222"
        }
    ],
    "email": "kebufip@mailinator.com",
    "website": "https://www.lyhuxiloceby.tv",
    "manager_lname": "Mia Cleveland",
    "manager_mname": "Flynn Rollins",
    "manager_fname": "Jared Bennett",
    "manager_suffix": "T",
    "contact_person_lname": "Jamalia Potter",
    "contact_person_mname": "Tasha Parks",
    "contact_person_fname": "Althea Cain",
    "contact_person_suffix": "TY",
    "contact_person_telno": "Velit deserunt est ",
    "contact_person_mobile": "45454",
    "contact_person_email": "viren@mailinator.com",
    "local_rep_company": "Carlson and Rhodes Co",
    "local_rep_brgy": "Cogon",
    "local_rep_street": "Laborum Soluta illu",
    "local_rep_contact": [
        {
            "phone": "5555555",
            "mobile": "666666666"
        }
    ],
    "local_rep_email": "delebu@mailinator.com",
    "local_rep_website": "https://www.joj.in",
    "auth_rep_lname": "Steven Castaneda",
    "auth_rep_mname": "Clio Carr",
    "auth_rep_fname": "Barbara Mccormick",
    "auth_rep_suffix": "F",
    "auth_rep_telno": "Velit cum sed qui f",
    "auth_rep_mobile": "56546",
    "auth_rep_email": "kaci@mailinator.com",

    "accreditions": [
      {
        'name': 'Accredition 1',
        'no': '23232',
        'validity': '2023-12-31',
      }
    ],
    "certificates": [
      {
        'pnsno': 'Certificate 1',
      }
    ],
    "scopes": [
      {
        'pnsno': 'pns-232',
        'title': 'Title 1',
      }
    ]
  };

  // before(() => {
  // })

  // beforeEach(() => {
  // })

  // afterEach(() => {
  // })

  // after(() => {
  // })

  // cy.visit('https://stackoverflow.com')
  // cy.origin('https://stackoverflow.com', () => {
  //   cy.get('selector') // yup all good
  // })

  beforeEach(() => {
    cy.visit('/');
    cy.get('#inputUsername').type(`${USERNAME}`).should('have.value', USERNAME);
    cy.get('#inputPassword').type(`${PASSWORD}`).should('have.value', PASSWORD);
    cy.get('#btn-login').click().should('be.visible');
  })

  it('Login as Testing Laboratory', () => {
    cy.visit('/TLDashboard');
    cy.url().should('include', '/TLDashboard')
    cy.get('.name').should('contain', NAME);
  })

  it('Fillup and Submit Application', () => {
    cy.get('.list > :nth-child(3) > :nth-child(1)').click().should('be.visible').children().contains('Certification Management');
    cy.get(':nth-child(4) > .waves-effect').as('btnApply').click().should('be.visible')
    cy.get('@btnApply').contains('Apply for Recognition as Testing Lab Body');

    // TESTING LABORATORY DETAILS FORM
    cy.wait(1000)
    cy.get('#testLabName').type(`${payload.company}`).should('have.value', payload.company);
    cy.get('[for="local_address"]').click().should('be.visible');
    cy.get('.sub-content > :nth-child(5) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn > .filter-option')
      .click().should('be.visible');
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn > .filter-option')
      .click().should('be.visible');
    cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn')
      .click().should('be.visible');
    cy.get(':nth-child(6) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get('#brgyName').type(payload.brgy)
    cy.get('#districtName').type(payload.district)
    cy.get('#street').type(payload.street)
    cy.get('#totalNumPersonel').type('{selectall}{backspace}').type(payload.total_personel)
    cy.get(':nth-child(11) > .table > tbody > tr > :nth-child(1) > .form-group > .form-line > .form-control').type(payload.contact[0].phone)
    cy.get(':nth-child(11) > .table > tbody > tr > :nth-child(2) > .form-group > .form-line > .form-control').type(payload.contact[0].mobile)
    cy.get('#email').type(payload.email).should('have.value', payload.email);
    cy.get('#website').type(payload.website).should('have.value', payload.website);
    cy.get('#testLabManLname').type(payload.manager_lname).should('have.value', payload.manager_lname);
    cy.get('#testLabManFname').type(payload.manager_fname).should('have.value', payload.manager_fname);
    cy.get('#testLabManMname').type(payload.manager_mname).should('have.value', payload.manager_mname);
    cy.get('#testLabManSuffix').type(payload.manager_suffix).should('have.value', payload.manager_suffix);
    cy.get('#contactPerLname').type(payload.contact_person_lname).should('have.value', payload.contact_person_lname);
    cy.get('#contactPerFname').type(payload.contact_person_fname).should('have.value', payload.contact_person_fname);
    cy.get('#contactPerMname').type(payload.contact_person_mname).should('have.value', payload.contact_person_mname);
    cy.get('#contactPerSuffix').type(payload.contact_person_suffix).should('have.value', payload.contact_person_suffix);
    cy.get('#contactPerDetailsTelNo').type(payload.contact_person_telno).should('have.value', payload.contact_person_telno);
    cy.get('#contactPerDetailsMobileNo').type(payload.contact_person_mobile).should('have.value', payload.contact_person_mobile);
    cy.get('#contactPerDetailsEmail').type(payload.contact_person_email).should('have.value', payload.contact_person_email);
    cy.get('#localRepCompany').type(payload.local_rep_company).should('have.value', payload.local_rep_company);
    cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn > .filter-option')
      .click().should('be.visible');
    cy.get(':nth-child(4) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn > .filter-option')
      .click().should('be.visible');
    cy.get(':nth-child(4) > :nth-child(2) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get(':nth-child(21) > :nth-child(5) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .btn > .filter-option')
      .click().should('be.visible');
    cy.get(':nth-child(21) > :nth-child(5) > :nth-child(1) > :nth-child(1) > .form-group > .form-line > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a')
      .click()

    cy.get('#localRepbrgyName').type(payload.local_rep_brgy).should('have.value', payload.local_rep_brgy);
    cy.get('#localRepStreet').type(payload.local_rep_street).should('have.value', payload.local_rep_street);
    cy.get(':nth-child(21) > .table-responsive > .table > tbody > tr > :nth-child(1) > .form-group > .form-line > .form-control')
      .type(payload.local_rep_contact[0].phone).should('have.value', payload.local_rep_contact[0].phone);
    cy.get(':nth-child(21) > .table-responsive > .table > tbody > tr > :nth-child(2) > .form-group > .form-line > .form-control')
      .type(payload.local_rep_contact[0].mobile).should('have.value', payload.local_rep_contact[0].mobile);
    cy.get('#localRepemail').type(payload.local_rep_email).should('have.value', payload.local_rep_email);
    cy.get('#localRepwebsite').type(payload.local_rep_website).should('have.value', payload.local_rep_website);
    cy.get('#authRepLname').type(payload.auth_rep_lname).should('have.value', payload.auth_rep_lname);
    cy.get('#authRepFname').type(payload.auth_rep_fname).should('have.value', payload.auth_rep_fname);
    cy.get('#authRepMname').type(payload.auth_rep_mname).should('have.value', payload.auth_rep_mname);
    cy.get('#authRepSuffix').type(payload.auth_rep_suffix).should('have.value', payload.auth_rep_suffix);
    cy.get('#authRepTelNo').type(payload.auth_rep_telno).should('have.value', payload.auth_rep_telno);
    cy.get('#authRepMobileNo').type(payload.auth_rep_mobile).should('have.value', payload.auth_rep_mobile);
    cy.get('#authRepEmail').type(payload.auth_rep_email).should('have.value', payload.auth_rep_email);
    cy.get('.buttons > .btn').click().should('be.visible');

    // GENERAL INFORMATION FORM
    cy.wait(1000)
    cy.get('#accreditation_name').type(payload.accreditions[0].name).should('have.value', payload.accreditions[0].name);
    cy.get('#accreditation_no').type(payload.accreditions[0].no).should('have.value', payload.accreditions[0].no);
    cy.get('#accreditation_validity').type(payload.accreditions[0].validity).should('have.value', payload.accreditions[0].validity);

    cy.get(':nth-child(4) > div > .btn').click().should('be.visible');
    cy.get('#fileInputAccreditation').selectFile('cypress/e2e/files/fiel-1.pdf',{force: true})
    cy.get('#certificate_name').type(payload.accreditions[0].name).should('have.value', payload.accreditions[0].name);

    cy.get('tr > :nth-child(2) > div > .btn').click().should('be.visible');
    cy.get('#fileInputCert').selectFile('cypress/e2e/files/fiel-2.pdf',{force: true})

    cy.get(':nth-child(2) > :nth-child(1) > .form-group > .form-line > #pns_no')
      .type(payload.scopes[0].pnsno).should('have.value', payload.scopes[0].pnsno);
    cy.get(':nth-child(2) > :nth-child(2) > .form-group > .form-line > #standard_title')
      .type(payload.scopes[0].title).should('have.value', payload.scopes[0].title);
    cy.get('.p-l-20').click().should('be.visible');

    // DOCUMENTS FORM
    cy.wait(1000)
    cy.get(':nth-child(1) > :nth-child(1) > .btn-primary').click().should('be.visible');
    cy.get('#fileDocument').selectFile('cypress/e2e/files/fiel-1.pdf',{force: true})

    cy.get(':nth-child(2) > :nth-child(1) > .btn-primary').click().should('be.visible');
    cy.get('#fileDocument').selectFile('cypress/e2e/files/fiel-2.pdf',{force: true})

    cy.get(':nth-child(3) > :nth-child(1) > .btn-primary').click().should('be.visible');
    cy.get('#fileDocument').selectFile('cypress/e2e/files/fiel-3.pdf',{force: true})

    cy.get(':nth-child(4) > :nth-child(1) > .btn-primary').click().should('be.visible');
    cy.get('#fileDocument').selectFile('cypress/e2e/files/fiel-4.pdf',{force: true})

    cy.get(':nth-child(5) > :nth-child(1) > .btn-primary').click().should('be.visible');
    cy.get('#fileDocument').selectFile('cypress/e2e/files/fiel-5.pdf',{force: true})
    cy.get('.p-l-20').click().should('be.visible');

    // TERMS & CONDITIONS FORM
    cy.wait(1000)
    cy.get('label.font-bold').click().should('be.visible');
    cy.get('.btn-primary').click().should('be.visible');
    cy.get('.jconfirm-buttons > .btn-primary').as('btnOkay').click()
    cy.get('.jconfirm-content > div').should('contain', MESSAGE)
  })
})
