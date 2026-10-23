import FormDataContext from "./formData";
import { useReducer } from "react";

const initialState = {
  studentName: "",
  rollNumber: "",
  email: "",
  age: "",
  dob: "",
  section: "",
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
};

const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  return (
    <FormDataContext.Provider
      value={{ initialState, formReducer, formData, dispatch }}
    >
      {children}
    </FormDataContext.Provider>
  );
};

export default FormDataProvider;
