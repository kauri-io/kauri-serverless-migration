/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocomplete
// ====================================================

export interface searchAutocomplete_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  totalElements: any;
  totalPages: number;
  totalElementsBreakdown: any ;
}

export interface searchAutocomplete {
  searchAutocomplete: searchAutocomplete_searchAutocomplete ;
}

export interface searchAutocompleteVariables {
  page?: number ;
  size?: number ;
  query?: string ;
  filter?: SearchFilterInput ;
}
