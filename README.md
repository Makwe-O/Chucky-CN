# CHUCK NORRIS (Seez)

## Introduction

A React applications that enables users to get facts about Chuck Norris. It also provides RTL text functionality

## Table of Contents

[![Netlify Status](https://api.netlify.com/api/v1/badges/08d6e242-5bb9-440e-b36c-ac1d180d8815/deploy-status)](https://app.netlify.com/sites/seez-chucknorris/deploys)

1. <a href="#hosted-app">Link to Hosted App</a>
2. <a href="#workflow">Choices(Workflow)</a>
3. <a href="#application-features">Application Features</a>
4. <a href="#how-to-use">How To Use</a>
5. <a href="#author">Author</a>
6. <a href="#license">License</a>

## Link to Hosted App

- [App link](https://seez-chucknorris.netlify.app/)

## Workflow

- JavaScript Framework - [React Framework](https://reactjs.org/)
- CSS - [CSS 3](https://www.w3schools.com/css/default.asp) - Didnt use any preprocessor or framework because I felt the scope of the app did not require it. I did make use of the [Bem methodology](http://getbem.com/introduction/) for naming css classes
- State Management - [React Hooks](https://reactjs.org/docs/hooks-state.html) - Didnt use any external state management like Redux or MobX because I felt the scope of the app did not require it. Made use of useState hooks to store state in components
- Testing - [Cypress](https://www.cypress.io/) - Use Cypress for E2E tests
- Hosting - [Netlify](https://www.netlify.com/)

## Application Features

- Get random facts about the awesome Chuck Norris
- Toggle site view between LTR and RTL

## How To Use

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/Makwe-O/Chucky-CN.git

# Go into the repository
$ cd Chucky-CN

# Install dependencies
$ npm install


# Run the app
$ npm start

# Run test
$ npm run cypress
```

## Author

Mmakwe Onyeka

## License

MIT
