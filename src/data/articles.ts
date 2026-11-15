/**
 * src/data/articles.ts
 * 
 * Blog articles data and configuration
 */

import { articleMetadata, articleCategories as categories } from './articlesMetadata';
import { getArticleContent } from './articleContent';
import type { Article, ArticleCategory } from './articlesMetadata';

// Combine metadata with content
export const articles: Article[] = articleMetadata.map(meta => ({
  ...meta,
  content: getArticleContent(meta.id),
}));

export type { Article, ArticleCategory };
export const articleCategories: ArticleCategory[] = categories;

/**
 * Get featured articles (max 1 per category)
 */
export const getFeaturedArticles = () => 
  articles.filter((a) => a.featured);

/**
 * Get article by ID
 */
export const getArticleById = (id: string) => 
  articles.find((a) => a.id === id);

/**
 * Get articles by category
 */
export const getArticlesByCategory = (category: ArticleCategory) => 
  articles.filter((a) => a.category === category);

/**
 * Get all articles
 */
export const getAllArticles = () => articles;

/**
 * Get related articles (excluding current article)
 */
export const getRelatedArticles = (articleId: string, limit: number = 3) => {
  const article = getArticleById(articleId);
  if (!article) return [];
  
  return article.relatedArticles
    .map(id => getArticleById(id))
    .filter(Boolean)
    .slice(0, limit) as Article[];
};

/**
 * Search articles by keyword
 */
export const searchArticles = (query: string) => {
  const q = query.toLowerCase();
  return articles.filter(a => 
    a.title.toLowerCase().includes(q) ||
    a.excerpt.toLowerCase().includes(q) ||
    a.category.toLowerCase().includes(q)
  );
};
