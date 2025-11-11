import { useContext } from "react";
import { FormContext } from "../../contexts/formContext";

const TextInput = ({
  id = "id",
  placeholder = "",
  style = "",
  minLength = 3,
}) => {
  const { register } = useContext(FormContext);

  const validationRules = {
    required: { value: true, message: "This field is required" },
    ...(minLength && {
      minLength: {
        value: minLength,
        message: `Length cann't be less than ${minLength}`,
      },
    }),
  };

  return (
    <input
      {...register(id, validationRules)}
      type="text"
      placeholder={placeholder}
      className={style}
    />
  );
};

export default TextInput;
