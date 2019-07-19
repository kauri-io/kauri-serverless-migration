/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { EventStatusInput } from "./../../__generated__/globalTypes";

// ====================================================
// GraphQL subscription operation: getEvent
// ====================================================

export interface getEvent_getEvent {
  __typename: "Event_EventDetails";
  id: string | null;
  name: string | null;
  correlationId: string | null;
  source: string | null;
  output: any | null;
  status: EventStatusInput | null;
}

export interface getEvent {
  /**
   * Subscribe to events by hash (commandHash)
   * This operation can be performed anonymously
   */
  getEvent: getEvent_getEvent | null;
}

export interface getEventVariables {
  hash: string;
}
