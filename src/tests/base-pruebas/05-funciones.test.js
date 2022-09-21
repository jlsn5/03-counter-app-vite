
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => { 
    
    test('getUser debe retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'Papi'
        }

        const user = getUser();

        expect( testUser ).toEqual(  user );

     });

     test('getUsuarioActiva debe retornar objeto', () => { 

        const name = 'Fernando';

        const user = getUsuarioActivo(name);

        expect( user ).toStrictEqual({
            uid: 'ABC567',
            username: name
        });

      });

 });