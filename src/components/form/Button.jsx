const Button = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  variant = "primary",
}) => {
  const baseClasses =
    "px-5 py-4 rounded-lg font-medium transition-all duration-200 ease-in-out";

  const variants = {
    primary: "bg-[#E9E9E9] text-gray-900 hover:bg-gray-100",
    secondary: "bg-primary text-white hover:bg-primary/90",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
