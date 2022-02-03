import { useContext } from "react";
import FormContext from "../../contexts/FormContext/FormContext";

const FormAccess = () => {
  const { formAccessData } = useContext(FormContext);
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
        Repeat Password:
        <input type="text" name="name" />
      </label>

      <input type="submit" value="Submit" />
    </form>
  );
};
export default FormAccess;
