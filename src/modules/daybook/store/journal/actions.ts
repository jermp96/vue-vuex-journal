import journalApi from "../../api/journalApi"

export const myAction = async (/*{commit}*/) => {

}

export const loadEntries = async (/*{ commit }*/) => {
  const {data} = await journalApi.get('/entries.json');
  console.log(data);
}

export const updatEntry = async (/*{ commit }*/) => {
  
}

export const createEntry = async (/*{ commit }*/) => {
  
}

