import previousIcon from "../../images/icon-previous.svg";

interface Props {
  className: string;
  clickHandler: () => any;
}

const PreviousButton = ({ className, clickHandler }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={`w-12 h-12 absolute  ${className} top-1/2 transform -translate-y-1/2 rounded-full bg-white`}
    >
      <div className="relative h-full w-full">
        <img
          className="absolute top-0 left-0 right-1 bottom-0 m-auto"
          src={previousIcon}
          alt={previousIcon}
        />
      </div>
    </button>
  );
};

export default PreviousButton;
