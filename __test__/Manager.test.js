const Manager = require('../lib/Manager');

test ('create an Manager object', () => {
    const manager = new Manager ('Dani', 234, 'email', 'office');

    expect(manager.name).toBe('Dani');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');
    expect(manager.office).toBe('office');
});