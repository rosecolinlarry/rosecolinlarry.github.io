import { ApiReference } from "./api-reference";
// A terminal option. Contains a reference to a Document that
// can be added to the list of options chosen.
export interface Reference {
  item: ApiReference; // A reference to the chosen item.
}
