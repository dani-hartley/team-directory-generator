const Employee = require('../lib/Employee');

test ('create employee object', () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.name).toBe('Dani');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
});

