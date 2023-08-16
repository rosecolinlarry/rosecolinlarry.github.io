import { ApiReference } from "./api-reference";

// A terminal option.
// Contains a reference to an ability score and a bonus
export interface AbilityBonus {
  ability_score: ApiReference; // Ability score being referenced
  bonus: number; // The bonus being applied to the ability score
}
