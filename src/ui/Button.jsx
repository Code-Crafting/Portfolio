const Button = ({
  children,
  type = "button",
  disabled = false,
  varient = "primary",
  onClick = () => {},
  width = "",
}) => {
  const BTN_VARIANT = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    success: "bg-green-600 hover:bg-green-700 text-white",
    error: "bg-red-600 hover:bg-red-700 text-white",
  };
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${width} lg:text-lg ${
        disabled ? "cursor-not-allowed" : "cursor-pointer hover:scale-[1.02]"
      } ${
        BTN_VARIANT[varient]
      } font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 hover:shadow-lg  `}
    >
      {children}
    </button>
  );
};

export default Button;
