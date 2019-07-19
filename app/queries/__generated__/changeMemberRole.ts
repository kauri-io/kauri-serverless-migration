/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: changeMemberRole
// ====================================================

export interface changeMemberRole_changeMemberRole {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface changeMemberRole {
  /**
   * Change a member role within the community (execute call).
   * This operation can only be performed by a community admin
   */
  changeMemberRole: changeMemberRole_changeMemberRole | null;
}

export interface changeMemberRoleVariables {
  signature: string;
  id: string;
  account: string;
  role: CommunityPermissionInput;
}
