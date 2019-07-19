/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getTotalArticlesCount
// ====================================================

export interface getTotalArticlesCount_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getTotalArticlesCount {
  /**
   * Search articles with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchArticles: getTotalArticlesCount_searchArticles | null;
}

export interface getTotalArticlesCountVariables {
  category?: string | null;
}
