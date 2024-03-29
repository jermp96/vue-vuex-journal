import journalApi from "../../api/journalApi"
import type { Entry } from "./state";

export const myAction = async (/*{commit}*/) => {

}

export const loadEntries = async ({ commit }) => {
  const {data} = await journalApi.get('/entries.json');
  let entries: Array<Entry> = []
  if(!data) {
    entries = [];
  }
  if(data) {
    for(const id of Object.keys(data)) {
      entries.push({
        id,
        ...data[id]
      })
    }
  }
  commit('setEntries', entries);
}

export const updateEntry = async ({ commit }, payload: Entry) => {
  const {id, ...newEntry} = payload;

  const {data} = await journalApi.put(`/entries/${payload.id}.json`, newEntry);

  commit('updateEntries', {...payload});
}

export const createEntry = async ({ commit }, payload: Entry) => {
  const { data } = await journalApi.post('/entries.json', payload);
  payload = {id: data.name, ...payload};
  commit('addEntry', {...payload});
  return data.name;
}

export const deleteEntry = async({commit}, id) => {
  const { data } = await journalApi.delete(`/entries/${id}.json`);
  commit('deleteEntry', id);
}

