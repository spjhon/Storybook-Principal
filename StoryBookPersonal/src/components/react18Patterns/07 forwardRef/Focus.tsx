import { useRef } from "react";
import TextInputWithRef from "./TextInputWithRef";


/** 
Este es un componente doble o que utiliza un componente higher order, entonces son dos componentes:

El hook `forwardRef` en React se utiliza para pasar referencias de un componente padre a un componente hijo. Esto es útil cuando necesitas que un componente hijo exponga una referencia de un elemento del DOM al componente padre.

### Componente `TextInputWithRef`

```jsx
import { forwardRef, InputHTMLAttributes } from 'react';

const TextInputWithRef = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return <input ref={ref} type="text" {...props} />;
});

export default TextInputWithRef;
```

1. **Importaciones**:
   - `forwardRef`: Permite pasar referencias a través de componentes.
   - `InputHTMLAttributes`: Tipo de TypeScript que incluye todos los atributos HTML estándar para un input.

2. **Definición del componente**:
   ```jsx
   const TextInputWithRef = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
     return <input ref={ref} type="text" {...props} />;
   });
   ```
   - `forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>`: Especifica que el componente recibirá una referencia a un elemento `input` y los props serán de tipo `InputHTMLAttributes<HTMLInputElement>`.
   - `ref={ref}`: Asigna la referencia al elemento `input`.

### Componente `Focus`

```jsx
import { useRef } from "react";
import TextInputWithRef from "./TextInputWithRef";

function Focus() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    // Aseguramos que inputRef.current no sea null antes de llamar a focus().
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <TextInputWithRef ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );
}

export default Focus;
```

1. **Importaciones**:
   - `useRef`: Hook de React para crear referencias.
   - `TextInputWithRef`: Componente que acepta una referencia.

2. **Creación de la referencia**:
   ```jsx
   const inputRef = useRef<HTMLInputElement>(null);
   ```
   - `useRef<HTMLInputElement>(null)`: Crea una referencia a un elemento `input`, inicialmente `null`.

3. **Función `handleClick`**:
   ```jsx
   const handleClick = () => {
     if (inputRef.current) {
       inputRef.current.focus();
     }
   };
   ```
   - Verifica que `inputRef.current` no sea `null` antes de llamar a `focus()`, para evitar errores de tiempo de ejecución.
   - `inputRef.current.focus()`: Enfoca el elemento `input`.

4. **Renderizado del componente**:
   ```jsx
   return (
     <div>
       <TextInputWithRef ref={inputRef} />
       <button onClick={handleClick}>Focus on input</button>
     </div>
   );
   ```
   - `TextInputWithRef ref={inputRef}`: Pasa la referencia al componente hijo.
   - `button onClick={handleClick}`: Botón que, al ser clicado, enfoca el input.

### Resumen

1. **`forwardRef` en `TextInputWithRef`**:
   - Permite que el componente `TextInputWithRef` acepte una referencia.
   - La referencia se asigna al elemento `input`, permitiendo que el componente padre (`Focus`) acceda y manipule directamente el input.

2. **Uso de la referencia en `Focus`**:
   - `useRef` crea una referencia al elemento `input`.
   - La referencia se pasa a `TextInputWithRef`, permitiendo que `Focus` controle el foco del input.

Este enfoque es útil cuando necesitas encapsular la lógica del DOM en componentes reutilizables, pero aún quieres permitir que los componentes padres interactúen con los elementos del DOM dentro de esos componentes reutilizables.
*/
function Focus() {

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    /**Añadimos una verificación para asegurarnos de que inputRef.current no sea null antes de llamar a focus(). Esto evita posibles errores en tiempo de ejecución. */
    if (inputRef.current) {
        //algo importante que notar, current siempre se transforma en el elemento HTML en donde se encuentra dentro
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <TextInputWithRef ref={inputRef} />
      <button onClick={handleClick}>Focus on input</button>
    </div>
  );

}


export default Focus;
