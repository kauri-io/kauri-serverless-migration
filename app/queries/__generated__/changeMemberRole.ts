/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: changeMemberRole
// ====================================================

export interface changeMemberRole_changeMemberRole {
  __typename: "MutationResponse";
  hash: string ;
}

export interface changeMemberRole {
  changeMemberRole: changeMemberRole_changeMemberRole ;
}

export interface changeMemberRoleVariables {
  signature?: string ;
  id?: string ;
  account?: string ;
  role?: CommunityPermissionInput ;
}
