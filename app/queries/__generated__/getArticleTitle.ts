/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getArticleTitle
// ====================================================

export interface getArticleTitle_getArticle {
  __typename: "ArticleDTO";
  title: string ;
}

export interface getArticleTitle {
  getArticle: getArticleTitle_getArticle ;
}

export interface getArticleTitleVariables {
  id?: string ;
  version?: number ;
}
