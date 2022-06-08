// fs required?
const questions = [
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "describe",
      message: "Enter a single sentence description for your project."
    },
    {
        type: "input",
        name: "about",
        message: "What is your project and what is the scope of it?"
    },
    {
        type: "input",
        name: "install",
        message: "How do you install your project?"
    },
    {
        type: "input",
        name: "test",
        message: "Are there any testing protocols related to your project?"
    },
    {
        type: "input",
        name: "author",
        message: "Who worked on this project?"
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
        name: "URL",
        message: "What is the URL of the live site?"
    },
    {
        type: "input",
        name: "repository",
        message: "What is the URL to the Github repository?"
    },
    {
        type: "list",
        name: "license",
        message: "Please select the license you used for this project.",
        choices: [
          "Mozilla",
          "MIT",
          "Apache",
        ]
    }
  ];

module.exports = {
    questions: questions,
};