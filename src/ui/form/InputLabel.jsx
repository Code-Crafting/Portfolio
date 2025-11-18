const InputLabel = ({ htmlFor = "", label = "label" }) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block lg:text-lg font-medium text-gray-700 mb-1.5 cursor-pointer"
    >
      {label}
    </label>
  );
};

export default InputLabel;
