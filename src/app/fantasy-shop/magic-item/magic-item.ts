import { RarityEnum } from "../../shared/Enums/rarity";
import { ApiReference } from "../../shared/interfaces/fantasy-shop/api-reference";

export class MagicItem {
  index: string; // Resource index for shorthand searching.
  name: string; // Name of the referenced resource.
  url: string; // URL of the referenced resource.
  desc: string[]; // Description of the resource.
  equipment_category: ApiReference;
  rarity: {
    name: RarityEnum // The rarity of the item.
  };
  variants: ApiReference[];
  variant: boolean;   // Whether this is a variant or not
  constructor() {
    this.index = "";
    this.name = "";
    this.url = "";
    this.desc = [];
    this.equipment_category = { index: "", name: "", url: "" };
    this.rarity = { name: RarityEnum.Common };
    this.variants = [];
    this.variant = false;
  }
}


