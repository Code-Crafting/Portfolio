import { useContext } from "react";
import { FormContext } from "../../contexts/formContext";

const TextArea = ({
  id = "",
  row = "5",
  placeholder = "",
  style = "",
  minLength = 10,
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
    <textarea
      {...register(id, validationRules)}
      id={id}
      rows={row}
      placeholder={placeholder}
      className={style}
    ></textarea>
  );
};

export default TextArea;
