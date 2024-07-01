import React from "react";
import PropTypes from "prop-types";
import { ListGroup } from "react-bootstrap";

const ArticleList = ({ articles, onArticleSelect }) => (
  <ListGroup>
    {articles.map((article) => (
      <ListGroup.Item
        key={article.id}
        onClick={() => onArticleSelect(article)}
        role="listitem"
        action
      >
        {article.title}
      </ListGroup.Item>
    ))}
  </ListGroup>
);

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onArticleSelect: PropTypes.func.isRequired,
};

export default ArticleList;
