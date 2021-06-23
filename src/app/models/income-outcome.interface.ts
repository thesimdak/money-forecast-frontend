import { Regularity } from "./regularity.interface";

export interface IncomeOutcome {
  id?: string,
  name: string,
  balance: number,
  currency: string,
  regularity: Regularity
}
