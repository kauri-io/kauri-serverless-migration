/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ArticleFilterInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: totalArticlesCount
// ====================================================

export interface totalArticlesCount_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface totalArticlesCount {
  /**
   * Search articles with pagination, sorting and filters.
   * This operation can be performed anonymously
   */
  searchArticles: totalArticlesCount_searchArticles | null;
}

export interface totalArticlesCountVariables {
  filter?: ArticleFilterInput | null;
}
