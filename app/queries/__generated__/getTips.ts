/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { DirectionInput, TipFilterInput, TipStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getTips
// ====================================================

export interface getTips_getTips_content_tipper {
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

export interface getTips_getTips_content_recipient {
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

export interface getTips_getTips_content_resource_PublicUserDTO {
  __typename: "PublicUserDTO" | "CollectionDTO" | "CommunityDTO" | "DiscussionDTO" | "CommentDTO" | "CommunityInvitationDTO" | "ExternalLinkDTO" | "SeriesDTO" | "UserDTO" | "TemplateDTO" | "SearchResultDTO" | "CuratedListDTO";
}

export interface getTips_getTips_content_resource_ArticleDTO {
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

export type getTips_getTips_content_resource = getTips_getTips_content_resource_PublicUserDTO | getTips_getTips_content_resource_ArticleDTO;

export interface getTips_getTips_content {
  __typename: "TipDetailsDTO";
  /**
   * Transaction hash of the tip
   */
  transactionHash: string | null;
  /**
   * Tip sender (full profile)
   */
  tipper: getTips_getTips_content_tipper;
  /**
   * Tip recipient (full profile)
   */
  recipient: getTips_getTips_content_recipient;
  /**
   * load the tip resource
   */
  resource: getTips_getTips_content_resource;
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

export interface getTips_getTips {
  __typename: "ResponsePage_TipDetailsDTO";
  /**
   * Returns the page content.
   */
  content: (getTips_getTips_content | null)[];
  /**
   * Number of total pages.
   */
  totalPages: number;
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getTips {
  /**
   * Gets tips with pagination, for the current user
   */
  getTips: getTips_getTips | null;
}

export interface getTipsVariables {
  page?: number | null;
  size?: number | null;
  sort?: string | null;
  dir?: DirectionInput | null;
  filter?: TipFilterInput | null;
}
