/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: searchTags
// ====================================================

export interface searchTags_searchTags_content {
  __typename: "TagResultDTO";
  tag: string ;
  count: any ;
  score: number ;
}

export interface searchTags_searchTags {
  __typename: "Page_TagResultDTO";
  totalElements: any;
  totalPages: number;
  content: (searchTags_searchTags_content )[] ;
}

export interface searchTags {
  searchTags: searchTags_searchTags ;
}

export interface searchTagsVariables {
  page?: number ;
  size?: number ;
  query?: string ;
}
