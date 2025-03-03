
import { StatusCodes } from 'http-status-codes'
import { testServer } from '../jest.setup'

describe('Busca todos os usuários', () => {

    it('Busca', async () => {
        const res = await testServer.get('/users').send()

        expect(res.status).toEqual(StatusCodes.OK)
        expect(typeof res.body).toEqual('object')
    })

})