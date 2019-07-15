/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: homepageContent
// ====================================================

export interface homepageContent_getLatestHomepageDescriptor_rows_main_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Categories_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  description: string ;
  image: string ;
  link: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Categories {
  __typename: "Categories";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Categories_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource = homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content {
  __typename: "ResourceIdentifier";
  resource: homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content_resource ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Featured {
  __typename: "Featured";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Featured_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Actions_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  link: string;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Actions {
  __typename: "Actions";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Actions_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopTags_content {
  __typename: "StaticContentElementDTO";
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopTags {
  __typename: "TopTags";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_TopTags_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content_user {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content_user ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors {
  __typename: "TopContributors";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource = homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content {
  __typename: "ResourceIdentifier";
  resource: homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content_resource ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Promo {
  __typename: "Promo";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_Promo_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content = homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent {
  __typename: "LatestContent";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Newsletter {
  __typename: "Newsletter";
  type: string ;
  properties: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_main_Import {
  __typename: "Import";
  type: string ;
  properties: any ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_main = homepageContent_getLatestHomepageDescriptor_rows_main_AbstractComponent | homepageContent_getLatestHomepageDescriptor_rows_main_Categories | homepageContent_getLatestHomepageDescriptor_rows_main_Featured | homepageContent_getLatestHomepageDescriptor_rows_main_Actions | homepageContent_getLatestHomepageDescriptor_rows_main_TopTags | homepageContent_getLatestHomepageDescriptor_rows_main_TopContributors | homepageContent_getLatestHomepageDescriptor_rows_main_Promo | homepageContent_getLatestHomepageDescriptor_rows_main_LatestContent | homepageContent_getLatestHomepageDescriptor_rows_main_Newsletter | homepageContent_getLatestHomepageDescriptor_rows_main_Import;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  description: string ;
  image: string ;
  link: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories {
  __typename: "Categories";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content {
  __typename: "ResourceIdentifier";
  resource: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content_resource ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured {
  __typename: "Featured";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  link: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions {
  __typename: "Actions";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags_content {
  __typename: "StaticContentElementDTO";
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags {
  __typename: "TopTags";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content_user ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors {
  __typename: "TopContributors";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource = homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content {
  __typename: "ResourceIdentifier";
  resource: homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content_resource ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo {
  __typename: "Promo";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resourcesId )[] ;
  resources: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections_resources )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_owner ;
  sections: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_sections )[] ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_resourceIdentifier ;
  description: string ;
  id: string ;
  version: number ;
  title: string ;
  content: string ;
  authorId: string ;
  dateCreated: any ;
  datePublished: any ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_voteResult ;
  author: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_author ;
  owner: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO_owner ;
  updateComment: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CommunityDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approvedId )[] ;
  pendingId: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_pendingId )[] ;
  approved: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO_approved )[] ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content = homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_PublicUserDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CollectionDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_ArticleDTO | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content_CommunityDTO;

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent {
  __typename: "LatestContent";
  type: string ;
  properties: any ;
  content: (homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent_content )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Newsletter {
  __typename: "Newsletter";
  type: string ;
  properties: any ;
}

export interface homepageContent_getLatestHomepageDescriptor_rows_sidebar_Import {
  __typename: "Import";
  type: string ;
  properties: any ;
}

export type homepageContent_getLatestHomepageDescriptor_rows_sidebar = homepageContent_getLatestHomepageDescriptor_rows_sidebar_AbstractComponent | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Categories | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Featured | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Actions | homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopTags | homepageContent_getLatestHomepageDescriptor_rows_sidebar_TopContributors | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Promo | homepageContent_getLatestHomepageDescriptor_rows_sidebar_LatestContent | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Newsletter | homepageContent_getLatestHomepageDescriptor_rows_sidebar_Import;

export interface homepageContent_getLatestHomepageDescriptor_rows {
  __typename: "HomepageRowDTO";
  main: (homepageContent_getLatestHomepageDescriptor_rows_main )[] ;
  sidebar: (homepageContent_getLatestHomepageDescriptor_rows_sidebar )[] ;
}

export interface homepageContent_getLatestHomepageDescriptor {
  __typename: "HomepageDescriptorDTO";
  rows: (homepageContent_getLatestHomepageDescriptor_rows )[] ;
}

export interface homepageContent {
  getLatestHomepageDescriptor: homepageContent_getLatestHomepageDescriptor ;
}

export interface homepageContentVariables {
  populate?: boolean ;
}
