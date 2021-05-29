const Employee = require('../lib/Employee');

test ('create employee object', () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.name).toBe('Dani');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('email');
});

test ("gets employee's name", () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.getName()).toEqual(expect.stringContaining('Dani'));
});

test('get employee id', () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('get employee email', () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.getEmail()).toEqual(expect.stringContaining('email'));
});

test('get employee role', () => {
    const employee = new Employee ('Dani', 234, 'email');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});