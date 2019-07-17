/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareChangeMemberRole
// ====================================================

export interface prepareChangeMemberRole_prepareChangeMemberRole {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareChangeMemberRole {
  /**
   * Change a member role within the community (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareChangeMemberRole: prepareChangeMemberRole_prepareChangeMemberRole | null;
}

export interface prepareChangeMemberRoleVariables {
  id: string;
  account: string;
  role: CommunityPermissionInput;
}
