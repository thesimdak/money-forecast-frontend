import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { IncomeOutcome } from "../../models/income-outcome.interface";
 
export const selectOutcomes = createSelector(
  (state: AppState) => state.outcomes,
  (outcomes: Array<IncomeOutcome>) => outcomes
);
 
