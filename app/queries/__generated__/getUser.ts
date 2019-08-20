/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

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
}

export interface getUser {
  /**
   * Retrieve a user profile (public information only).
   * This operation can be performed anonymously.
   */
  getUser: getUser_getUser;
}

export interface getUserVariables {
  userId: string;
}
