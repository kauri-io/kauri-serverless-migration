/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { SearchFilterInput, SearchParameterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: searchAutocompleteArticles
// ====================================================

export interface searchAutocompleteArticles_searchAutocomplete_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_CommunityDTO {
  __typename: "CommunityDTO" | "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_associatedNfts {
  __typename: "NftTokenDTO";
  tokenType: string ;
  contractAddress: string ;
  name: string ;
  image: string ;
  externalUrl: string ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
  count: any ;
  hasVoted: boolean ;
  quantity: any ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO {
  __typename: "ArticleDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "CollectionDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO_resourceIdentifier ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  name: string ;
  avatar: string ;
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO_resourceIdentifier ;
}

export type searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner = searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_ArticleDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_PublicUserDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner_CommunityDTO;

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments_content_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
  username: string ;
  avatar: string ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments_content {
  __typename: "CommentDTO";
  author: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments_content_author ;
  posted: any ;
  body: string ;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments {
  __typename: "ResponsePage_CommentDTO";
  content: (searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments_content )[] ;
  totalPages: number;
  totalElements: any;
}

export interface searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  associatedNfts: (searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_associatedNfts )[] ;
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_resourceIdentifier ;
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
  voteResult: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_voteResult ;
  author: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_author ;
  owner: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_owner ;
  comments: searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO_comments ;
  updateComment: string ;
}

export type searchAutocompleteArticles_searchAutocomplete_content_resource = searchAutocompleteArticles_searchAutocomplete_content_resource_CommunityDTO | searchAutocompleteArticles_searchAutocomplete_content_resource_ArticleDTO;

export interface searchAutocompleteArticles_searchAutocomplete_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: searchAutocompleteArticles_searchAutocomplete_content_resourceIdentifier ;
  resource: searchAutocompleteArticles_searchAutocomplete_content_resource ;
}

export interface searchAutocompleteArticles_searchAutocomplete {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  totalElements: any;
  totalPages: number;
  isLast: boolean;
  content: (searchAutocompleteArticles_searchAutocomplete_content )[] ;
}

export interface searchAutocompleteArticles {
  searchAutocomplete: searchAutocompleteArticles_searchAutocomplete ;
}

export interface searchAutocompleteArticlesVariables {
  page?: number ;
  size?: number ;
  query?: string ;
  filter?: SearchFilterInput ;
  parameter?: SearchParameterInput ;
}
