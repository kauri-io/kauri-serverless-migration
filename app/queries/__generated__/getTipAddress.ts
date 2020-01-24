/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ResourceIdentifierInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: getTipAddress
// ====================================================

export interface getTipAddress_getTipAddress {
  __typename: "GetTipAddressResponse";
  address: string | null;
}

export interface getTipAddress {
  getTipAddress: getTipAddress_getTipAddress | null;
}

export interface getTipAddressVariables {
  resource?: ResourceIdentifierInput | null;
}
