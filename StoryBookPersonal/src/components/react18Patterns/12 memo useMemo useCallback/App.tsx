// App.tsx
import { FC, useState, useEffect, useMemo, useCallback, ChangeEvent } from 'react';
import List, { Todo } from './List.tsx';

// Initial list of todos
const initialTodos: Todo[] = [
  { id: 1, task: 'Go shopping' },
  { id: 2, task: 'Pay the electricity bill' }
];

/** ALGO CURIOSO SOBRE TYPESCRIPT:
Sí, exactamente. En TypeScript es común definir tipos, interfaces, y otros tipos de datos en archivos separados para luego importarlos en otros archivos donde los necesites. Esto ayuda a mantener un código más organizado y reutilizable.

Por ejemplo, podrías tener un archivo llamado `types.ts` o `types.d.ts` donde defines todos tus tipos:

```typescript
// types.ts

export type Todo = {
  id: number;
  task: string;
};

export interface Props {
  todoList: Todo[];
  handleDelete: (id: number) => void;
}

// Otros tipos y interfaces
```

Y luego, en tus componentes u otros archivos TypeScript, puedes importar estos tipos como lo necesites:

```typescript
// List.tsx

import { FC, useEffect, memo } from 'react';
import Task from './Task';
import { Todo, Props } from './types';

const List: FC<Props> = ({ todoList, handleDelete }) => {
  // ...
};
```

De esta manera, aseguras consistencia en los tipos utilizados a lo largo de tu aplicación y facilitas la mantenibilidad al centralizar las definiciones de tipos en un solo lugar.
*/
const App: FC = () => {
  const [todoList, setTodoList] = useState<Todo[]>(initialTodos); // State for the list of todos
  const [task, setTask] = useState<string>(''); // State for the new task input
  const [term, setTerm] = useState<string>(''); // State for the search term

  useEffect(() => {
    console.log('Rendering <App />'); // Log whenever App component renders
  });

  // Function to create a new todo
  const handleCreate = () => {
    const newTodo = { id: Date.now(), task };
    setTodoList([...todoList, newTodo]); // Add the new todo to the list
    setTask(''); // Reset the input field
  };

  // Function to delete a todo
  const handleDelete = useCallback((taskId: number) => {
    const newTodoList = todoList.filter((todo: Todo) => todo.id !== taskId);
    setTodoList(newTodoList); // Update the list without the deleted todo
  }, [todoList]); // Dependencies: todoList

  // Function to handle the search term input
  const handleSearch = () => {
    setTerm(task); // Set the search term to the current task input
  };

  // Memoized filtered list of todos based on the search term
  const filteredTodoList = useMemo(() => 
    todoList.filter((todo: Todo) => 
      todo.task.toLowerCase().includes(term.toLowerCase())
    ), 
    [term, todoList] // Dependencies: term, todoList
  );

  return (
    <>
      <input
        type="text"
        value={task}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)} // Update task state on input change
      />
      <button onClick={handleCreate}>Create</button> {/* Create button */}
      <button onClick={handleSearch}>Search</button> {/* Search button */}
      <List todoList={filteredTodoList} handleDelete={handleDelete} /> {/* List component */}
    </>
  );
};

export default App;