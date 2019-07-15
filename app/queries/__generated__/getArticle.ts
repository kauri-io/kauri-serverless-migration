/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ArticleStatusInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getArticle
// ====================================================

export interface getArticle_getArticle_voteResult {
  __typename: "VoteResultDTO";
  sum: number ;
}

export interface getArticle_getArticle_author {
  __typename: "PublicUserDTO";
  id: string ;
  name: string ;
}

export interface getArticle_getArticle_resourceIdentifier {
  __typename: "ResourceIdentifier";
  id: string ;
  type: ResourceTypeInput ;
  version: number ;
}

export interface getArticle_getArticle {
  __typename: "ArticleDTO";
  id: string ;
  version: number ;
  title: string ;
  dateCreated: any ;
  datePublished: any ;
  status: ArticleStatusInput ;
  attributes: any ;
  contentHash: string ;
  checkpoint: string ;
  voteResult: getArticle_getArticle_voteResult ;
  author: getArticle_getArticle_author ;
  resourceIdentifier: getArticle_getArticle_resourceIdentifier ;
}

export interface getArticle {
  getArticle: getArticle_getArticle ;
}

export interface getArticleVariables {
  id?: string ;
  version?: number ;
  published?: boolean ;
}
