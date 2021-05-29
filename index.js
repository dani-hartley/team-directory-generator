const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHtml = require('./src/generateHtml');
let allEmployees= [];

const managerData = () => {
    console.log(`
    =================
    Add Manager Info
    =================
    `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log("Please enter the manager's name.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?",
            // validate: input => {
            //     console.log(typeof input);
            //     if (typeof input !== 'number') {
            //         console.log("Please enter a number");
            //         return false;
            //     } else {
            //         return true;
            //     }
            // }
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'office',
            message: "What is the manager's office number?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    return false;
                }
            }
        }

    ])
    .then((data) => {
        const {name, id, email, office} = data;
        const manager = new Manager(name, id, email, office);
        allEmployees.push(manager);
        console.log(allEmployees);
    })
};

const promptTeamInfo = teamData => {
    console.log(`
    =================
    Add a Team Member
    =================
    `);
    //if (!teamData.members) {
      //  teamData.members = [];
    //}
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "What is the employee's role?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the employee's name?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input', 
            name: 'id',
            message: "What is the employee's id?",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
            when: (input) => input.role === 'Engineer',
        },
        {
            type: 'input', 
            name: 'school',
            message: "What is the intern's school?",
            when: (input) => input.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'addEmployee',
            message: 'Would you like to add another team member?',
            default: false
        }
    ]).then((employeeData) => {
        let {name, id, role, email, github, school, addEmployee} = employeeData;
        if (role === 'Engineer') {
            const engineer = new Engineer(name, id, email, github);
            allEmployees.push(engineer)
        } else if (role === 'Intern') {
            const intern = new Intern(name, id, email, school);
            allEmployees.push(intern);
        }
        if (addEmployee) {
            return promptTeamInfo();
        } else {
           return teamData;
        }
    });
};

managerData()
.then(promptTeamInfo)
