/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchPersonalSubmittedArticles
// ====================================================

export interface searchPersonalSubmittedArticles_searchArticles_content_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchPersonalSubmittedArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchPersonalSubmittedArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchPersonalSubmittedArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchPersonalSubmittedArticles_searchArticles_content_owner = searchPersonalSubmittedArticles_searchArticles_content_owner_ArticleDTO | searchPersonalSubmittedArticles_searchArticles_content_owner_PublicUserDTO | searchPersonalSubmittedArticles_searchArticles_content_owner_CommunityDTO;

export interface searchPersonalSubmittedArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  author: searchPersonalSubmittedArticles_searchArticles_content_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface searchPersonalSubmittedArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchPersonalSubmittedArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchPersonalSubmittedArticles_searchArticles_content {
  __typename: "ArticleDTO";
  associatedNfts: (searchPersonalSubmittedArticles_searchArticles_content_associatedNfts )[] ;
  resourceIdentifier: searchPersonalSubmittedArticles_searchArticles_content_resourceIdentifier ;
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
  voteResult: searchPersonalSubmittedArticles_searchArticles_content_voteResult ;
  author: searchPersonalSubmittedArticles_searchArticles_content_author ;
  owner: searchPersonalSubmittedArticles_searchArticles_content_owner ;
  comments: searchPersonalSubmittedArticles_searchArticles_content_comments ;
  updateComment: string ;
}

export interface searchPersonalSubmittedArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  content: (searchPersonalSubmittedArticles_searchArticles_content )[] ;
}

export interface searchPersonalSubmittedArticles {
  searchArticles: searchPersonalSubmittedArticles_searchArticles ;
}

export interface searchPersonalSubmittedArticlesVariables {
  size?: number ;
  userId?: string ;
}
