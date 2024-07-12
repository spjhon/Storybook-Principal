// import { fn } from "@storybook/test";

import Notes from './Notes.tsx';

type NoteAction = 
  | { type: 'ADD'; payload: { id: number; note: string } }
  | { type: 'DELETE'; payload: number }
  | { type: 'UPDATE'; payload: { id: number; note: string } };

type Dispatch = (action: NoteAction) => void;

export const ActionsData = {
  addNote: (dispatch: Dispatch) => dispatch({ type: 'ADD', payload: { id: 3, note: 'New Note' } }),
  deleteNote: (dispatch: Dispatch) => dispatch({ type: 'DELETE', payload: 1 }),
  updateNote: (dispatch: Dispatch) => dispatch({ type: 'UPDATE', payload: { id: 2, note: 'Updated Note 2' } }),
};

export default {
  component: Notes,
  title: 'React18 Patterns Book/useReducer',
  tags: [],
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  args: {
    ...ActionsData,
  },
};

export const UnicoRender = {
  args: {
    initialNotes: [
      {
        id: 1,
        note: 'Note 1',
      },
      {
        id: 2,
        note: 'Note 2',
      },
    ],
    onAddNote: ActionsData.addNote,
    onDeleteNote: ActionsData.deleteNote,
    onUpdateNote: ActionsData.updateNote,
  },
};
