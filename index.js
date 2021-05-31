const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// const generatePage = require('./src/page-template');
// const { writeFile, copyFile } = require('./utils/generate-site');
const { generateManager, generateEngineer, generateIntern, generatePage } = require('./src/page-template');
let allEmployees = [];

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
            validate: answer => {
                const isNumber = answer.match(/^[1-9]\d/);
                if (isNumber) {
                    return true;
                }
                return "Please enter a number."
            }
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
        .then(managerData => {
            const { name, id, email, office } = managerData;
            const manager = new Manager(name, id, email, office);
            var newManager = generateManager(manager);
            allEmployees.push(newManager);
            console.log(manager);
        })
};

const promptTeamInfo = teamData => {
    console.log(`
    =================
    Add a Team Member
    =================
    `);
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
            name: 'email',
            message: "What is the employee's email address?"
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
    ]).then(employeeData => {
        let { name, id, role, email, github, school, addEmployee } = employeeData;
        if (role === 'Engineer') {
            let employee = new Engineer(name, id, email, github);
            var newEngineer = generateEngineer(employee);
            allEmployees.push(newEngineer);
        } else if (role === 'Intern') {
            let employee = new Intern(name, id, email, school);
            var newIntern = generateIntern(employee);
            allEmployees.push(newIntern);
        }
        if (addEmployee) {
            return promptTeamInfo();
        } else {
            var template = generatePage(allEmployees)
            fs.writeFile('./dist/index.html', template, err => {
                if (err) {
                    return console.log(err);
                }
                fs.copyFile('./src/style.css', './dist/style.css', err => {
                    if (err) {
                        return console.log(err);
                    }
                })
                console.log('Success!');
            })
        }
    })

};

managerData()
    .then(promptTeamInfo)
// .then(teamData => {
//     return generatePage(teamData);
// })
// .then(pageHTML => {
//     return writeFile(pageHTML);
// })
// .then(writeFileResponse => {
//     console.log(writeFileResponse);
//     return copyFile();
// })
// .then(copyFileResponse => {
//     console.log(copyFileResponse);
// })
// .catch(err => {
//     console.log(err);
// });