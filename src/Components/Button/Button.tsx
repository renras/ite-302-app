interface Props {
  clickHandler?: () => any;
  className?: string;
  children?: any;
}

const Button = ({ clickHandler, className, children }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={`border text-base font-bold bg-orange text-white rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
