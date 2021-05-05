describe('Bank Account test', () => {
  it('should create a new account', async () => {
    const bankAccount = {
      ownerId: 1,
      balance: 300,
      accountNumber: '456546-4'
    }

    const {status, body} = await global.testRequest
      .post('/bank-account')
      .send(bankAccount)

    expect(status).toBe(200)
    expect(body).toBe({
      message: 'Success',
      bankAccount: {
        id: 1,
        ...bankAccount
      }
    })
  })
})
