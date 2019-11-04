/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: createBookmarkFolder
// ====================================================

export interface createBookmarkFolder_createBookmarkFolder {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface createBookmarkFolder {
  /**
   * Create an empty bookmark folder
   */
  createBookmarkFolder: createBookmarkFolder_createBookmarkFolder;
}

export interface createBookmarkFolderVariables {
  folder: string;
}
