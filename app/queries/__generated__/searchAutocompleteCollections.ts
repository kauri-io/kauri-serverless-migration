/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, SearchParameterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocompleteCollections
// ====================================================

export interface searchAutocompleteCollections_searchAutocomplete_content_resourceIdentifier {
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

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_ArticleDTO {
  __typename: "ArticleDTO" | "PublicUserDTO" | "CommunityDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource ID
   */
  id: string;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CollectionDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "ExternalLinkDTO" | "CommentDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
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

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User full name
   */
  publicUserName: string | null;
  /**
   * Username
   */
  username: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier | null;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
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

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  /**
   * Community ID
   */
  id: string;
  /**
   * Community Name
   */
  communityName: string;
  /**
   * Community avatar image URI
   */
  avatar: string | null;
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier | null;
}

export type searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner = searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO;

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId {
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

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  /**
   * List of resource identifiers
   */
  resourcesId: (searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId | null)[] | null;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier | null;
  /**
   * Collection ID
   */
  id: string;
  /**
   * Collection name
   */
  collecionName: string;
  /**
   * Collection description
   */
  description: string | null;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Last date updated
   */
  dateUpdated: any;
  /**
   *  Background image
   */
  background: string | null;
  /**
   * load the collection owner (user or community resource type)
   */
  owner: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner | null;
  /**
   * Check if the collection is already bookmarked by the current user
   */
  isBookmarked: boolean;
  /**
   * Sections of the collections
   */
  sections: (searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections | null)[] | null;
}

export type searchAutocompleteCollections_searchAutocomplete_content_resource = searchAutocompleteCollections_searchAutocomplete_content_resource_ArticleDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO;

export interface searchAutocompleteCollections_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resourceIdentifier | null;
  /**
   * load the resource associated to this search match
   */
  resource: searchAutocompleteCollections_searchAutocomplete_content_resource;
}

export interface searchAutocompleteCollections_searchAutocomplete {
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
   * Returns true if this is the last page.
   */
  isLast: boolean;
  /**
   * Returns the page content.
   */
  content: (searchAutocompleteCollections_searchAutocomplete_content | null)[];
}

export interface searchAutocompleteCollections {
  /**
   * Perform a parametrized global search query with autocomplete, pagination, sorting and filtering
   * This operation can be performed anonymously
   */
  searchAutocomplete: searchAutocompleteCollections_searchAutocomplete;
}

export interface searchAutocompleteCollectionsVariables {
  page?: number | null;
  size?: number | null;
  query?: string | null;
  filter?: SearchFilterInput | null;
  parameter?: SearchParameterInput | null;
}
