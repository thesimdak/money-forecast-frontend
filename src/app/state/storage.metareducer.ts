import {ActionReducer, Action} from '@ngrx/store';
import {merge} from 'lodash';
import { MetaReducer } from "@ngrx/store";

function setSavedState(state: any, localStorageKey: string) {
  localStorage.setItem(localStorageKey, JSON.stringify(state));
}
function getSavedState(localStorageKey: string): any {
  return JSON.parse(localStorage.getItem(localStorageKey));
}

// the key for the local storage.
const localStorageKey = '__money_forecast__';


//console.log all actions
export function storageMetaReducer<S, A extends Action = Action> (reducer: ActionReducer<S, A>): ActionReducer<any> {
    let onInit = true; 

    // return reducer(state, action);
     return function(state: S, action: A): S {
         // reduce the nextState.
         const nextState = reducer(state, action);
         // init the application state.
         if (onInit) {
           onInit           = false;
           const savedState = getSavedState(localStorageKey);
           return merge(nextState, savedState);
         }
         // save the next state to the application storage.
         const stateToSave = nextState;
         setSavedState(stateToSave, localStorageKey);
         return nextState;

   };
}
 
export const metaReducers: MetaReducer<any>[] = [storageMetaReducer];