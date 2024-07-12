import { useReducer, useState, FormEvent } from 'react';

// Definimos los tipos para las notas y las acciones en TypeScript
type Note = {
  id: number;
  note: string;
};

/*
type Action = {
  type: string;
  /el type estaba en any, pero any no le gusta a typescript
  payload?: Note;
};
*/

// esta es una opcion que permite ser mas exaustivo para los types que recibe el reducer
type Action =  | { type: 'ADD'; payload: Note } | { type: 'UPDATE'; payload: Note } | { type: 'DELETE'; payload: number };

type ActionTypes = {
  ADD: 'ADD';
  UPDATE: 'UPDATE';
  DELETE: 'DELETE';
};

// Definimos los tipos de acciones
const actionType: ActionTypes = {
  ADD: 'ADD',
  DELETE: 'DELETE',
  UPDATE: 'UPDATE'
};

// Estado inicial con algunas notas dummy
const initialNotes: Note[] = [
  {
    id: 1,
    note: 'Note 1'
  },
  {
    id: 2,
    note: 'Note 2'
  }
];

// Reducer function para manejar las acciones
const reducer = (state: Note[], action: Action) => {
  switch (action.type) {
    case actionType.ADD:
      return [...state, action.payload];
    case actionType.DELETE:
      return state.filter(note => note.id !== action.payload);
      //en el ejemplo no estaban estas curlyes {} envolviendo el consty y el return
    case actionType.UPDATE: {
      const updatedNote = action.payload;
      return state.map((n: Note) => n.id === updatedNote.id ? updatedNote : n);
    }
    default:
      return state;
  }
};

const Notes = () => {
  // useReducer Hook para manejar el estado de las notas y las acciones
  const [notes, dispatch] = useReducer(reducer, initialNotes);
  const [note, setNote] = useState<string>('');

  // Función para manejar el submit del formulario
  //el type estaba mal, en el libro esta como changeevent, pero en realidad es un formevent
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newNote = {
      id: Date.now(),
      note
    };
    dispatch({ type: actionType.ADD, payload: newNote });
  };

  return (
    <div>
      <h2>Notes</h2>
      <ul>
        {notes.map((n: Note) => (
          <li key={n.id}>
            {n.note} {' '}
            <button onClick={() => dispatch({ type: actionType.DELETE, payload: n.id })}>
              X
            </button>
            <button onClick={() => dispatch({ type: actionType.UPDATE, payload: { ...n, note } })}>
              Update
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="New note"
          value={note}
          onChange={e => setNote(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Notes;
