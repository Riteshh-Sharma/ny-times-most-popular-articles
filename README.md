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

## Components

- **App.js**: Main component that includes the heading and `ArticlesContainer`.
- **ArticlesContainer.js**: Fetches and displays articles using `ArticleList` and `ArticleDetail`.
- **ArticleList.js**: Renders a list of article titles.
- **ArticleDetail.js**: Displays details of the selected article.

## Testing

### Setup

1. Ensure `@testing-library/react` and `@testing-library/jest-dom` are installed:
    ```sh
    npm install --save-dev @testing-library/react @testing-library/jest-dom
    ```

2. Create `setupTests.js` in `src`:
    ```javascript
    // src/setupTests.js
    import '@testing-library/jest-dom/extend-expect';
    ```

### Example Test

```javascript
// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NY Times Most Popular Articles heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/NY Times Most Popular Articles/i);
  expect(headingElement).toBeInTheDocument();
});
```

## Environment Variables

1. Create a `.env` file in the root directory with your NY Times API key:
    ```
    REACT_APP_NYT_API_KEY=your_api_key_here
    ```

2. Use the API key in `src/services/api.js`:
    ```javascript
    // src/services/api.js
    import axios from 'axios';

    const API_KEY = process.env.REACT_APP_NYT_API_KEY;
    const BASE_URL = `https://api.nytimes.com/svc/mostpopular/v2/viewed`;

    export const fetchArticles = (period = 1) => {
      return axios.get(`${BASE_URL}/${period}.json?api-key=${API_KEY}`);
    };
    ```

---

