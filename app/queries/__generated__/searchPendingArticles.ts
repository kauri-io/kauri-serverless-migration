/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ArticleFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchPendingArticles
// ====================================================

export interface searchPendingArticles_searchArticles_content_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface searchPendingArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface searchPendingArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface searchPendingArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPendingArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPendingArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchPendingArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPendingArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchPendingArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchPendingArticles_searchArticles_content_owner = searchPendingArticles_searchArticles_content_owner_ArticleDTO | searchPendingArticles_searchArticles_content_owner_PublicUserDTO | searchPendingArticles_searchArticles_content_owner_CommunityDTO;

export interface searchPendingArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPendingArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  author: searchPendingArticles_searchArticles_content_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface searchPendingArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchPendingArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchPendingArticles_searchArticles_content {
  __typename: "ArticleDTO";
  associatedNfts: (searchPendingArticles_searchArticles_content_associatedNfts )[] ;
  resourceIdentifier: searchPendingArticles_searchArticles_content_resourceIdentifier ;
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
  voteResult: searchPendingArticles_searchArticles_content_voteResult ;
  author: searchPendingArticles_searchArticles_content_author ;
  owner: searchPendingArticles_searchArticles_content_owner ;
  comments: searchPendingArticles_searchArticles_content_comments ;
  updateComment: string ;
}

export interface searchPendingArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  content: (searchPendingArticles_searchArticles_content )[] ;
  totalElements: any;
}

export interface searchPendingArticles {
  searchArticles: searchPendingArticles_searchArticles ;
}

export interface searchPendingArticlesVariables {
  size?: number ;
  filter?: ArticleFilterInput ;
}
