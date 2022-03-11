interface Props {
  clickHandler?: () => any;
  text: string;
  className?: string;
  children?: any;
}

const Button = ({ clickHandler, text, className, children }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={`border text-base font-bold bg-orange text-white rounded-lg py-4 ${className}`}
    >
      {children}
      <p>{text}</p>
    </button>
  );
};

export default Button;
