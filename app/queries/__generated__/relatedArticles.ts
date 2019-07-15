/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput, SearchFilterInput, ResourceTypeInput, ArticleStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: relatedArticles
// ====================================================

export interface relatedArticles_searchMoreLikeThis_content_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CommentDTO" | "CommunityInvitationDTO" | "CommunityMemberDTO" | "TemplateDTO" | "SearchResultDTO" | "UserDTO" | "CuratedListDTO";
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_author {
  __typename: "PublicUserDTO";
  name: string ;
  username: string ;
  id: string ;
  avatar: string ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
  title: string ;
  description: string ;
  author: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_author ;
  dateCreated: any ;
  datePublished: any ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  tags: (string )[] ;
  voteResult: relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO_voteResult ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier {
  __typename: "ResourceIdentifier";
  type: ResourceTypeInput ;
  id: string ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO {
  __typename: "CollectionDTO";
  id: string ;
  name: string ;
  description: string ;
  tags: (string )[] ;
  background: string ;
  dateUpdated: any ;
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO_resourceIdentifier ;
}

export interface relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO {
  __typename: "CommunityDTO";
  id: string ;
  dateCreated: any ;
  dateUpdated: any ;
  creatorId: string ;
  name: string ;
  description: string ;
  website: string ;
  avatar: string ;
  social: any ;
}

export type relatedArticles_searchMoreLikeThis_content_resource = relatedArticles_searchMoreLikeThis_content_resource_PublicUserDTO | relatedArticles_searchMoreLikeThis_content_resource_ArticleDTO | relatedArticles_searchMoreLikeThis_content_resource_CollectionDTO | relatedArticles_searchMoreLikeThis_content_resource_CommunityDTO;

export interface relatedArticles_searchMoreLikeThis_content {
  __typename: "SearchResultDTO";
  resourceIdentifier: relatedArticles_searchMoreLikeThis_content_resourceIdentifier ;
  resource: relatedArticles_searchMoreLikeThis_content_resource ;
}

export interface relatedArticles_searchMoreLikeThis {
  __typename: "ResponseBreakdownPage_SearchResultDTO";
  totalElements: any;
  totalElementsBreakdown: any ;
  totalPages: number;
  content: (relatedArticles_searchMoreLikeThis_content )[] ;
}

export interface relatedArticles {
  searchMoreLikeThis: relatedArticles_searchMoreLikeThis ;
}

export interface relatedArticlesVariables {
  page?: number ;
  size?: number ;
  resourceId?: ResourceIdentifierInput ;
  filter?: SearchFilterInput ;
}
