describe('Person test', () => {
  it('should save a new person', async () => {
    const person = {
      name: 'Wellington',
      age: '27',
      cpf: '456.456.456-12'
    }

    const {body, status} = await global.testRequest
      .post('/person')
      .send(person)

    expect(status).toBe(200)


    const expectedResponse = {
      message: 'Success',
      person: {
        ...person
      }
    }
    expect(body).toMatchObject(expectedResponse)
  })
})
