/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticleTitle
// ====================================================

export interface getArticleTitle_getArticle {
  __typename: "ArticleDTO";
  /**
   * Title of article
   */
  title: string;
}

export interface getArticleTitle {
  /**
   * Get an article by id.
   * - version can optionally be used find a specific version, if empty latest version is retrieved.
   * - published can optionally be used to retrieve the latest version (regardless
   * any status if false) or the latest published version (if true).
   * This operation can be performed anonymously
   */
  getArticle: getArticleTitle_getArticle;
}

export interface getArticleTitleVariables {
  id: string;
  version?: number | null;
}
