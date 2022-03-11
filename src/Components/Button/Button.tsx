interface Props {
  clickHandler?: () => any;
  className?: string;
  children?: any;
  type?: "button" | "submit";
}

const Button = ({ clickHandler, className, children, type }: Props) => {
  return (
    <button
      type={type || "submit"}
      onClick={clickHandler}
      className={`border text-base font-bold bg-orange text-white rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
