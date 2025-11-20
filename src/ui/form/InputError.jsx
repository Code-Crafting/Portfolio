import { useTheme } from "../../contexts/themeContext";

const InputError = ({ message }) => {
  const [isDark] = useTheme();
  return (
    <p
      className={`lg:text-md text-sm ${
        isDark ? "text-red-400" : "text-rose-500"
      } ml-1 mt-1`}
    >
      {message}
    </p>
  );
};

export default InputError;
