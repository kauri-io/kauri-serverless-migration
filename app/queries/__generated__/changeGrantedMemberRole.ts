/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: changeGrantedMemberRole
// ====================================================

export interface changeGrantedMemberRole_changeGrantedMemberRole {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface changeGrantedMemberRole {
  /**
   * Change a granted member role within the community (execute call).
   * This operation can only be performed by a community admin
   */
  changeGrantedMemberRole: changeGrantedMemberRole_changeGrantedMemberRole;
}

export interface changeGrantedMemberRoleVariables {
  signature: string;
  id: string;
  account: string;
  role: CommunityPermissionInput;
}
