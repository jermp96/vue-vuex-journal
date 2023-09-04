import type { Entry, JournalState } from "./state";

export const myMutation = (state: any) => {

}

export const setEntries = (state: JournalState, entries: Array<Entry>) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
}

export const updateEntries = (state: JournalState, entry: Entry) => {
  const newEntries = [...state.entries.map( el => el.id === entry.id ? {...entry} : el)];
  state.entries = [...newEntries];
}

export const addEntry = (state: JournalState, entry: Entry) => {
  state.entries = [entry, ...state.entries]
}