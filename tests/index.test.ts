import { initialFunction } from '../src/prueba/index'
import { initialFunction2 } from '../src/prueba2/index'

test('Test Example', () => {
    const test = initialFunction();
    expect(test).toBe('Library');
})

test('Test Example', () => {
    const test = initialFunction2();
    expect(test).toBe('Library2');
})
