import type { Entry, JournalState } from "./state";

export const myGetter = (state: any) => {
  return state;
}

export const getEntriesByTerm = (state: JournalState) => (term: string) => {
  return (term.length === 0) 
  ? state.entries
  : state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLowerCase()));
}

export const getEntryById = (/*state: any */) => {
  
}