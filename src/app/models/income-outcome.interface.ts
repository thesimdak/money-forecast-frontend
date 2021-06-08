import { Regularity } from "./regularity.interface";

export interface IncomeOutcome {
  name: string,
  balance: number,
  currency: string,
  regularity: Regularity
}
