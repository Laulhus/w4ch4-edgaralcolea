import { useContext } from "react";
import FormContext from "../../contexts/FormContext/FormContext";

const FormAccess = () => {
  const { setFormState } = useContext(FormContext);
  return (
    <form className="d-flex flex-column col-4 justify-content-center">
      <label>
        Username:
        <input type="text" name="name" />
      </label>
      <label>
        Password:
        <input type="text" password="password" />
      </label>
      <label>
        Repeat Password:
        <input type="text" password="password" />
      </label>
      <input type="submit" value="Previous" onClick={() => setFormState(1)} />
      <input type="submit" value="Next" onClick={() => setFormState(3)} />
    </form>
  );
};
export default FormAccess;
