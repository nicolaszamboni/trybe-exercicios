const myRemove = require('../dia-02-primeiros-passos-em-jest/exercicico-1');

describe('a função myRemove', () => {
    it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado;', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    });
});