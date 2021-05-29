const Employee = require('./Employee');

class Manager extends Employee {
    //properties
    constructor(name, id, email, office) {
        super(name, id, email);

        this.office = office;
    }
    //methods
    getOffice() {
        return this.office
    }

    getRole() {
        return 'manager'
    }
}

module.exports = Manager;