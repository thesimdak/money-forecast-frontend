import { Currency } from "./currency.interface";
import { Regularity } from "./regularity.interface";

export interface Income {
  name: string,
  balance: number,
  currency: string,
  regularity: Regularity
}
