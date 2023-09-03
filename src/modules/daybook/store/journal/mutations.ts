import type { Entry, JournalState } from "./state";

export const myMutation = (state: any) => {

}

export const setEntries = (state: JournalState, entries: Array<Entry>) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
}

export const updateEntries = (/*state*/) => {
  
}

export const addEntries = (/*state*/) => {
  
}