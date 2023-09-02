export interface JournalState {
  isLoading: boolean;
  entries: Array<Entry>
}

export interface Entry {
  id: number;
  date: string
  text: string;
  picture:string | null;
}

export default () => ({
  isLoading: true,
  entries: [
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: 'Et proident qui proident voluptate aliqua dolor sit veniam aute eu. Et exercitation magna est occaecat aliqua ea nisi magna duis consectetur fugiat ad dolor. Proident excepteur dolor consequat sunt id. Laborum magna laboris sint nisi consectetur culpa Lorem occaecat eiusmod sunt. Lorem deserunt enim sint ad proident magna deserunt. Irure do fugiat reprehenderit cupidatat anim excepteur cupidatat consequat deserunt duis Lorem. Do amet commodo adipisicing occaecat qui ex proident.',
      picture: null
    },
    {
      id: new Date().getTime() + 1001,
      date: new Date().toDateString(),
      text: 'Esse qui ex laboris laboris consequat sint ad dolor sunt ipsum qui elit non. Ad est et ex culpa in do occaecat nulla nostrud incididunt minim nisi. Adipisicing occaecat ullamco magna do fugiat reprehenderit consectetur incididunt ea. Anim cupidatat anim ea est laborum eiusmod aliqua nostrud reprehenderit officia qui. Est exercitation qui tempor nostrud. Ad dolor ea minim magna consequat consequat exercitation. Aliquip aliqua mollit eu elit eu amet mollit incididunt labore duis pariatur.',
      picture: null
    },
    {
      id: new Date().getTime() + 1002,
      date: new Date().toDateString(),
      text: 'Lorem dolore laborum labore Lorem. Ea elit voluptate dolor irure pariatur ea incididunt qui laborum cillum adipisicing sit. Reprehenderit in consectetur duis elit velit et nisi culpa consequat tempor in.',
      picture: null
    },
  ]
} as JournalState)