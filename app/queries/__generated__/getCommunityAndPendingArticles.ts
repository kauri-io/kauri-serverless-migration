/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityStatusInput, ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunityAndPendingArticles
// ====================================================

export interface getCommunityAndPendingArticles_getCommunity_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner = getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  description: string ;
  dateCreated: any ;
  datePublished: any ;
  author: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_author ;
  owner: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_owner ;
  status: ArticleStatusInput ;
  attributes: any ;
  voteResult: getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO_voteResult ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner = getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_sections {
  __typename: "SectionDTO";
  name: string ;
  description: string ;
  resourcesId: (getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId )[] ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  background: string ;
  dateUpdated: any ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier ;
  owner: getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_owner ;
  sections: (getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO_sections )[] ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_homepage_resources_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_homepage_resources = getCommunityAndPendingArticles_getCommunity_homepage_resources_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_ArticleDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_CollectionDTO | getCommunityAndPendingArticles_getCommunity_homepage_resources_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_homepage {
  __typename: "SectionDTO";
  name: string ;
  description: string ;
  resourcesId: (getCommunityAndPendingArticles_getCommunity_homepage_resourcesId )[] ;
  resources: (getCommunityAndPendingArticles_getCommunity_homepage_resources )[] ;
}

export interface getCommunityAndPendingArticles_getCommunity_members {
  __typename: "CommunityMemberDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  role: CommunityPermissionInput ;
  status: UserStatusInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner = getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_resourceIdentifier ;
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
  voteResult: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_voteResult ;
  author: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_author ;
  owner: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_owner ;
  comments: getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner = getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources = getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources_CommunityDTO | getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections_resources )[] ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_owner ;
  sections: (getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_sections )[] ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_approved = getCommunityAndPendingArticles_getCommunity_approved_CommunityDTO | getCommunityAndPendingArticles_getCommunity_approved_ArticleDTO | getCommunityAndPendingArticles_getCommunity_approved_CollectionDTO;

export interface getCommunityAndPendingArticles_getCommunity_pending_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner = getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_resourceIdentifier ;
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
  voteResult: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_voteResult ;
  author: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_author ;
  owner: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_owner ;
  comments: getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner = getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_ArticleDTO | getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_PublicUserDTO | getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources = getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources_CommunityDTO | getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections_resources )[] ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_owner ;
  sections: (getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_sections )[] ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_getCommunity_pending = getCommunityAndPendingArticles_getCommunity_pending_CommunityDTO | getCommunityAndPendingArticles_getCommunity_pending_ArticleDTO | getCommunityAndPendingArticles_getCommunity_pending_CollectionDTO;

export interface getCommunityAndPendingArticles_getCommunity {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: getCommunityAndPendingArticles_getCommunity_creator ;
  name: string ;
  description: string ;
  status: CommunityStatusInput ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  resourceIdentifier: getCommunityAndPendingArticles_getCommunity_resourceIdentifier ;
  attributes: any ;
  homepage: (getCommunityAndPendingArticles_getCommunity_homepage )[] ;
  members: (getCommunityAndPendingArticles_getCommunity_members )[] ;
  approvedId: (getCommunityAndPendingArticles_getCommunity_approvedId )[] ;
  pendingId: (getCommunityAndPendingArticles_getCommunity_pendingId )[] ;
  approved: (getCommunityAndPendingArticles_getCommunity_approved )[] ;
  pending: (getCommunityAndPendingArticles_getCommunity_pending )[] ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunityAndPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunityAndPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunityAndPendingArticles_searchArticles_content_owner = getCommunityAndPendingArticles_searchArticles_content_owner_ArticleDTO | getCommunityAndPendingArticles_searchArticles_content_owner_PublicUserDTO | getCommunityAndPendingArticles_searchArticles_content_owner_CommunityDTO;

export interface getCommunityAndPendingArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  posted: any ;
  author: getCommunityAndPendingArticles_searchArticles_content_comments_content_author ;
  body: string ;
}

export interface getCommunityAndPendingArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunityAndPendingArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunityAndPendingArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
  version: number ;
}

export interface getCommunityAndPendingArticles_searchArticles_content {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
  title: string ;
  description: string ;
  tags: (string )[] ;
  dateCreated: any ;
  datePublished: any ;
  author: getCommunityAndPendingArticles_searchArticles_content_author ;
  owner: getCommunityAndPendingArticles_searchArticles_content_owner ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  voteResult: getCommunityAndPendingArticles_searchArticles_content_voteResult ;
  comments: getCommunityAndPendingArticles_searchArticles_content_comments ;
  resourceIdentifier: getCommunityAndPendingArticles_searchArticles_content_resourceIdentifier ;
}

export interface getCommunityAndPendingArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  totalElements: any;
  isLast: boolean;
  content: (getCommunityAndPendingArticles_searchArticles_content )[] ;
}

export interface getCommunityAndPendingArticles {
  getCommunity: getCommunityAndPendingArticles_getCommunity ;
  searchArticles: getCommunityAndPendingArticles_searchArticles ;
}

export interface getCommunityAndPendingArticlesVariables {
  id?: string ;
  size?: number ;
  page?: number ;
}
