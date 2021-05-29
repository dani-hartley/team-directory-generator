const Manager = require('../lib/Manager');

test ('create an Manager object', () => {
    const manager = new Manager ('Dani', 234, 'email', 'office');

    expect(manager.name).toBe('Dani');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe('email');
    expect(manager.office).toBe('office');
});

test ('get managers office number', () => {
    const manager = new Manager ('Dani', 234, 'email', 'office');

    expect(manager.getOffice()).toEqual(expect.stringContaining('office'))
});

test ('get managers role', () => {
    const manager = new Manager ('Dani', 234, 'email', 'office');

    expect(manager.getRole()).toEqual(expect.stringContaining('manager'))
});