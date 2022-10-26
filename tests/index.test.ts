import { initialFunction, initialFunction2, initialFunction3, initialFunction4 } from '../src/salidas'

test('Test Example', () => {
    const test = initialFunction();
    expect(test).toBe('Library');
})

test('Test Example2', () => {
    const test = initialFunction2();
    expect(test).toBe('Library2');
})

test('Test Example3', () => {
    const test = initialFunction3();
    expect(test).toBe('Library3');
})

test('Test Example4', () => {
    const test = initialFunction4();
    expect(test).toBe('Library4');
})
