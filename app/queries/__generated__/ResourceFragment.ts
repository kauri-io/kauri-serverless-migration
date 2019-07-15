/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: ResourceFragment
// ====================================================

export interface ResourceFragment_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_CollectionDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: ResourceFragment_CollectionDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface ResourceFragment_CollectionDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_CollectionDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: ResourceFragment_CollectionDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type ResourceFragment_CollectionDTO_owner = ResourceFragment_CollectionDTO_owner_ArticleDTO | ResourceFragment_CollectionDTO_owner_PublicUserDTO | ResourceFragment_CollectionDTO_owner_CommunityDTO;

export interface ResourceFragment_CollectionDTO_sections_resourcesId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_CollectionDTO_sections_resources_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CollectionDTO_sections_resources_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export type ResourceFragment_CollectionDTO_sections_resources = ResourceFragment_CollectionDTO_sections_resources_CommunityDTO | ResourceFragment_CollectionDTO_sections_resources_ArticleDTO;

export interface ResourceFragment_CollectionDTO_sections {
  __typename: "SectionDTO";
  id: string ;
  name: string ;
  description: string ;
  resourcesId: (ResourceFragment_CollectionDTO_sections_resourcesId )[] ;
  resources: (ResourceFragment_CollectionDTO_sections_resources )[] ;
}

export interface ResourceFragment_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface ResourceFragment_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  owner: ResourceFragment_CollectionDTO_owner ;
  sections: (ResourceFragment_CollectionDTO_sections )[] ;
  resourceIdentifier: ResourceFragment_CollectionDTO_resourceIdentifier ;
}

export interface ResourceFragment_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface ResourceFragment_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface ResourceFragment_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface ResourceFragment_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface ResourceFragment_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: ResourceFragment_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface ResourceFragment_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: ResourceFragment_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type ResourceFragment_ArticleDTO_owner = ResourceFragment_ArticleDTO_owner_ArticleDTO | ResourceFragment_ArticleDTO_owner_PublicUserDTO | ResourceFragment_ArticleDTO_owner_CommunityDTO;

export interface ResourceFragment_ArticleDTO {
  __typename: "ArticleDTO";
  resourceIdentifier: ResourceFragment_ArticleDTO_resourceIdentifier ;
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
  voteResult: ResourceFragment_ArticleDTO_voteResult ;
  author: ResourceFragment_ArticleDTO_author ;
  owner: ResourceFragment_ArticleDTO_owner ;
  updateComment: string ;
}

export interface ResourceFragment_CommunityDTO_creator {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
}

export interface ResourceFragment_CommunityDTO_approvedId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_CommunityDTO_pendingId {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface ResourceFragment_CommunityDTO_approved_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface ResourceFragment_CommunityDTO_approved_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
}

export interface ResourceFragment_CommunityDTO_approved_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
}

export type ResourceFragment_CommunityDTO_approved = ResourceFragment_CommunityDTO_approved_CommunityDTO | ResourceFragment_CommunityDTO_approved_ArticleDTO | ResourceFragment_CommunityDTO_approved_CollectionDTO;

export interface ResourceFragment_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  creator: ResourceFragment_CommunityDTO_creator ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
  tags: (string )[] ;
  attributes: any ;
  approvedId: (ResourceFragment_CommunityDTO_approvedId )[] ;
  pendingId: (ResourceFragment_CommunityDTO_pendingId )[] ;
  approved: (ResourceFragment_CommunityDTO_approved )[] ;
}

export type ResourceFragment = ResourceFragment_PublicUserDTO | ResourceFragment_CollectionDTO | ResourceFragment_ArticleDTO | ResourceFragment_CommunityDTO;
