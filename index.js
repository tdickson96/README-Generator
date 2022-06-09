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
let licenceBadge = require("./utils/licenceBadges").badge;
// questions
let questions = require("./utils/questions").questions;
// promise to write file for README
let writeFileAsyncFunction = util.promisify(fs.writeFile);

// asynchronous function to run the markdownFunction
async function generateReadme() {
    try {
        // answers variable?
        let answers = await inquirer.prompt(questions);
        // licence badge
        answers.licences = licenceBadge(answers.licenceBadge);
        // README creator
        let readmeInfo = markdownFunction(answers);
        // write README file
        await writeFileAsyncFunction("Created README.md", readmeInfo);
    // catch and throw errors
    } catch (err) {
        throw err;
    }
}

// run the async
generateReadme();
