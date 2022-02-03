import { useContext } from "react";
import FormContext from "../../contexts/FormContext/FormContext";

const Form = () => {
  const { formData, setFormState, setFormData } = useContext(FormContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      [event.target.lastName]: event.target.value,
      [event.target.birthdate]: event.target.value,
      [event.target.email]: event.target.value,
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="d-flex flex-column col-4 justify-content-center"
    >
      <label>
        Name:
        <input type="text" name="name" onChange={handleChange} />
      </label>
      <label>
        Last name:
        <input type="text" name="lastName" onChange={handleChange} />
      </label>
      <label>
        Birthday:
        <input type="text" name="birthdate" onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="text" name="email" onChange={handleChange} />
      </label>
      <input type="submit" value="Next" onClick={() => setFormState(2)} />
    </form>
  );
};
export default Form;
