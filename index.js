// variables
// file system
let fs = require("fs");
// inquirer
let inquirer = require("inquirer");
// utilities
let util = require("util");
const { markdownFunction } = require("./utils/markdown");
// markdown
let markdown = require("./utils/markdown");
// licences
let licenceBadge = require("./utils/licenceBadges").licenceBadge;
// questions
let questions = require("./utils/questions").questions;
// promise to write file for README
let writeFileAsyncFunction = util.promisify(fs.writeFile);

// asynchronous function to run the markdownFunction
// Main idea of async function is to let the rest of the code to run while this function is running
// Synchronous needs to finish before any other code can run (writing a file in Word)
// Async needs to run other code before it needs to finish (do this at the end but before the promisify)
async function generateReadme() {
    try {
        // answers variable?
        let answers = await inquirer.prompt(questions);
        // licence 
        answers.licences = licenceBadge(answers.licenceBadge);
        // licence badge
        console.log(answers.licences);
        // README creator
        let readmeInfo = markdownFunction(answers);
        // write README file
        await writeFileAsyncFunction("Created README.md", readmeInfo);
    // catch and throw errors
    } catch (err) {
        throw err;
    }
}

// run the async fxn
generateReadme();
