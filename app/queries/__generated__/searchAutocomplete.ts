/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocomplete
// ====================================================

export interface searchAutocomplete_searchAutocomplete_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource type
   */
  type: ResourceTypeInput;
}

export interface searchAutocomplete_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchAutocomplete_searchAutocomplete_content_resourceIdentifier | null;
  /**
   * Resource tags
   */
  tags: (string | null)[] | null;
  /**
   * Resource name
   */
  name: string;
  /**
   * Resource description
   */
  description: string | null;
  /**
   * Search score
   */
  score: number;
}

export interface searchAutocomplete_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements per type.
   */
  totalElementsBreakdown: any | null;
  /**
   * Returns the page content.
   */
  content: (searchAutocomplete_searchAutocomplete_content | null)[];
}

export interface searchAutocomplete {
  /**
   * Perform a parametrized global search query with autocomplete, pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchAutocomplete: searchAutocomplete_searchAutocomplete;
}

export interface searchAutocompleteVariables {
  page?: number | null;
  size?: number | null;
  query?: string | null;
  filter?: SearchFilterInput | null;
}
