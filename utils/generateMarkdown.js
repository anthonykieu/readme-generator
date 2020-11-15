// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Table of Contents
  * [Description] (#description)
  * [Installation] (#installation)
  * [Usage] (#usage)
  * [License] (#license)
  * [Contributing] (#contributing)
  * [Questions] (#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${data.license}

  ## Questions
  If you would like further information, you can go to my Github profile at ${data.github}.
  
  You can also reach me at my email at ${data.email}.
  
`;
}

module.exports = generateMarkdown;
