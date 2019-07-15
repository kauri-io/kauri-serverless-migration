/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchApprovedArticles
// ====================================================

export interface searchApprovedArticles_searchArticles_content_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface searchApprovedArticles_searchArticles_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface searchApprovedArticles_searchArticles_content_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface searchApprovedArticles_searchArticles_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchApprovedArticles_searchArticles_content_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchApprovedArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchApprovedArticles_searchArticles_content_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchApprovedArticles_searchArticles_content_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchApprovedArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchApprovedArticles_searchArticles_content_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchApprovedArticles_searchArticles_content_owner_CommunityDTO_resourceIdentifier ;
}

export type searchApprovedArticles_searchArticles_content_owner = searchApprovedArticles_searchArticles_content_owner_ArticleDTO | searchApprovedArticles_searchArticles_content_owner_PublicUserDTO | searchApprovedArticles_searchArticles_content_owner_CommunityDTO;

export interface searchApprovedArticles_searchArticles_content_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchApprovedArticles_searchArticles_content_comments_content {
  __typename: "CommentDTO";
  author: searchApprovedArticles_searchArticles_content_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface searchApprovedArticles_searchArticles_content_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchApprovedArticles_searchArticles_content_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchApprovedArticles_searchArticles_content {
  __typename: "ArticleDTO";
  associatedNfts: (searchApprovedArticles_searchArticles_content_associatedNfts )[] ;
  resourceIdentifier: searchApprovedArticles_searchArticles_content_resourceIdentifier ;
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
  voteResult: searchApprovedArticles_searchArticles_content_voteResult ;
  author: searchApprovedArticles_searchArticles_content_author ;
  owner: searchApprovedArticles_searchArticles_content_owner ;
  comments: searchApprovedArticles_searchArticles_content_comments ;
  updateComment: string ;
}

export interface searchApprovedArticles_searchArticles {
  __typename: "ResponsePage_ArticleDTO";
  content: (searchApprovedArticles_searchArticles_content )[] ;
  isLast: boolean;
  totalElements: any;
  totalPages: number;
}

export interface searchApprovedArticles {
  searchArticles: searchApprovedArticles_searchArticles ;
}

export interface searchApprovedArticlesVariables {
  size?: number ;
  text?: string ;
  category?: string ;
  sort?: string ;
  page?: number ;
}
