# SportSee - Metric analytics dashboard

This single page application displays a user's monitored physiological metrics, objective scores and activity sessions. It is the 12th project in the OpenClassrooms Front-End curriculum.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
and uses

- React (17.0.2)
- Recharts (2.1.8)
- Sass (1.47.0)

We recommend to use [Visual Studio Code](https://code.visualstudio.com/) as an IDE (integrated development environment) to edit and launch this project and use the lastest version of [Chrome](https://www.google.fr/chrome/) browser with the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/) plugin

## Prerequisites

- [NodeJS (version 16+)](https://nodejs.org/en/download/)

## Available Scripts

In the project directory, you can run:

### `npm install`

Install each dependencies to launch this project

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
It will also display any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Install API

You can clone the backend API in your folder with this git command  
`$ git clone https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard.git .`

_Read the repository documentation on readme to launch API with Docker or NPM_

## Interacting with the application

- Clicking on the 'Accueil' button will redirect you to the homepage in which you may switch the user data displayed./
- At the moment, only 2 user data are mocked within the API (IDs 12 | 18), clicking on the first or second link will display the relevant user ID in the page URL
- The useFetch() function will then display the content thanks to the ID present in the URL
