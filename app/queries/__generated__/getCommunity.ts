/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityStatusInput, ResourceTypeInput, ArticleStatusInput, CommunityPermissionInput, UserStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getCommunity
// ====================================================

export interface getCommunity_getCommunity_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface getCommunity_getCommunity_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_homepage_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_homepage_resources_ArticleDTO_owner = getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface getCommunity_getCommunity_homepage_resources_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_ArticleDTO_resourceIdentifier ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  description: string ;
  dateCreated: any ;
  datePublished: any ;
  author: getCommunity_getCommunity_homepage_resources_ArticleDTO_author ;
  owner: getCommunity_getCommunity_homepage_resources_ArticleDTO_owner ;
  status: ArticleStatusInput ;
  attributes: any ;
  voteResult: getCommunity_getCommunity_homepage_resources_ArticleDTO_voteResult ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_homepage_resources_CollectionDTO_owner = getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO_sections {
  __typename: "SectionDTO";
  name: string ;
  description: string ;
  resourcesId: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections_resourcesId )[] ;
}

export interface getCommunity_getCommunity_homepage_resources_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  background: string ;
  dateUpdated: any ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CollectionDTO_resourceIdentifier ;
  owner: getCommunity_getCommunity_homepage_resources_CollectionDTO_owner ;
  sections: (getCommunity_getCommunity_homepage_resources_CollectionDTO_sections )[] ;
}

export interface getCommunity_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_homepage_resources_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  resourceIdentifier: getCommunity_getCommunity_homepage_resources_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_homepage_resources = getCommunity_getCommunity_homepage_resources_PublicUserDTO | getCommunity_getCommunity_homepage_resources_ArticleDTO | getCommunity_getCommunity_homepage_resources_CollectionDTO | getCommunity_getCommunity_homepage_resources_CommunityDTO;

export interface getCommunity_getCommunity_homepage {
  __typename: "SectionDTO";
  name: string ;
  description: string ;
  resourcesId: (getCommunity_getCommunity_homepage_resourcesId )[] ;
  resources: (getCommunity_getCommunity_homepage_resources )[] ;
}

export interface getCommunity_getCommunity_members {
  __typename: "CommunityMemberDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  role: CommunityPermissionInput ;
  status: UserStatusInput ;
}

export interface getCommunity_getCommunity_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_approved_ArticleDTO_owner = getCommunity_getCommunity_approved_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_approved_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_approved_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_approved_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCommunity_getCommunity_approved_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCommunity_getCommunity_approved_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunity_getCommunity_approved_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunity_getCommunity_approved_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCommunity_getCommunity_approved_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCommunity_getCommunity_approved_ArticleDTO_resourceIdentifier ;
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
  voteResult: getCommunity_getCommunity_approved_ArticleDTO_voteResult ;
  author: getCommunity_getCommunity_approved_ArticleDTO_author ;
  owner: getCommunity_getCommunity_approved_ArticleDTO_owner ;
  comments: getCommunity_getCommunity_approved_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_approved_CollectionDTO_owner = getCommunity_getCommunity_approved_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_approved_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_approved_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCommunity_getCommunity_approved_CollectionDTO_sections_resources = getCommunity_getCommunity_approved_CollectionDTO_sections_resources_CommunityDTO | getCommunity_getCommunity_approved_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunity_getCommunity_approved_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCommunity_getCommunity_approved_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCommunity_getCommunity_approved_CollectionDTO_sections_resources )[] ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCommunity_getCommunity_approved_CollectionDTO_owner ;
  sections: (getCommunity_getCommunity_approved_CollectionDTO_sections )[] ;
  resourceIdentifier: getCommunity_getCommunity_approved_CollectionDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_approved = getCommunity_getCommunity_approved_CommunityDTO | getCommunity_getCommunity_approved_ArticleDTO | getCommunity_getCommunity_approved_CollectionDTO;

export interface getCommunity_getCommunity_pending_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_pending_ArticleDTO_owner = getCommunity_getCommunity_pending_ArticleDTO_owner_ArticleDTO | getCommunity_getCommunity_pending_ArticleDTO_owner_PublicUserDTO | getCommunity_getCommunity_pending_ArticleDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_pending_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: getCommunity_getCommunity_pending_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getCommunity_getCommunity_pending_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getCommunity_getCommunity_pending_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getCommunity_getCommunity_pending_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (getCommunity_getCommunity_pending_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: getCommunity_getCommunity_pending_ArticleDTO_resourceIdentifier ;
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
  voteResult: getCommunity_getCommunity_pending_ArticleDTO_voteResult ;
  author: getCommunity_getCommunity_pending_ArticleDTO_author ;
  owner: getCommunity_getCommunity_pending_ArticleDTO_owner ;
  comments: getCommunity_getCommunity_pending_ArticleDTO_comments ;
  updateComment: string ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_pending_CollectionDTO_owner = getCommunity_getCommunity_pending_CollectionDTO_owner_ArticleDTO | getCommunity_getCommunity_pending_CollectionDTO_owner_PublicUserDTO | getCommunity_getCommunity_pending_CollectionDTO_owner_CommunityDTO;

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getCommunity_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type getCommunity_getCommunity_pending_CollectionDTO_sections_resources = getCommunity_getCommunity_pending_CollectionDTO_sections_resources_CommunityDTO | getCommunity_getCommunity_pending_CollectionDTO_sections_resources_ArticleDTO;

export interface getCommunity_getCommunity_pending_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (getCommunity_getCommunity_pending_CollectionDTO_sections_resourcesId )[] ;
  resources: (getCommunity_getCommunity_pending_CollectionDTO_sections_resources )[] ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface getCommunity_getCommunity_pending_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: getCommunity_getCommunity_pending_CollectionDTO_owner ;
  sections: (getCommunity_getCommunity_pending_CollectionDTO_sections )[] ;
  resourceIdentifier: getCommunity_getCommunity_pending_CollectionDTO_resourceIdentifier ;
}

export type getCommunity_getCommunity_pending = getCommunity_getCommunity_pending_CommunityDTO | getCommunity_getCommunity_pending_ArticleDTO | getCommunity_getCommunity_pending_CollectionDTO;

export interface getCommunity_getCommunity {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: getCommunity_getCommunity_creator ;
  name: string ;
  description: string ;
  status: CommunityStatusInput ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  resourceIdentifier: getCommunity_getCommunity_resourceIdentifier ;
  attributes: any ;
  homepage: (getCommunity_getCommunity_homepage )[] ;
  members: (getCommunity_getCommunity_members )[] ;
  approvedId: (getCommunity_getCommunity_approvedId )[] ;
  pendingId: (getCommunity_getCommunity_pendingId )[] ;
  approved: (getCommunity_getCommunity_approved )[] ;
  pending: (getCommunity_getCommunity_pending )[] ;
}

export interface getCommunity {
  getCommunity: getCommunity_getCommunity ;
}

export interface getCommunityVariables {
  id?: string ;
}
