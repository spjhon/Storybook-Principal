import { FC, useState, ChangeEvent, FormEvent } from "react";

interface Values {
  firstName: string;
  lastName: string;
}

/** 
# Componente controlado

En un componente controlado, el estado del formulario es manejado completamente por el componente React. Cada elemento del 
formulario (como los campos de entrada) tiene su valor controlado por el estado del componente. Los cambios en el formulario 
actualizan el estado del componente, y los valores en el formulario se derivan de ese estado.

```jsx
<input
  type="text"
  name="firstName"
  value={values.firstName}
  onChange={handleChange}
/>
```
## Tips

- Se recomienda utilizar siempre componentes controlados



*/
const Controlled: FC = () => {
  const [values, setValues] = useState<Values>({ firstName: "", lastName: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`${values.firstName} ${values.lastName}`, values);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { name, value },
    } = e;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        title="prueba"
      />

      <input
        type="text"
        name="lastName"
        // Esto es lo que hace que sea controlado
        value={values.lastName}
        onChange={handleChange}
        title="prueba"
      />

      <button>Submit</button>
    </form>
  );
};

export default Controlled;
