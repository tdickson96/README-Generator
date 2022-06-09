// https://www.markdownguide.org/basic-syntax/
function markdownFunction (data) {
    return `

# ${data.title}

    ${data.describe}

    ${data.licenceBadge}

    [Find the link to live website here:](${data.website})

---
## Table of Contents

1. [About!](#about)
    a. [Story](#story)
    b. [Criteria](#criteria)
    c. [Technology](#technology)
2. [Installation](#installation)
3. [Licence](#licence)
4. [Contribution](#contribution)
5. [Tests](#tests)
6. [Authors](#authors)

---
## About 

    ${data.about}

---
## Story

---
## Criteria

---
## Technology

---
## Installation

    ${data.installation}

    Clone the repository:

        git clone ${data.clone}

---
## Licence

    Licence used: ${data.licence}

---
## Contribution

    If you would like to learn how to assist or contribute to this project:
        - Fork the repository
        - Create a feature branch (git checkout -b NAME)
        - Commit your new feature (git commit -m "feature")
        - Push your feature branch (git push)
        - Create a new pull request

---
## Tests

    ${data.test}

---
## Authors

    ${data.author}

---
## Contact

> GitHub username: ${data.userName}

> Contact email: ${data.email}

`;
}

module.exports = {
    markdownFunction: markdownFunction,
};
