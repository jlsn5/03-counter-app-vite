
import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('pruebas en 07-deses-arr', () => {
    
    test('debe retornar un string y un numero', () => {
        

        const [letters, numbers] = retornaArreglo();


        expect( letters ).toBe( 'ABC');
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        // console.log(typeof numbers);

     })

 })