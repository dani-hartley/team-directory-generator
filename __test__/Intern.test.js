const Intern = require('../lib/Intern');

test ('create an Intern Object', () => {
    const intern = new Intern ('Dani', 234, 'email', 'school');

    expect(intern.name).toBe('Dani');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
})