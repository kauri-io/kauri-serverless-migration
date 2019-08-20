/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editArticleVersion
// ====================================================

export interface editArticleVersion_editArticleVersion {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editArticleVersion {
  /**
   * Edit an existing draft article version
   * This operation can only be performed by the author of the article
   * This operation can only be performed during the DRAFT stage
   */
  editArticleVersion: editArticleVersion_editArticleVersion;
}

export interface editArticleVersionVariables {
  id: string;
  version: number;
  text: string;
  subject: string;
  tags?: (string | null)[] | null;
  attributes?: any | null;
}
