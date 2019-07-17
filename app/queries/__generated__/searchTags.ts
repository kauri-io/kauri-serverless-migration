/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchTags
// ====================================================

export interface searchTags_searchTags_content {
  __typename: "TagResultDTO";
  /**
   * Tag name
   */
  tag: string;
  /**
   * Tag occurrence
   */
  count: any;
  /**
   * Tag score
   */
  score: number | null;
}

export interface searchTags_searchTags {
  __typename: "ResponsePage_TagResultDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Returns the page content.
   */
  content: (searchTags_searchTags_content | null)[];
}

export interface searchTags {
  /**
   * Search tags
   * This operation can be performed anonymously
   */
  searchTags: searchTags_searchTags | null;
}

export interface searchTagsVariables {
  page?: number | null;
  size?: number | null;
  query?: string | null;
}
