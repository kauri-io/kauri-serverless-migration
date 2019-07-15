/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, SearchParameterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocompleteCollections
// ====================================================

export interface searchAutocompleteCollections_searchAutocomplete_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner = searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO;

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections_resourcesId )[] ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_owner ;
  sections: (searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier ;
}

export type searchAutocompleteCollections_searchAutocomplete_content_resource = searchAutocompleteCollections_searchAutocomplete_content_resource_CommunityDTO | searchAutocompleteCollections_searchAutocomplete_content_resource_CollectionDTO;

export interface searchAutocompleteCollections_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchAutocompleteCollections_searchAutocomplete_content_resourceIdentifier ;
  resource: searchAutocompleteCollections_searchAutocomplete_content_resource ;
}

export interface searchAutocompleteCollections_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  totalElements: any;
  totalPages: number;
  isLast: boolean;
  content: (searchAutocompleteCollections_searchAutocomplete_content )[] ;
}

export interface searchAutocompleteCollections {
  searchAutocomplete: searchAutocompleteCollections_searchAutocomplete ;
}

export interface searchAutocompleteCollectionsVariables {
  page?: number ;
  size?: number ;
  query?: string ;
  filter?: SearchFilterInput ;
  parameter?: SearchParameterInput ;
}
