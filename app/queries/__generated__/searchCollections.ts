/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CollectionFilterInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchCollections
// ====================================================

export interface searchCollections_searchCollections_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchCollections_searchCollections_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchCollections_searchCollections_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchCollections_searchCollections_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchCollections_searchCollections_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchCollections_searchCollections_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchCollections_searchCollections_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchCollections_searchCollections_content_owner = searchCollections_searchCollections_content_owner_ArticleDTO | searchCollections_searchCollections_content_owner_PublicUserDTO | searchCollections_searchCollections_content_owner_CommunityDTO;

export interface searchCollections_searchCollections_content_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchCollections_searchCollections_content_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchCollections_searchCollections_content_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type searchCollections_searchCollections_content_sections_resources = searchCollections_searchCollections_content_sections_resources_CommunityDTO | searchCollections_searchCollections_content_sections_resources_ArticleDTO;

export interface searchCollections_searchCollections_content_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (searchCollections_searchCollections_content_sections_resourcesId )[] ;
  resources: (searchCollections_searchCollections_content_sections_resources )[] ;
}

export interface searchCollections_searchCollections_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface searchCollections_searchCollections_content {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: searchCollections_searchCollections_content_owner ;
  sections: (searchCollections_searchCollections_content_sections )[] ;
  resourceIdentifier: searchCollections_searchCollections_content_resourceIdentifier ;
}

export interface searchCollections_searchCollections {
  __typename: "ResponsePage_CollectionDTO";
  content: (searchCollections_searchCollections_content )[] ;
}

export interface searchCollections {
  searchCollections: searchCollections_searchCollections ;
}

export interface searchCollectionsVariables {
  filter?: CollectionFilterInput ;
}
