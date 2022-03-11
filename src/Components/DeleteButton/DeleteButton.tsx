import deleteIcon from "../../images/icon-delete.svg";

interface Props {
  clickHandler: () => any;
}

const DeleteButton = ({ clickHandler }: Props) => {
  return (
    <button className="flex-shrink-0 flex-grow-0" onClick={clickHandler}>
      <img className="w-5" src={deleteIcon} alt="delete-icon" />
    </button>
  );
};

export default DeleteButton;
