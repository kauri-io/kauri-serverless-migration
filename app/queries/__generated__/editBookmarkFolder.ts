/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: editBookmarkFolder
// ====================================================

export interface editBookmarkFolder_editBookmarkFolder {
  __typename: "MutationResponse";
  /**
   * hash associated to the mutation/command sent. Should be used to subscribe to the event
   */
  hash: string | null;
}

export interface editBookmarkFolder {
  /**
   * Edit a bookmark folder name
   */
  editBookmarkFolder: editBookmarkFolder_editBookmarkFolder;
}

export interface editBookmarkFolderVariables {
  folder: string;
  newFolder: string;
}
