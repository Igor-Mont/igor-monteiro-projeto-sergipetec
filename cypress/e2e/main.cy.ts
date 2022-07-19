const mockedUser = {
  id: 1,
  nome: "MARIA CRISTINA PEREIRA",
  email: "mcristina@gmail.com",
  cpf: "93958790097",
  telefone: "7932100044",
  celular: "79994003345",
  enderecos: [
    {
      rua: "Pablo Picasso",
      numero: "43",
      bairro: "Suiça",
      cidade: "Aracaju",
      cep: "49000000",
      estado: "Sergipe",
      pais: "Brasil"
    },
    {
      rua: "João Ribeiro",
      numero: "1003",
      bairro: "Cardoso",
      cidade: "Joinville",
      cep: "09530210",
      estado: "Santa Catarina",
      pais: "Brasil"
    }
  ]
}
describe('example.spec.ts', () => {
  it('should visit', () => {
    cy.visit('http://localhost:4200')
  });

  it('should have a name of app', () => {
    cy.visit('http://localhost:4200')
    cy.get('h1').contains('Usuários cadastrados')
  });

  it('should have a button with value "Adicionar"', () => {
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar')
  });

  it('should have a message of no registered user', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: []
    })
    cy.visit('http://localhost:4200')
    cy.get('h3').contains('Nenhum usuário cadastrado no sistema.')
  });

  it('should open create user modal', () => {
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('h2').contains('Cadastrar usuário')
  });

  it('should close create user modal', () => {
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('#close-modal').click()
    cy.get("button").not('#close-modal')
  });

  it('should open new container addresses', () => {
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('#open_new_container').click()
    cy.get('#new_container_addresses')
  });

  it('should show validation errors if form is invalid', () => {
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('button').contains('Cadastrar').click()
    cy.get('.validation-error')
  });

  it('should create a new user if form is valid', () => {
    cy.intercept('POST', '**/contribuintes', {
      body: mockedUser
    })
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('#name').type('Valid name')
    cy.get('#email').type('valid@mail.com')
    cy.get('#cpf').type('11111111111')
    cy.get('#phone').type('Valid phone')
    cy.get('#smartphone').type('Valid smartphone')
    cy.get('#street').type('Valid street')
    cy.get('#number').type('Valid number')
    cy.get('#district').type('Valid district')
    cy.get('#cep').type('Valid cep')
    cy.get('#state').type('Valid state')
    cy.get('#city').type('Valid city')
    cy.get('#country').type('Valid country')
    
    cy.get('button').contains('Cadastrar').click()

    cy.get('table')
  });

  it('should open info user modal', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('button').contains('Adicionar').click()
    cy.get('#name').type('Valid name')
    cy.get('#email').type('valid@mail.com')
    cy.get('#cpf').type('11111111111')
    cy.get('#phone').type('Valid phone')
    cy.get('#smartphone').type('Valid smartphone')
    cy.get('#street').type('Valid street')
    cy.get('#number').type('Valid number')
    cy.get('#district').type('Valid district')
    cy.get('#cep').type('Valid cep')
    cy.get('#state').type('Valid state')
    cy.get('#city').type('Valid city')
    cy.get('#country').type('Valid country')
    cy.get('button').contains('Cadastrar').click()
    
    cy.get('#more-infos').click()
    cy.get('.modal-overlay')
    cy.get('.modal-content')
  });

  it('should close info user modal', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('#more-infos').click()
    cy.get('.modal-overlay')
    cy.get('.modal-content')
    cy.get('.close-modal').click()
  });

  it('should be able delete user', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('#delete-user').click()
    cy.get('h3').contains('Nenhum usuário cadastrado no sistema.')
  });

  it('should open update user modal', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('#update-user').click()
    
    cy.get('.modal-overlay')
    cy.get('.modal-content')
    cy.get('.close-modal').click()
  });

  it('should close update user modal', () => {
    cy.intercept('GET', '**/contribuintes', {
      body: [mockedUser]
    })
    cy.visit('http://localhost:4200')
    cy.get('#update-user').click()
    
    cy.get('.modal-overlay')
    cy.get('.modal-content')
    cy.get('.close-modal').click()
  });
});