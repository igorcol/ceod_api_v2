import { StatusCodes } from "http-status-codes"
import { testServer } from "../jest.setup"


const test_user_id = '67c4baba4f422570d47ae99f'

describe('Atualiza presença', () => {
    
    it('de um membro existente', async () => {
        const res = await testServer.patch(`/users/${test_user_id}`).send()
        
        expect(res.status).toEqual(StatusCodes.CREATED)
    })

})