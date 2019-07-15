/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CollectionFilterInput, DirectionInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCollectionsForUser
// ====================================================

export interface getCollectionsForUser_searchCollections_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollectionsForUser_searchCollections_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCollectionsForUser_searchCollections_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollectionsForUser_searchCollections_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_owner_CommunityDTO_resourceIdentifier ;
}

export type getCollectionsForUser_searchCollections_content_owner = getCollectionsForUser_searchCollections_content_owner_ArticleDTO | getCollectionsForUser_searchCollections_content_owner_PublicUserDTO | getCollectionsForUser_searchCollections_content_owner_CommunityDTO;

export interface getCollectionsForUser_searchCollections_content_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCollectionsForUser_searchCollections_content_sections_resources = getCollectionsForUser_searchCollections_content_sections_resources_CommunityDTO | getCollectionsForUser_searchCollections_content_sections_resources_ArticleDTO;

export interface getCollectionsForUser_searchCollections_content_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCollectionsForUser_searchCollections_content_sections_resourcesId )[] ;
  resources: (getCollectionsForUser_searchCollections_content_sections_resources )[] ;
}

export interface getCollectionsForUser_searchCollections_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCollectionsForUser_searchCollections_content {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCollectionsForUser_searchCollections_content_owner ;
  sections: (getCollectionsForUser_searchCollections_content_sections )[] ;
  resourceIdentifier: getCollectionsForUser_searchCollections_content_resourceIdentifier ;
}

export interface getCollectionsForUser_searchCollections {
  __typename: "ResponsePage_CollectionDTO";
  totalElements: any;
  content: (getCollectionsForUser_searchCollections_content )[] ;
  isLast: boolean;
}

export interface getCollectionsForUser {
  searchCollections: getCollectionsForUser_searchCollections ;
}

export interface getCollectionsForUserVariables {
  filter?: CollectionFilterInput ;
  size?: number ;
  page?: number ;
  sort?: string ;
  dir?: DirectionInput ;
}
