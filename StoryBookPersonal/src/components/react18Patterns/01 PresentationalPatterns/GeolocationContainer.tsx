import { useEffect, useState } from 'react'

import Geolocation from './Geolocation'

/**
Para entender completamente los componentes "container" y de "tipo presentación" en React, examinemos los ejemplos de código proporcionados: `GeolocationContainer` y `Geolocation`.

### Componente Container: GeolocationContainer

```typescript
const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const handleSuccess = ({
    //Esta primera parte es el destructurado para tener latitude y longitude disponibles dentro de la funcion
    coords: { latitude, longitude },
  }: {
    // Esta es la parte de typescript en donde se define los types de los props que entran y que estan disponibles dentro de la funcion
    
    coords: { latitude: number; longitude: number }
  }) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  return <Geolocation latitude={latitude} longitude={longitude} />
}

export default GeolocationContainer
```

El componente `GeolocationContainer` es un ejemplo de un **componente contenedor**. Los componentes contenedores están encargados de manejar la lógica y el estado de la aplicación. Son responsables de obtener datos, procesarlos y pasarlos a los componentes de presentación. En este caso, `GeolocationContainer` realiza las siguientes tareas:

1. **Manejo del Estado**:
   ```typescript
   const [latitude, setLatitude] = useState<number | null>(null)
   const [longitude, setLongitude] = useState<number | null>(null)
   ```
   Usa el hook `useState` para definir y manejar el estado de `latitude` y `longitude`.

   It is important to note that, during the first render, the latitude and longitude are null because we asked the browser for the coordinates when the component was mounted. In a real-world component, you might want to display a spinner until the data gets returned.


2. **Manejo de Efectos Secundarios**:
   ```typescript
   useEffect(() => {
     if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(handleSuccess)
     }
   }, [])
   ```
   Usa el hook `useEffect` para ejecutar un efecto secundario: obtener la ubicación actual del usuario cuando el componente se monta.

3. **Lógica de Negocio**:
   ```typescript
   const handleSuccess = ({
     coords: { latitude, longitude },
   }: {
     coords: { latitude: number; longitude: number }
   }) => {
     setLatitude(latitude)
     setLongitude(longitude)
   }
   ```
   Define una función `handleSuccess` para manejar la respuesta exitosa de la API de geolocalización, actualizando el estado con las coordenadas obtenidas.

4. **Renderizado de Componentes de Presentación**:
   ```typescript
   return <Geolocation latitude={latitude} longitude={longitude} />
   ```
   Renderiza el componente `Geolocation` pasando las coordenadas como props.

### Componente de Presentación: Geolocation

At the same time, other developers in our team can improve the container that uses geolocation by adding some error-handling logic, without affecting its presentation.

```typescript
import { FC } from 'react'

type Props = {
  latitude: number | null
  longitude: number | null
}

const Geolocation: FC<Props> = ({ latitude, longitude }) => (
  <div>
    <h1>Geolocation:</h1>
    <div>Latitude: {latitude}</div>
    <div>Longitude: {longitude}</div>
  </div>
)

export default Geolocation
```

El componente `Geolocation` es un ejemplo de un **componente de presentación**. Los componentes de presentación se encargan de recibir datos (props) y renderizar la UI basándose en esos datos. No manejan estado propio ni lógica de negocio significativa. En este caso, `Geolocation` realiza las siguientes tareas:

1. **Definición de Props**:
   ```typescript
   type Props = {
     latitude: number | null
     longitude: number | null
   }
   ```
   Define el tipo de las props que espera recibir (`latitude` y `longitude`).

2. **Renderizado**:
   ```typescript
   const Geolocation: FC<Props> = ({ latitude, longitude }) => (
     <div>
       <h1>Geolocation:</h1>
       <div>Latitude: {latitude}</div>
       <div>Longitude: {longitude}</div>
     </div>
   )
   ```
   Renderiza un simple HTML que muestra la latitud y longitud recibidas a través de las props.

### Resumen

1. **Componente Container (GeolocationContainer)**:
   - Maneja el estado de la aplicación.
   - Ejecuta lógica de negocio (obtener coordenadas de geolocalización).
   - Pasa datos a los componentes de presentación.
   - Puede contener efectos secundarios y lógica compleja.

2. **Componente de Presentación (Geolocation)**:
   - Renderiza UI basándose en las props recibidas.
   - No maneja estado propio ni lógica compleja.
   - Se enfoca en cómo se deben mostrar los datos.

Este patrón de dividir la lógica de negocio (contenedor) de la lógica de presentación (componente de presentación) ayuda a mantener el código organizado, reutilizable y fácil de mantener.
 */
const GeolocationContainer = () => {
  const [latitude, setLatitude] = useState<number | null>(null)
  const [longitude, setLongitude] = useState<number | null>(null)

  const handleSuccess = ({
    //Esta primera parte es el destructurado para tener latitude y longitude disponibles dentro de la funcion
    coords: { latitude, longitude },
  }: {
    // Esta es la parte de typescript en donde se define los "types" de los props que entran y que estan disponibles dentro de la funcion
    
    coords: { latitude: number; longitude: number }
  }) => {
    setLatitude(latitude)
    setLongitude(longitude)
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(handleSuccess)
    }
  }, [])

  return <Geolocation latitude={latitude} longitude={longitude} />
}

export default GeolocationContainer
