import closeIcon from "../../images/icon-close.svg";

interface Props {
  onClick: () => void;
  className?: string;
}

const CloseButton = ({ onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      <img className="w-6" src={closeIcon} alt="close_button" />
    </button>
  );
};

export default CloseButton;
