import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [formPersonalData, setFormPersonalData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
  });
  const [formAccessData, setFormAccessData] = useState({
    username: "",
    password: "",
  });
  const [formLoginData, setFormLoginData] = useState({
    username: "",
    password: "",
  });
  const [formState, setFormState] = useState(1);
  return (
    <FormContext.Provider
      value={{
        formPersonalData,
        setFormPersonalData,
        formAccessData,
        setFormAccessData,
        formState,
        setFormState,
        formLoginData,
        setFormLoginData,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
