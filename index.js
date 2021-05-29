const inquirer = require('inquirer');
const fs = require('fs');
const generateHtml = require('./src/generateHtml');

const managerData = managerInput => {
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
            validate: input => {
                if (typeof input !== 'number') {
                    console.log("Please enter a number");
                    return false;
                } else {
                    return true;
                }
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
                    if (input) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        }

    ]);
};

const promptTeamInfo = teamData => {
    console.log(`
    ================
    Add Team Members
    ================
    `);
    if (!teamData)
}