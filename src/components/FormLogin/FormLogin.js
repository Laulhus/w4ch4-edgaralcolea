import { useContext } from "react";
import FormContext from "../../contexts/FormContext/FormContext";

const FormLogin = () => {
  const { setFormState } = useContext(FormContext);
  return (
    <form className="d-flex flex-column col-4 justify-content-center">
      <label>
        Username:
        <input type="text" name="name" />
      </label>
      <label>
        Password:
        <input type="text" name="name" />
      </label>
      <label>
        Remember Password:
        <input type="checkbox" name="name" />
      </label>

      <input type="submit" value="Previous" onClick={() => setFormState(2)} />
    </form>
  );
};
export default FormLogin;
