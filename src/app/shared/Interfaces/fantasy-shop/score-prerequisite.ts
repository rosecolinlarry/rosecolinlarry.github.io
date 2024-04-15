// A terminal option.

import { ApiReference } from "./api-reference";

// Contains a reference to an ability score and a minimum score.
export interface ScorePrerequisite {
  // Ability score being referenced.
  ability_score: ApiReference;
  // The minimum score required to satisfy the prerequisite.
  minimum_score: number;
}
