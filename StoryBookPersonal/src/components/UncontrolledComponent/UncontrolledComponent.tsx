import { FC, useState, ChangeEvent, FormEvent } from "react";

interface Values {
  firstName: string;
  lastName: string;
}

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
      />

      <input
        type="text"
        name="lastName"
        onChange={handleChange}
      />

      <button>Submit</button>
      
    </form> 
  );
};

export default Uncontrolled;
