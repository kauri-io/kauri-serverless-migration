/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: regenerateEmailVerificationCode
// ====================================================

export interface regenerateEmailVerificationCode_regenerateEmailVerificationCode {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface regenerateEmailVerificationCode {
  /**
   * Regenerate an email verification code
   * This operation can only be performed by a logged user.
   */
  regenerateEmailVerificationCode: regenerateEmailVerificationCode_regenerateEmailVerificationCode | null;
}
