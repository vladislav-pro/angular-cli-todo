import {Todo} from "./Todo";

export const MockedTodoList: Todo[] = [
  {
    id: 1,
    text: 'wash dishes',
    day: 'monday at 11am',
    reminder: true,
  },
  {
    id: 2,
    text: 'go to the gym',
    day: 'monday at 4pm',
    reminder: false,
  },
  {
    id: 3,
    text: 'home study',
    day: 'tuesday at 1pm',
    reminder: true,
    time: 4,
  },
  {
    id: 4,
    text: 'home workout',
    day: 'tuesday at 4pm',
    reminder: false,
  },  {
    id: 5,
    text: 'meet friends',
    day: 'friday at 8pm',
    reminder: false,
    time: 2,
  }
];

