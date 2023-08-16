// When this option is chosen, all of its child
// options are chosen, and must be resolved the

import { Option } from "./option";

// same way as a normal option.
export interface Multiple {
  // An array of Options objects
  // All of them must be taken if the option is chosen
  items: Option[];
}
