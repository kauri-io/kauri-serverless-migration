/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_getUser {
  __typename: "PublicUserDTO";
  id: string ;
  username: string ;
  name: string ;
  title: string ;
  website: string ;
  avatar: string ;
  social: any ;
}

export interface getUser {
  getUser: getUser_getUser ;
}

export interface getUserVariables {
  userId?: string ;
}
