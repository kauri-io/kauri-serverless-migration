/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: HomepageComponentFragment
// ====================================================

export interface HomepageComponentFragment_AbstractComponent {
  __typename: "AbstractComponent" | "ResourceContentComponent" | "ResourceIdContentComponent" | "StaticContentComponent";
}

export interface HomepageComponentFragment_Categories_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  description: string ;
  image: string ;
  link: string ;
}

export interface HomepageComponentFragment_Categories {
  __typename: "Categories";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_Categories_content )[] ;
}

export interface HomepageComponentFragment_Featured_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner = HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources = HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_CommunityDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface HomepageComponentFragment_Featured_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: HomepageComponentFragment_Featured_content_resource_CollectionDTO_owner ;
  sections: (HomepageComponentFragment_Featured_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner = HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Featured_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Featured_content_resource_ArticleDTO_resourceIdentifier ;
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
  voteResult: HomepageComponentFragment_Featured_content_resource_ArticleDTO_voteResult ;
  author: HomepageComponentFragment_Featured_content_resource_ArticleDTO_author ;
  owner: HomepageComponentFragment_Featured_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved = HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CommunityDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_Featured_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: HomepageComponentFragment_Featured_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_pendingId )[] ;
  approved: (HomepageComponentFragment_Featured_content_resource_CommunityDTO_approved )[] ;
}

export type HomepageComponentFragment_Featured_content_resource = HomepageComponentFragment_Featured_content_resource_PublicUserDTO | HomepageComponentFragment_Featured_content_resource_CollectionDTO | HomepageComponentFragment_Featured_content_resource_ArticleDTO | HomepageComponentFragment_Featured_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Featured_content {
  __typename: "ResourceIdentifier";
  resource: HomepageComponentFragment_Featured_content_resource ;
}

export interface HomepageComponentFragment_Featured {
  __typename: "Featured";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_Featured_content )[] ;
}

export interface HomepageComponentFragment_Actions_content {
  __typename: "StaticContentElementDTO";
  name: string ;
  link: string ;
}

export interface HomepageComponentFragment_Actions {
  __typename: "Actions";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_Actions_content )[] ;
}

export interface HomepageComponentFragment_TopTags_content {
  __typename: "StaticContentElementDTO";
  name: string ;
}

export interface HomepageComponentFragment_TopTags {
  __typename: "TopTags";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_TopTags_content )[] ;
}

export interface HomepageComponentFragment_TopContributors_content_user {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  avatar: string ;
}

export interface HomepageComponentFragment_TopContributors_content {
  __typename: "ResourceIdentifier";
  user: HomepageComponentFragment_TopContributors_content_user ;
}

export interface HomepageComponentFragment_TopContributors {
  __typename: "TopContributors";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_TopContributors_content )[] ;
}

export interface HomepageComponentFragment_Promo_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner = HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources = HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_CommunityDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources_ArticleDTO;

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resourcesId )[] ;
  resources: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections_resources )[] ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface HomepageComponentFragment_Promo_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: HomepageComponentFragment_Promo_content_resource_CollectionDTO_owner ;
  sections: (HomepageComponentFragment_Promo_content_resource_CollectionDTO_sections )[] ;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner = HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_Promo_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_Promo_content_resource_ArticleDTO_resourceIdentifier ;
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
  voteResult: HomepageComponentFragment_Promo_content_resource_ArticleDTO_voteResult ;
  author: HomepageComponentFragment_Promo_content_resource_ArticleDTO_author ;
  owner: HomepageComponentFragment_Promo_content_resource_ArticleDTO_owner ;
  updateComment: string ;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved = HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CommunityDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_Promo_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: HomepageComponentFragment_Promo_content_resource_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_approvedId )[] ;
  pendingId: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_pendingId )[] ;
  approved: (HomepageComponentFragment_Promo_content_resource_CommunityDTO_approved )[] ;
}

export type HomepageComponentFragment_Promo_content_resource = HomepageComponentFragment_Promo_content_resource_PublicUserDTO | HomepageComponentFragment_Promo_content_resource_CollectionDTO | HomepageComponentFragment_Promo_content_resource_ArticleDTO | HomepageComponentFragment_Promo_content_resource_CommunityDTO;

export interface HomepageComponentFragment_Promo_content {
  __typename: "ResourceIdentifier";
  resource: HomepageComponentFragment_Promo_content_resource ;
}

export interface HomepageComponentFragment_Promo {
  __typename: "Promo";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_Promo_content )[] ;
}

export interface HomepageComponentFragment_LatestContent_content_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_owner = HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources = HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_CommunityDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources_ArticleDTO;

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resourcesId )[] ;
  resources: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections_resources )[] ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface HomepageComponentFragment_LatestContent_content_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: HomepageComponentFragment_LatestContent_content_CollectionDTO_owner ;
  sections: (HomepageComponentFragment_LatestContent_content_CollectionDTO_sections )[] ;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_CollectionDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type HomepageComponentFragment_LatestContent_content_ArticleDTO_owner = HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_ArticleDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_PublicUserDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO_owner_CommunityDTO;

export interface HomepageComponentFragment_LatestContent_content_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: HomepageComponentFragment_LatestContent_content_ArticleDTO_resourceIdentifier ;
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
  voteResult: HomepageComponentFragment_LatestContent_content_ArticleDTO_voteResult ;
  author: HomepageComponentFragment_LatestContent_content_ArticleDTO_author ;
  owner: HomepageComponentFragment_LatestContent_content_ArticleDTO_owner ;
  updateComment: string ;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type HomepageComponentFragment_LatestContent_content_CommunityDTO_approved = HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CommunityDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_ArticleDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO_approved_CollectionDTO;

export interface HomepageComponentFragment_LatestContent_content_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: HomepageComponentFragment_LatestContent_content_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (HomepageComponentFragment_LatestContent_content_CommunityDTO_approvedId )[] ;
  pendingId: (HomepageComponentFragment_LatestContent_content_CommunityDTO_pendingId )[] ;
  approved: (HomepageComponentFragment_LatestContent_content_CommunityDTO_approved )[] ;
}

export type HomepageComponentFragment_LatestContent_content = HomepageComponentFragment_LatestContent_content_PublicUserDTO | HomepageComponentFragment_LatestContent_content_CollectionDTO | HomepageComponentFragment_LatestContent_content_ArticleDTO | HomepageComponentFragment_LatestContent_content_CommunityDTO;

export interface HomepageComponentFragment_LatestContent {
  __typename: "LatestContent";
  type: string ;
  properties: any ;
  content: (HomepageComponentFragment_LatestContent_content )[] ;
}

export interface HomepageComponentFragment_Newsletter {
  __typename: "Newsletter";
  type: string ;
  properties: any ;
}

export interface HomepageComponentFragment_Import {
  __typename: "Import";
  type: string ;
  properties: any ;
}

export type HomepageComponentFragment = HomepageComponentFragment_AbstractComponent | HomepageComponentFragment_Categories | HomepageComponentFragment_Featured | HomepageComponentFragment_Actions | HomepageComponentFragment_TopTags | HomepageComponentFragment_TopContributors | HomepageComponentFragment_Promo | HomepageComponentFragment_LatestContent | HomepageComponentFragment_Newsletter | HomepageComponentFragment_Import;
