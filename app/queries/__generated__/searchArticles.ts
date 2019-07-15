/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchArticles
// ====================================================

export interface searchArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchArticles_searchArticles_content_owner = searchArticles_searchArticles_content_owner_ArticleDTO | searchArticles_searchArticles_content_owner_PublicUserDTO | searchArticles_searchArticles_content_owner_CommunityDTO;

export interface searchArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface searchArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
}

export interface searchArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  posted: any ;
  author: searchArticles_searchArticles_content_comments_content_author ;
  body: string ;
}

export interface searchArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
  version: number ;
}

export interface searchArticles_searchArticles_content {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
  title: string ;
  description: string ;
  tags: (string )[] ;
  dateCreated: any ;
  datePublished: any ;
  author: searchArticles_searchArticles_content_author ;
  owner: searchArticles_searchArticles_content_owner ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  voteResult: searchArticles_searchArticles_content_voteResult ;
  comments: searchArticles_searchArticles_content_comments ;
  resourceIdentifier: searchArticles_searchArticles_content_resourceIdentifier ;
}

export interface searchArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  totalElements: any;
  isLast: boolean;
  content: (searchArticles_searchArticles_content )[] ;
}

export interface searchArticles {
  searchArticles: searchArticles_searchArticles ;
}

export interface searchArticlesVariables {
  size?: number ;
  page?: number ;
  author?: string ;
}
