import { useRef } from 'react'


/**

El hook `useRef` de React es una herramienta poderosa para crear y manipular referencias mutables a elementos del DOM o cualquier valor persistente que desees mantener entre renderizados. A continuación, te explicaré en profundidad cómo funciona `useRef` y cómo se aplica en el ejemplo que proporcionaste.

### ¿Qué es `useRef`?

`useRef` es un hook de React que devuelve un objeto mutable cuya propiedad `.current` está inicializada al valor pasado como argumento. Este objeto persistirá durante toda la vida del componente.

### Características principales de `useRef`:

1. **Persistencia entre renderizados**: La referencia creada por `useRef` no se resetea entre renderizados. Esto significa que puedes mantener un valor mutable sin provocar un nuevo renderizado cuando cambias su valor.
2. **Acceso directo al DOM**: Es útil para acceder y manipular elementos del DOM de manera imperativa.
3. **No dispara re-renderizados**: A diferencia de `useState`, cambiar la propiedad `.current` de una referencia no provoca un nuevo renderizado del componente.

### Ejemplo explicado:

```jsx
import { useRef } from 'react'

const Focus = () => {
  const inputRef = useRef<any>(null)

  const handleClick = () => { 
    inputRef.current.focus()
  }

  return ( 
    <> 
      <input 
        type="text" 
        ref={inputRef} 
      /> 
      <button onClick={handleClick}>Set Focus</button> 
    </> 
  )
}

export default Focus
```

Vamos a desglosar el ejemplo paso a paso:

1. **Importación de `useRef`**:
   ```jsx
   import { useRef } from 'react'
   ```
   Aquí importamos el hook `useRef` desde React.

2. **Definición del componente `Focus`**:
   ```jsx
   const Focus = () => {
   ```
   Definimos un componente funcional llamado `Focus`.

3. **Creación de la referencia `inputRef`**:
   ```jsx
   const inputRef = useRef<any>(null)
   ```
   Usamos `useRef` para crear una referencia `inputRef` inicializada a `null`. Esta referencia será utilizada para apuntar al elemento `<input>` en el DOM.

4. **Definición de la función `handleClick`**:
   ```jsx
   const handleClick = () => { 
     inputRef.current.focus()
   }
   ```
   Definimos una función `handleClick` que se ejecuta cuando se hace clic en el botón. Esta función usa la referencia `inputRef` para acceder al elemento `<input>` y llamar a su método `.focus()`, lo que hará que el input reciba el foco.

5. **Renderizado del componente**:
   ```jsx
   return ( 
     <> 
       <input 
         type="text" 
         ref={inputRef} 
       /> 
       <button onClick={handleClick}>Set Focus</button> 
     </> 
   )
   ```
   En el retorno del componente:
   - Renderizamos un elemento `<input>` de tipo texto y asignamos la referencia `inputRef` a su atributo `ref`. Esto hace que `inputRef.current` apunte al elemento `<input>`.
   - Renderizamos un botón que, al ser clicado, ejecuta la función `handleClick`.

### Resumen

En este ejemplo, `useRef` se usa para:
- Crear una referencia (`inputRef`) que se asocia al elemento `<input>`.
- Acceder y manipular imperativamente el elemento del DOM (en este caso, enfocar el input) sin provocar re-renderizados innecesarios del componente.

Esta técnica es útil cuando necesitas interactuar directamente con elementos del DOM, como establecer el foco, reproducir o pausar un video, o leer valores actuales de los elementos del DOM sin tener que depender de estados que podrían provocar renderizados adicionales.

*/
const Focus = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => { 
    /**Añadimos una verificación para asegurarnos de que inputRef.current no sea null antes de llamar a focus(). Esto evita posibles errores en tiempo de ejecución. */
    if (inputRef.current) {
        inputRef.current.focus();
      }
  }

  return ( 
    <> 
      <input 
        type="text" 
        ref={inputRef} 
      /> 
      <button onClick={handleClick}>Set Focus</button> 
    </> 
  )
}

export default Focus