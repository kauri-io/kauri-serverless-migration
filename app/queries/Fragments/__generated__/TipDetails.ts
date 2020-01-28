/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { TipStatusInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL fragment: TipDetails
// ====================================================

export interface TipDetails_tipper {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  name: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface TipDetails_recipient {
  __typename: "PublicUserDTO";
  /**
   * User ID (Ethereum account address)
   */
  id: string;
  /**
   * Username
   */
  username: string | null;
  /**
   * User full name
   */
  name: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
}

export interface TipDetails_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface TipDetails_resource_ArticleDTO {
  __typename: "ArticleDTO";
  /**
   * Article ID
   */
  id: string;
  /**
   * Title of article
   */
  title: string;
}

export type TipDetails_resource = TipDetails_resource_PublicUserDTO | TipDetails_resource_ArticleDTO;

export interface TipDetails {
  __typename: "TipDetailsDTO";
  /**
   * Transaction hash of the tip
   */
  transactionHash: string | null;
  /**
   * Tip sender (full profile)
   */
  tipper: TipDetails_tipper;
  /**
   * Tip recipient (full profile)
   */
  recipient: TipDetails_recipient;
  /**
   * load the tip resource
   */
  resource: TipDetails_resource;
  /**
   * From address of transaction
   */
  fromAddress: string | null;
  /**
   * To address of transaction
   */
  toAddress: string | null;
  /**
   * The tip token type
   */
  tokenType: string | null;
  /**
   * The value of the tip
   */
  value: any | null;
  /**
   * Hash of block including tip tx
   */
  blockHash: string | null;
  /**
   * Contract managing tip (not used at the moment)
   */
  contractAddress: string | null;
  /**
   * Date Staged
   */
  dateStaged: any | null;
  /**
   * Date Mined
   */
  dateMined: any | null;
  /**
   * Tip status
   */
  status: TipStatusInput | null;
}
