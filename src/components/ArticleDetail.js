import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

const ArticleDetail = ({ article }) => (
  <Card>
    <Card.Body>
      <Card.Title role="heading" aria-level="2">
        {article.title}
      </Card.Title>
      <Card.Text>{article.abstract}</Card.Text>
      <Card.Link href={article.url} target="_blank" rel="noopener noreferrer">
        Read More
      </Card.Link>
    </Card.Body>
  </Card>
);

ArticleDetail.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    abstract: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default ArticleDetail;
