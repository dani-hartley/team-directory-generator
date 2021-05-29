const Employee = require ('./Employee');

class Engineer extends Employee {
    //properties
    constructor(name, id, email, github) {
        super(name, id, email);
        console.log(name);
        this.github = github;
        
    }
    // methods
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer'
    }
}

module.exports = Engineer;