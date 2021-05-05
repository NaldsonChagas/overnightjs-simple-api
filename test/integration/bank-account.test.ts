describe('Bank Account test', () => {
  it('should create a new account', async () => {
    const bankAccount = {
      owner: {
        name: 'Wellington',
        cpf: '546.456.456-45',
        age: 38
      },
      balance: 300,
      accountNumber: '456546-4'
    }
    const {status} = await global.testRequest
      .post('/bank-account')
      .send(bankAccount)
    expect(status).toBe(200)
  })
})
