import { AbilityBonus } from "./ability-bonus";
import { Action } from "./action";
import { Breath } from "./breath";
import { Choice } from "./choice";
import { CountedReference } from "./counted-reference";
import { Damage } from "./damage";
import { Ideal } from "./ideal";
import { Multiple } from "./multiple";
import { Reference } from "./reference";
import { ScorePrerequisite } from "./score-prerequisite";
import { String } from "./string";

export interface Option {
  reference: Reference | undefined;
  action: Action | undefined;
  multiple: Multiple | undefined;
  choice : Choice | undefined;
  string : String | undefined;
  ideal : Ideal | undefined;
  counted_reference: CountedReference | undefined;
  score_prerequisite: ScorePrerequisite | undefined;
  ability_bonus: AbilityBonus | undefined;
  breath: Breath | undefined;
  damage: Damage | undefined
}
