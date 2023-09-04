export interface JournalState {
  isLoading: boolean;
  entries: Array<Entry>
}

export interface Entry {
  id?: string;
  date: string
  text: string;
  picture?:string | null;
}

export default () => ({
  isLoading: true,
  entries: []
} as JournalState)