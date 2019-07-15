/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCollection
// ====================================================

export interface getCollection_getCollection_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollection_getCollection_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCollection_getCollection_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_owner_CommunityDTO_resourceIdentifier ;
}

export type getCollection_getCollection_owner = getCollection_getCollection_owner_ArticleDTO | getCollection_getCollection_owner_PublicUserDTO | getCollection_getCollection_owner_CommunityDTO;

export interface getCollection_getCollection_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_sections_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_sections_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCollection_getCollection_sections_resources_ArticleDTO_owner = getCollection_getCollection_sections_resources_ArticleDTO_owner_ArticleDTO | getCollection_getCollection_sections_resources_ArticleDTO_owner_PublicUserDTO | getCollection_getCollection_sections_resources_ArticleDTO_owner_CommunityDTO;

export interface getCollection_getCollection_sections_resources_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCollection_getCollection_sections_resources_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCollection_getCollection_sections_resources_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCollection_getCollection_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCollection_getCollection_sections_resources_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCollection_getCollection_sections_resources_ArticleDTO_resourceIdentifier ;
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
  voteResult: getCollection_getCollection_sections_resources_ArticleDTO_voteResult ;
  author: getCollection_getCollection_sections_resources_ArticleDTO_author ;
  owner: getCollection_getCollection_sections_resources_ArticleDTO_owner ;
  comments: getCollection_getCollection_sections_resources_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_sections_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCollection_getCollection_sections_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCollection_getCollection_sections_resources_CollectionDTO_owner = getCollection_getCollection_sections_resources_CollectionDTO_owner_ArticleDTO | getCollection_getCollection_sections_resources_CollectionDTO_owner_PublicUserDTO | getCollection_getCollection_sections_resources_CollectionDTO_owner_CommunityDTO;

export interface getCollection_getCollection_sections_resources_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCollection_getCollection_sections_resources_CollectionDTO_sections_resources = getCollection_getCollection_sections_resources_CollectionDTO_sections_resources_CommunityDTO | getCollection_getCollection_sections_resources_CollectionDTO_sections_resources_ArticleDTO;

export interface getCollection_getCollection_sections_resources_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCollection_getCollection_sections_resources_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCollection_getCollection_sections_resources_CollectionDTO_sections_resources )[] ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCollection_getCollection_sections_resources_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCollection_getCollection_sections_resources_CollectionDTO_owner ;
  sections: (getCollection_getCollection_sections_resources_CollectionDTO_sections )[] ;
  resourceIdentifier: getCollection_getCollection_sections_resources_CollectionDTO_resourceIdentifier ;
}

export type getCollection_getCollection_sections_resources = getCollection_getCollection_sections_resources_CommunityDTO | getCollection_getCollection_sections_resources_ArticleDTO | getCollection_getCollection_sections_resources_CollectionDTO;

export interface getCollection_getCollection_sections {
  __typename: "SectionDTO";
  name: string ;
  description: string ;
  resources: (getCollection_getCollection_sections_resources )[] ;
}

export interface getCollection_getCollection_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCollection_getCollection {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateCreated: any ;
  owner: getCollection_getCollection_owner ;
  sections: (getCollection_getCollection_sections )[] ;
  resourceIdentifier: getCollection_getCollection_resourceIdentifier ;
}

export interface getCollection {
  getCollection: getCollection_getCollection ;
}

export interface getCollectionVariables {
  id?: string ;
}
