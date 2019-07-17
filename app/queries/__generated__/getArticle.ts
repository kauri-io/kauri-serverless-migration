/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ArticleStatusInput, ResourceTypeInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getArticle
// ====================================================

export interface getArticle_getArticle_voteResult {
  __typename: "VoteResultDTO";
  /**
   * Vote sum: Sum of the vote (-1,+1,+1=+1)
   */
  sum: number;
}

export interface getArticle_getArticle_author {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * User full name
   */
  name: string | null;
}

export interface getArticle_getArticle_resourceIdentifier {
  __typename: "ResourceIdentifier";
  /**
   * Resource ID
   */
  id: string;
  /**
   * Resource type
   */
  type: ResourceTypeInput;
  /**
   * Resource version (article)
   */
  version: number | null;
}

export interface getArticle_getArticle {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Article Version
   */
  version: number;
  /**
   * Title of article
   */
  title: string;
  /**
   * Date created
   */
  dateCreated: any;
  /**
   * Date publication
   */
  datePublished: any | null;
  /**
   * Status of the article
   */
  status: ArticleStatusInput;
  /**
   * Set of optional attributes fields
   */
  attributes: any | null;
  /**
   * IPFS Content hash
   */
  contentHash: string;
  /**
   * Checkpoint file (null if the article is not escalated on-chain)
   */
  checkpoint: string | null;
  /**
   * Get vote result for the article
   */
  voteResult: getArticle_getArticle_voteResult | null;
  /**
   * Article author (full profile)
   */
  author: getArticle_getArticle_author | null;
  resourceIdentifier: getArticle_getArticle_resourceIdentifier | null;
}

export interface getArticle {
  /**
   * Get an article by id.
   * - version can optionally be used find a specific version, if empty latest version is retrieved.
   * - published can optionally be used to retrieve the latest version (regardless
   * any status if false) or the latest published version (if true).
   * This operation can be performed anonymously
   */
  getArticle: getArticle_getArticle | null;
}

export interface getArticleVariables {
  id: string;
  version: number;
  published?: boolean | null;
}
