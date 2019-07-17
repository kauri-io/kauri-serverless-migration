/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

<<<<<<< HEAD
import { ResourceIdentifierInput } from "../../../__generated__/globalTypes";
=======
import { ResourceIdentifierInput } from "./../../../__generated__/globalTypes";
>>>>>>> d861e60d171caefcf4c9a30a6868839cd0a6350a

// ====================================================
// GraphQL mutation operation: publishArticle
// ====================================================

export interface publishArticle_publishArticle {
  __typename: "MutationResponse";
  hash: string | null;
}

export interface publishArticle {
  publishArticle: publishArticle_publishArticle | null;
}

export interface publishArticleVariables {
  id?: string | null;
  version?: number | null;
  owner?: ResourceIdentifierInput | null;
  signature?: string | null;
  updateComment?: string | null;
}
