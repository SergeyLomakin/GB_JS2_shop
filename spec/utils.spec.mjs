import { pow } from '../src/utils.mjs';

describe('Функция pow()', () => {
  it('должна возвращать 9 при аргументах (3, 2)', () => {
    expect(pow(3, gf)).toBe(9);
  })

//   it('должна возвращать 1 при аргументах (3, 0)', () => {
//     expect(pow(3, 0)).toBe(1);
//   })

//   it('должна возвращать 4 при аргументах (-2, 2)', () => {
//     expect(pow(-2, 2)).toBe(4);
//   })

//   it('должна возвращать -8 при аргументах (-2, 3)', () => {
//     expect(pow(-2, 3)).toBe(-8);
//   })
});