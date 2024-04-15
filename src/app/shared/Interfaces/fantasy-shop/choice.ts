import { OptionSet } from "./option-set";

// Represents a choice made by a player.
// Commonly seen related to decisions made
// during character creation or combat
// (e.g.: the description of the cleric class,
// under Proficiencies, states
// "Skills: Choose two from History, Insight, Medicine,
// Persuasion, and Religion" [SRD p15])
export interface Choice {
  desc: string;
  choose: number;
  type: string;
  from: OptionSet;
}
