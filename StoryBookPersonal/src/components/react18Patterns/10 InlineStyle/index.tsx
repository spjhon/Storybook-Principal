import { useState, ChangeEvent } from 'react'


/**
Este componente de React, `FontSize`, está diseñado para mostrar un input numérico que permite ajustar dinámicamente el tamaño de la fuente mediante estilos en línea. Aquí está la explicación detallada del código:

```jsx
import { useState, ChangeEvent } from 'react'
const FontSize = () => {
  const [value, setValue] = useState<number>(16)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(Number(e.target.value))
  }

  return ( 
    <input 
      type="number" 
      value={value} 
      onChange={handleChange} 
      style={{ fontSize: value }} 
    /> 
  )
}

export default FontSize
```

1. **Estado y Función de Cambio**: 
   - Utiliza el hook `useState` para mantener el estado del tamaño de la fuente (`value`), inicializado en 16.
   - `setValue` es una función que actualiza el estado `value` con el nuevo valor del input.

2. **Manejo de Cambios**:
   - `handleChange` es un manejador de eventos que se dispara cada vez que el valor del input cambia.
   - Convierte el valor del input (`e.target.value`) en un número usando `Number()` y lo establece como el nuevo valor de `value`.

3. **Renderizado**:
   - Renderiza un `<input>` de tipo número (`type="number"`).
   - El valor (`value`) del input está vinculado al estado `value`, por lo que muestra el tamaño de la fuente actual.
   - El evento `onChange` está vinculado a `handleChange`, lo que significa que cada vez que el usuario cambia el valor del input, se llama a `handleChange` para actualizar `value`.
   - Usa `style={{ fontSize: value }}` para aplicar estilos en línea dinámicos. El tamaño de la fuente (`fontSize`) se establece en el valor actual de `value`, por lo que la fuente cambia en tiempo real según el valor del input.

4. **Exportación**:
   - Exporta el componente `FontSize` para que pueda ser utilizado en otras partes de la aplicación.

Este componente es útil para ajustar visualmente el tamaño de la fuente en tiempo real, lo que puede ser útil en aplicaciones donde se necesita una personalización rápida y directa del estilo por parte del usuario.
 */
const FontSize = () => {
  const [value, setValue] = useState<number>(16)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    setValue(Number(e.target.value))
  }

  return ( 
    <input 
      type="number" 
      value={value} 
      onChange={handleChange} 
      style={{ fontSize: value }} 
    /> 
  )
}

export default FontSize