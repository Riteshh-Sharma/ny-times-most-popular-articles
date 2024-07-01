import React from 'react';
import ArticlesContainer from './containers/ArticlesContainer';
import { Container } from 'react-bootstrap';

const App = () => (
  <Container>
    <h1 className="my-4">NY Times Most Popular Articles</h1>
    <ArticlesContainer />
  </Container>
);

export default App;
