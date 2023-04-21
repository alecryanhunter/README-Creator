// USER STORY
// ==============================
// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project

// ACCEPTANCE CRITERIA
// ==============================
// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// README has sections:
    // Project Title
        // 1st Heading of the README
    // Description
        // Basic text input that auto-fills section
    // Table of Contents
        // Links to all sections in the README
    // Installation
        // Basic text input that auto-fills section
    // Usage
        // Basic text input that auto-fills section
    // License
        // Choice dropdown, adds license badge and info
    // Contributing
        // Basic text input that auto-fills section
    // Tests
        // Basic text input that auto-fills section
    // Questions
        // Enter Github username to generate contact info

const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
        // Project Title
        // title
        name: "title",
        type: "input",
        message: "Enter your project's title.",
    },
    {
        // Project Description
        // desc
        name: "desc",
        type: "input",
        message: "Enter a description for your project.",
        
    },
    {
        // Installation Instructions
        // install
        name: "install",
        type: "input",
        message: "Enter the installation instructions for your project.",
    },
    {
        // Usage Information
        // usage
        name: "usage",
        type: "input",
        message: "Enter the usage information for your project.",
    },
    {
        // Contribution Information
        // contribute
        name: "contribute",
        type: "input",
        message: "Enter the contribution information for your project.",
    },
    {
        // Tests Information
        // tests
        name: "tests",
        type: "input",
        message: "Enter the testing information for your project.",
    },
    {
        // License Choice
        // license
        name: "license",
        type: "list",
        message: "Choose which license you are using.",
        choices: ["MIT","GPLv2","Apache"]
    },
    {
        // Github Username
        // username
        name: "username",
        type: "input",
        message: "Enter your github username.",
    },
    {
        // Email Address
        // email
        name: "email",
        type: "input",
        message: "Enter your email address.",
    },
]).then((answers) => {

    console.log(answers);

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
    fs.writeFile("./output/README_sample.md",template, (error) => {
        if (error) {
            console.log(error);
        } else {
            console.log("README successfully generated!");
        }
    })
})