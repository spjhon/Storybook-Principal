import { FC, useState, ChangeEvent, FormEvent } from "react";

interface Values {
  firstName: string;
  lastName: string;
}

/*En un componente no controlado, el estado del formulario no es manejado por el componente React. En su lugar, se accede 
directamente a los elementos del DOM para obtener sus valores cuando sea necesario (por ejemplo, al enviar el formulario).*/

const Uncontrolled: FC = () => {

  
  const [values, setValues] = useState<Values>({ firstName: '', lastName: '' })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => { 
    e.preventDefault()
     
    console.log(`${values.firstName} ${values.lastName}`, values)
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target: { name, value } } = e

    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        title="prueba"
      />

      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        title="prueba"
      />

      <button>Submit</button>
      
    </form> 
  );
};

export default Uncontrolled;
