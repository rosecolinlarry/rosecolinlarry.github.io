import { ApiReference } from "./api-reference";

// Result from getting all available resources for an endpoint
export interface ResourceList {
  count: number; // Number of results
  results: ApiReference[]; // Result list
}
