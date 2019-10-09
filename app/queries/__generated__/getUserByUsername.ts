/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserByUsername
// ====================================================

export interface getUserByUsername_getUserByUsername_articles {
  __typename: "ResponsePage_ArticleDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getUserByUsername_getUserByUsername_collections {
  __typename: "ResponsePage_CollectionDTO";
  /**
   * Total amount of elements.
   */
  totalElements: any;
}

export interface getUserByUsername_getUserByUsername {
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
  articles: getUserByUsername_getUserByUsername_articles;
  /**
   * Returns a page of CollectionDTO owned by this PublicUserDTO.
   * This operation can only be performed by logged user
   */
  collections: getUserByUsername_getUserByUsername_collections;
}

export interface getUserByUsername {
  /**
   * Retrieve a user profile (public information only) by username.
   * This operation can be performed anonymously.
   */
  getUserByUsername: getUserByUsername_getUserByUsername;
}

export interface getUserByUsernameVariables {
  username: string;
}
