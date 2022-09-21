import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => {
    
    test('debe retornar un heroe', (done) => {

        const id = 1;
        getHeroeByIdAsync( id )
            .then( hero => {

                expect( hero ).toEqual( {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                } );
                done();
            })

     })

 })