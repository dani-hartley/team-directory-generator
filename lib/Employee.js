class Employee {
    constructor (name, id, email) {
    //Properties
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //methods
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;