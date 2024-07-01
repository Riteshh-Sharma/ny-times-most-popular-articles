import React, { useState } from 'react';
import useFetchArticles from '../hooks/useFetchArticles';
import ArticleList from '../components/ArticleList';
import ArticleDetail from '../components/ArticleDetail';
import { Container, Row, Col, Alert } from 'react-bootstrap';

const ArticlesContainer = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const { articles, loading, error } = useFetchArticles(1);

  if (loading) return <Alert variant="info">Loading...</Alert>;
  if (error) return <Alert variant="danger">Error: {error.message}</Alert>;

  return (
    <Container>
      <Row>
        <Col md={4}>
          <ArticleList articles={articles} onArticleSelect={setSelectedArticle} />
        </Col>
        <Col md={8}>
          {selectedArticle && <ArticleDetail article={selectedArticle} />}
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlesContainer;
