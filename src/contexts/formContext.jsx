import { createContext } from "react";
import { useForm } from "react-hook-form";

export const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  return (
    <FormContext.Provider value={{ register, handleSubmit, errors }}>
      {children}
    </FormContext.Provider>
  );
};

export default FormContextProvider;
