const Intern = require('../lib/Intern');

test ('create an Intern Object', () => {
    const intern = new Intern ('Dani', 234, 'email', 'school');

    expect(intern.name).toBe('Dani');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe('email');
    expect(intern.school).toBe('school');
})

test ("get intern's school", () => {
    const intern = new Intern ('Dani', 234, 'email', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining('school'))
});

test ("get intern's role", () => {
    const intern = new Intern ('Dani', 234, 'email', 'school');

    expect(intern.getRole()).toEqual(expect.stringContaining('intern'))
});

