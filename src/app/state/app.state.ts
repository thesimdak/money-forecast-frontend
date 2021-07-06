import { Account } from "../models/account.interface";
import { IncomeOutcome } from "../models/income-outcome.interface";

export interface AppState {
  incomes: ReadonlyArray<IncomeOutcome>;
  outcomes: ReadonlyArray<IncomeOutcome>;
  accounts: ReadonlyArray<Account>;
}