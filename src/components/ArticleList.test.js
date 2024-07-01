import React from 'react';
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import ArticleList from './ArticleList';

test('renders articles and handles click', () => {
  const articles = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' }
  ];
  const onArticleSelect = jest.fn();
  render(<ArticleList articles={articles} onArticleSelect={onArticleSelect} />);

  articles.forEach(article => {
    const articleElement = screen.getByText(article.title);
    expect(articleElement).toBeInTheDocument();
    fireEvent.click(articleElement);
  });

  expect(onArticleSelect).toHaveBeenCalledTimes(articles.length);
});

