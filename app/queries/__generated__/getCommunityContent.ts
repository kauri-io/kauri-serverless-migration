/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityResourceFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityContent
// ====================================================

export interface getCommunityContent_getCommunityContent_content_resource_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner = getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunityContent_getCommunityContent_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCommunityContent_getCommunityContent_content_resource_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_voteResult ;
  author: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_author ;
  owner: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_owner ;
  comments: getCommunityContent_getCommunityContent_content_resource_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_PublicUserDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner_CommunityDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources = getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_CommunityDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityContent_getCommunityContent_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_owner ;
  sections: (getCommunityContent_getCommunityContent_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: getCommunityContent_getCommunityContent_content_resource_CollectionDTO_resourceIdentifier ;
}

export type getCommunityContent_getCommunityContent_content_resource = getCommunityContent_getCommunityContent_content_resource_CommunityDTO | getCommunityContent_getCommunityContent_content_resource_ArticleDTO | getCommunityContent_getCommunityContent_content_resource_CollectionDTO;

export interface getCommunityContent_getCommunityContent_content {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  resource: getCommunityContent_getCommunityContent_content_resource ;
}

export interface getCommunityContent_getCommunityContent {
  __typename: "ResponsePage_ResourceIdentifier";
  content: (getCommunityContent_getCommunityContent_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunityContent {
  getCommunityContent: getCommunityContent_getCommunityContent ;
}

export interface getCommunityContentVariables {
  id?: string ;
  page?: number ;
  size?: number ;
  filter?: CommunityResourceFilterInput ;
}
