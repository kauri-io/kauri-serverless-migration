/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUserByUsername
// ====================================================

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
