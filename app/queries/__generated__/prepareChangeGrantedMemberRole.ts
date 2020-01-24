/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { CommunityPermissionInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: prepareChangeGrantedMemberRole
// ====================================================

export interface prepareChangeGrantedMemberRole_prepareChangeGrantedMemberRole {
  __typename: "PrepareCommandResponseDTO";
  messageHash: string | null;
}

export interface prepareChangeGrantedMemberRole {
  /**
   * Change a granted member role within the community (prepare call, return a meta-tx hash to sign).
   * This operation can only be performed by a community admin
   */
  prepareChangeGrantedMemberRole: prepareChangeGrantedMemberRole_prepareChangeGrantedMemberRole;
}

export interface prepareChangeGrantedMemberRoleVariables {
  id: string;
  account: string;
  role: CommunityPermissionInput;
}
