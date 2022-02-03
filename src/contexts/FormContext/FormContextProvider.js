import { useState } from "react";
import FormContext from "./FormContext";

const FormContextProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthdate: "",
    email: "",
    username: "",
    password: "",
  });

  const [formState, setFormState] = useState(1);
  const setName = (string) => {
    setFormData({ ...formData, name: string });
  };

  return (
    <FormContext.Provider
      value={{
        formData,
        setFormData,
        formState,
        setFormState,
        setName,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
export default FormContextProvider;
