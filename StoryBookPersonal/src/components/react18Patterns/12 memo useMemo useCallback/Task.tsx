// Task.tsx
import { FC, useEffect, memo } from 'react';

interface Props {
  id: number;
  task: string;
  handleDelete: (id: number) => void;
}

const Task: FC<Props> = ({ id, task, handleDelete }) => {
  useEffect(() => {
    console.log('Rendering <Task />', task); // Log whenever Task component renders
  });

  return (
    <li>
      {task} 
      <button onClick={() => handleDelete(id)}>X</button> {/* Delete button */}
    </li>
  );
};

const MemoizedTask = memo(Task); // Memoize Task component

export default MemoizedTask; // Explicitly name the export

/* UNA NOTA IMPORTANTE SOBRE POR QUE SEPARAR EL COMPONENTE QUE RENDERIZA LA LISTA CON LOS ITEMS DE SUSODICHA LISTA

Es una buena práctica separar el elemento de la lista (Task en este caso) como un componente independiente del componente que renderiza la lista (List). Esto se alinea con varios principios de desarrollo de software que promueven la modularidad, la reutilización de código y la claridad en la estructura del código.

Aquí hay algunas razones por las cuales separar estos componentes es beneficioso:

Modularidad: Cada componente tiene una responsabilidad única y clara. El componente Task se encarga específicamente de renderizar una tarea individual, mientras que List se encarga de manejar la lista completa de tareas.

Reutilización: Al separar Task, puedes reutilizar este componente en otras partes de tu aplicación donde necesites mostrar tareas individuales.

Mantenibilidad: Facilita la mantenibilidad del código al tener componentes más pequeños y específicos. Esto hace más fácil entender, depurar y realizar cambios en el código relacionado con tareas individuales o listas de tareas.

Rendimiento: Usar memoización (memo en React) en Task y List ayuda a optimizar el rendimiento al evitar renderizados innecesarios cuando las props no cambian.

Si bien separar estos componentes es una buena práctica general, no siempre es necesario o adecuado en todos los casos. Depende del contexto y la complejidad de la aplicación. En casos simples o cuando la lógica es muy específica y no se reutiliza, podría no ser tan crucial separarlos. Sin embargo, para aplicaciones más grandes o cuando se anticipa la necesidad de reutilización y mantenibilidad a largo plazo, separarlos es altamente recomendable.
*/