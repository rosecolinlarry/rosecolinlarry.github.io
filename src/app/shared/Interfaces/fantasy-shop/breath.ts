import { Damage } from "./damage";
import { DifficultyCheck } from "./difficulty-check";

// A terminal option: Contains a reference to information about a breath attack.
export interface Breath {
  name: string; // Name of the breath.
  dc: DifficultyCheck; // Difficulty check of the breath attack.
  damage: [Damage] // Damage dealt by the breath attack, if any
}
