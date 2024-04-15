import { SuccessType } from "../../Enums/success-type";
import { ApiReference } from "./api-reference";

// Represents a difficulty check AKA "DC"
export interface DifficultyCheck {
  dc_type: ApiReference;
  dc_value: number;
  success_type: SuccessType
}
