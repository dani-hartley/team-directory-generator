const Engineer = require('../lib/Engineer');

test ('create engineer object', () => {
    const engineer = new Engineer ('Dani', 234, 'email', 'github');

    expect(engineer.name).toBe('Dani');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});