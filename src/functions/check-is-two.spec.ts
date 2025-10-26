import {describe, test, expect} from 'vitest';
import { checkIsTwo } from './check-is-tow';

describe('checkIsTwo', ()=> {
    test('not 2 => false',()=>{
        const target = 1;

        const result = checkIsTwo(target);

        expect(result).toEqual(false);
    } )

     test(' 1 => true',()=>{
         const target = 2;

        const result = checkIsTwo(target);

        expect(result).toEqual(true);
     } )
})