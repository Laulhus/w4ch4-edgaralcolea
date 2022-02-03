import { useContext } from "react";
import "./App.css";
import Form from "./components/Form/Form";
import FormAccess from "./components/FormAccess/FormAccess";
import FormLogin from "./components/FormLogin/FormLogin";
import FormContext from "./contexts/FormContext/FormContext";

function App() {
  const { formState } = useContext(FormContext);

  return (
    <div className="container row col-12 justify-content-center align-items-center">
      <h2 className="title">React Bootstrap Form</h2>
      <div className="">
        {formState === 1 ? <Form></Form> : ""}
        {formState === 2 ? <FormAccess></FormAccess> : ""}
        {formState === 3 ? <FormLogin></FormLogin> : ""}
      </div>
    </div>
  );
}

export default App;
