/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchResultsAutocomplete
// ====================================================

export interface searchResultsAutocomplete_searchAutocomplete_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner = searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
  title: string ;
  description: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_voteResult ;
  owner: searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO_owner ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner = searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_owner ;
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
}

export type searchResultsAutocomplete_searchAutocomplete_content_resource = searchResultsAutocomplete_searchAutocomplete_content_resource_PublicUserDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_ArticleDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CollectionDTO | searchResultsAutocomplete_searchAutocomplete_content_resource_CommunityDTO;

export interface searchResultsAutocomplete_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchResultsAutocomplete_searchAutocomplete_content_resourceIdentifier ;
  resource: searchResultsAutocomplete_searchAutocomplete_content_resource ;
}

export interface searchResultsAutocomplete_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  totalElements: any;
  totalPages: number;
  totalElementsBreakdown: any ;
  content: (searchResultsAutocomplete_searchAutocomplete_content )[] ;
}

export interface searchResultsAutocomplete {
  searchAutocomplete: searchResultsAutocomplete_searchAutocomplete ;
}

export interface searchResultsAutocompleteVariables {
  page?: number ;
  size?: number ;
  query?: string ;
  filter?: SearchFilterInput ;
}
