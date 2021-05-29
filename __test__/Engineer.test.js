const Engineer = require('../lib/Engineer');

test ('create engineer object', () => {
    const engineer = new Engineer ('Dani', 234, 'email', 'github');

    expect(engineer.name).toBe('Dani');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe('email');
    expect(engineer.github).toBe('github');
});

test ("get engineer's github", () => {
    const engineer = new Engineer ('Dani', 234, 'email', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining('github'))
});

test('get engineer role', () => {
    const engineer = new Engineer ('Dani', 234, 'email');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});