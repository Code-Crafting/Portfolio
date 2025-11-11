import { useContext } from "react";
import { FormContext } from "../../contexts/formContext";

const EmailInput = ({ id = "", placeholder = "", style = "" }) => {
  const { register } = useContext(FormContext);

  const validationRules = {
    required: { value: true, message: "This field is required" },
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  };
  return (
    <input
      {...register(id, validationRules)}
      id={id}
      type="email"
      placeholder={placeholder}
      className={style}
    />
  );
};

export default EmailInput;
