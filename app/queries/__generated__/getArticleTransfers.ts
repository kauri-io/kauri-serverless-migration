/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getArticleTransfers
// ====================================================

export interface getArticleTransfers_getArticleTransfers_content_article_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO_resourceIdentifier ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO_resourceIdentifier ;
}

export type getArticleTransfers_getArticleTransfers_content_article_owner = getArticleTransfers_getArticleTransfers_content_article_owner_ArticleDTO | getArticleTransfers_getArticleTransfers_content_article_owner_PublicUserDTO | getArticleTransfers_getArticleTransfers_content_article_owner_CommunityDTO;

export interface getArticleTransfers_getArticleTransfers_content_article_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_comments_content {
  __typename: "CommentDTO";
  author: getArticleTransfers_getArticleTransfers_content_article_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface getArticleTransfers_getArticleTransfers_content_article_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (getArticleTransfers_getArticleTransfers_content_article_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getArticleTransfers_getArticleTransfers_content_article {
  __typename: "ArticleDTO";
  associatedNfts: (getArticleTransfers_getArticleTransfers_content_article_associatedNfts )[] ;
  resourceIdentifier: getArticleTransfers_getArticleTransfers_content_article_resourceIdentifier ;
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
  voteResult: getArticleTransfers_getArticleTransfers_content_article_voteResult ;
  author: getArticleTransfers_getArticleTransfers_content_article_author ;
  owner: getArticleTransfers_getArticleTransfers_content_article_owner ;
  comments: getArticleTransfers_getArticleTransfers_content_article_comments ;
  updateComment: string ;
}

export interface getArticleTransfers_getArticleTransfers_content_transferrer {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
  version: number ;
}

export interface getArticleTransfers_getArticleTransfers_content_recipient {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
  version: number ;
}

export interface getArticleTransfers_getArticleTransfers_content {
  __typename: "ArticleTransferDTO";
  id: string ;
  article: getArticleTransfers_getArticleTransfers_content_article ;
  transferrer: getArticleTransfers_getArticleTransfers_content_transferrer ;
  recipient: getArticleTransfers_getArticleTransfers_content_recipient ;
}

export interface getArticleTransfers_getArticleTransfers {
  __typename: "ResponsePage_ArticleTransferDTO";
  content: (getArticleTransfers_getArticleTransfers_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface getArticleTransfers {
  getArticleTransfers: getArticleTransfers_getArticleTransfers ;
}

export interface getArticleTransfersVariables {
  page?: number ;
  size?: number ;
  recipient?: string ;
  sort?: string ;
  dir?: DirectionInput ;
}
