// List.tsx
import { FC, useEffect, memo } from 'react';
import Task from './Task';

export type Todo = {
  id: number;
  task: string;
};

interface Props {
  todoList: Todo[];
  handleDelete: (id: number) => void;
}

const List: FC<Props> = ({ todoList, handleDelete }) => {
  useEffect(() => {
    console.log('Rendering <List />'); // Log whenever List component renders
  });

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <Task
          key={todo.id}
          id={todo.id}
          task={todo.task}
          handleDelete={handleDelete} // Pass handleDelete to Task component
        />
      ))}
    </ul>
  );
};



const MemoizedList = memo(List); // Memoize List component

export default MemoizedList; // Explicitly name the export