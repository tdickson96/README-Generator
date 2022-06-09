// user questions
let questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name: "describe",
        message: "Enter a single sentence to describe your project."
    },
    {
        type: "input",
        name: "about",
        message: "What is your project about?"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "clone",
        message: "What is the link to clone your repository?"
    },
    {
        type: "list",
        name: "licenses",
        message: "Please select the license you used for this project.",
        choices: [
          "Apache",
          "Boost",
          "MIT",
          "Mozilla",
        ]
    },
    {
        type: "input",
        name: "test",
        message: "Are there any testing protocols related to this project?"
    },
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your contact email?"
    },
    {
        type: "input",
        name: "website",
        message: "What is the hyperlink to the website?"
    },
    {
        type: "input",
        name: "repository",
        message: "What is the hyperlink to the Github repository?"
    },
    {
        type: "input",
        name: "author",
        message: "Who worked on this project?"
    },
  ];

module.exports = {
    questions: questions,
};
