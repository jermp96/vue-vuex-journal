import journalApi from "../../api/journalApi"
import type { Entry } from "./state";

export const myAction = async (/*{commit}*/) => {

}

export const loadEntries = async ({ commit }) => {
  const {data} = await journalApi.get('/entries.json');
  const entries: Array<Entry> = [];

  for(const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id]
    })
  }
  commit('setEntries', entries);
}

export const updatEntry = async (/*{ commit }*/) => {
  
}

export const createEntry = async (/*{ commit }*/) => {
  
}

