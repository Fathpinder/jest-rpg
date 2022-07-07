const Potion = require('../lib/Potion');

test('checks a healing potion object', () => {
    const potion = new Potion('health');

    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates random potion object', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.value).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});