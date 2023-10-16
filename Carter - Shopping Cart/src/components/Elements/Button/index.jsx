const Button = (props) => {
  const {
    children,
    classname = "bg-black",
    onClick = () => {},
    type = "button",
  } = props;
  return (
    <button
      className={`h-10 px-6 font-semibold rounded-md text-white ${classname}`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
