const inquirer = require("inquirer")
const fs = require("fs")

// Asks the questions for generating the README.
inquirer.prompt([
    {
        // Project Title
        name: "title",
        type: "input",
        message: "Enter your project's title.",
    },
    {
        // Project Description
        name: "desc",
        type: "input",
        message: "Enter a description for your project.",
        
    },
    {
        // Installation Instructions
        name: "install",
        type: "input",
        message: "Enter the installation instructions for your project.",
    },
    {
        // Usage Information
        name: "usage",
        type: "input",
        message: "Enter the usage information for your project.",
    },
    {
        // Contribution Information
        name: "contribute",
        type: "input",
        message: "Enter the contribution information for your project.",
    },
    {
        // Tests Information
        name: "tests",
        type: "input",
        message: "Enter the testing information for your project.",
    },
    {
        // License Choice
        name: "license",
        type: "list",
        message: "Choose which license you are using.",
        choices: ["MIT","GPLv2","Apache"]
    },
    {
        // Github Username
        name: "username",
        type: "input",
        message: "Enter your github username.",
    },
    {
        // Email Address
        name: "email",
        type: "input",
        message: "Enter your email address.",
    }
]).then((answers) => {

    // This switch statement determines the text for the license section.
    let licenseText
    switch (answers.license){
        case "MIT":
            licenseText = "Using the MIT License."
            break;
        case "GPLv2":
            licenseText = "Using the GPLv2 License."
            break;            
        case "Apache":
            licenseText = "Using the Apache License."
            break;            
    }
    
    // Store finalized Markdown template here
    const template = `
# ${answers.title}
![License Badge](https://img.shields.io/badge/license-${answers.license}-green)

## Description
${answers.desc}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.install}

## Usage
${answers.usage}

## License
${licenseText}

## Contributing
${answers.contribute}

## Tests
${answers.tests}

## Questions
You can contact me at me [Github Profile](https://github.com/${answers.username}) or my [email](mailto:${answers.email}) for further questions.
`

    // This writes the answers to the README based on the template and the inputs.
    fs.writeFile("./output/README.md",template, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("README successfully generated!");
        }
    })
})