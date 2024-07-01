# NY Times Most Popular Articles

A React application that displays the most popular articles from the New York Times using their API. Styled with Bootstrap and includes basic testing with React Testing Library and Jest.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Components](#components)
- [Testing](#testing)
- [Environment Variables](#environment-variables)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/ny-times-most-popular-articles.git
    cd ny-times-most-popular-articles
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

## Usage

To start the development server:
```sh
npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production.
- `npm run cypress:open`: Launches the E2E test runner.

## Project Structure

```
src/
├── components/
│   ├── ArticleDetail.js
│   ├── ArticleList.js
│   └── ArticleList.test.js
├── containers/
│   └── ArticlesContainer.js
├── hooks/
│   └── useFetchArticles.js
├── services/
│   └── api.js
├── App.js
├── App.test.js
├── index.js
├── index.css
└── setupTests.js
```
