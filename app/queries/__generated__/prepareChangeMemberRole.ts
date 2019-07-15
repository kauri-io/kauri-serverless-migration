/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareChangeMemberRole
// ====================================================

export interface prepareChangeMemberRole_prepareChangeMemberRole {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string ;
}

export interface prepareChangeMemberRole {
  prepareChangeMemberRole: prepareChangeMemberRole_prepareChangeMemberRole ;
}

export interface prepareChangeMemberRoleVariables {
  id?: string ;
  account?: string ;
  role?: CommunityPermissionInput ;
}
