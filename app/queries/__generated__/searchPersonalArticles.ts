/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchPersonalArticles
// ====================================================

export interface searchPersonalArticles_searchArticles_content_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface searchPersonalArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface searchPersonalArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface searchPersonalArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPersonalArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchPersonalArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPersonalArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchPersonalArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchPersonalArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchPersonalArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchPersonalArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchPersonalArticles_searchArticles_content_owner = searchPersonalArticles_searchArticles_content_owner_ArticleDTO | searchPersonalArticles_searchArticles_content_owner_PublicUserDTO | searchPersonalArticles_searchArticles_content_owner_CommunityDTO;

export interface searchPersonalArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchPersonalArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  author: searchPersonalArticles_searchArticles_content_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface searchPersonalArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchPersonalArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchPersonalArticles_searchArticles_content {
  __typename: "ArticleDTO";
  associatedNfts: (searchPersonalArticles_searchArticles_content_associatedNfts )[] ;
  resourceIdentifier: searchPersonalArticles_searchArticles_content_resourceIdentifier ;
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
  voteResult: searchPersonalArticles_searchArticles_content_voteResult ;
  author: searchPersonalArticles_searchArticles_content_author ;
  owner: searchPersonalArticles_searchArticles_content_owner ;
  comments: searchPersonalArticles_searchArticles_content_comments ;
  updateComment: string ;
}

export interface searchPersonalArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  totalElements: any;
  isLast: boolean;
  content: (searchPersonalArticles_searchArticles_content )[] ;
  totalPages: number;
}

export interface searchPersonalArticles {
  searchArticles: searchPersonalArticles_searchArticles ;
}

export interface searchPersonalArticlesVariables {
  userId?: string ;
  size?: number ;
  page?: number ;
  text?: string ;
}
