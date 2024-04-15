import { ApiReference } from "./api-reference";

// A terminal option. Contains information about an ideal.
export interface Ideal {
  // A description of the ideal
  desc: string;
  // A list of alignments of those who might follow the ideal
  alignments: ApiReference[];
}
