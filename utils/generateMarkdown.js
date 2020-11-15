// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${data.license.badge}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license.text}</br>
  ${data.license.url}

  ## Questions
  If you would like further information, you can go to my Github profile at ${data.github}.
  
  You can also reach me at my email at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
