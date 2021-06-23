import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IncomeOutcome } from "../../models/income-outcome.interface";
 
export const selectIncomes = createSelector(
  (state: AppState) => state.incomes,
  (incomes: Array<IncomeOutcome>) => incomes
);
 
