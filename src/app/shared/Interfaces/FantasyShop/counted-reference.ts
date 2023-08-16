import { ApiReference } from "./api-reference";

// A terminal option. Contains a reference to something else in the API along with a count.
export interface CountedReference {
  count: number; // Count
  of: ApiReference; // Thing being referenced
}
