import { IncomeOutcome } from "../models/income-outcome.interface";

export interface AppState {
    incomes: ReadonlyArray<IncomeOutcome>;
  }