import { createContext } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
  });

  return (
    <FormContext.Provider value={{ register, handleSubmit, errors, reset }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
