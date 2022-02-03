import { useContext } from "react";
import FormContext from "../../contexts/FormContext/FormContext";

const Form = () => {
  const { formPersonalData, setFormState } = useContext(FormContext);
  return (
    <form className="d-flex flex-column col-4 justify-content-center">
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Last name:
        <input type="text" name="name" />
      </label>
      <label>
        Birthday:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="text" name="name" />
      </label>
      <input type="submit" value="Next" onClick={setFormState(2)} />
    </form>
  );
};
export default Form;
