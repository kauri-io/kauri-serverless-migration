/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_getUser_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getUser_getUser_links {
  __typename: "ResponsePage_ExternalLinkDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getUser_getUser_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getUser_getUser {
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
   * User title
   */
  title: string | null;
  /**
   * User website
   */
  website: string | null;
  /**
   * User avatar URI
   */
  avatar: string | null;
  /**
   * User social links (twitter, github, etc.)
   */
  social: any | null;
  /**
   * Returns a page of ArticleDTO authored by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  articles: getUser_getUser_articles;
  /**
   * Returns a page of ExternalLinkDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  links: getUser_getUser_links;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getUser_getUser_collections;
}

export interface getUser {
  /**
   * Retrieve a user profile (public information only) by ID.
   * This operation can be performed anonymously.
   */
  getUser: getUser_getUser;
}

export interface getUserVariables {
  userId: string;
}
