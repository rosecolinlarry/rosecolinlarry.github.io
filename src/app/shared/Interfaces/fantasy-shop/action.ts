// A terminal option.
// Contains information describing an action,

import { ActionType } from "../../Enums/action-type";

// for use within Multiattack actions.
export interface Action {
  // The name of the action, according to its name attribute.
  action_name: string;
  // The number of times this action can be repeated if this option is chosen.
  count: number | string;
  //  For attack actions that can be either melee, ranged, abilities, or magic.
  type: ActionType | undefined;
}
