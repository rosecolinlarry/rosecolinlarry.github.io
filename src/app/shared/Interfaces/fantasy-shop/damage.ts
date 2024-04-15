import { ApiReference } from "./api-reference";

// A terminal option. Contains information about damage.
export interface Damage {
  damage_type: ApiReference; // Reference to type of damage
  damage_dice: string; // Damage expressed in dice (e.g. "13d6")
  notes: string; // Information regarding the damage
}
