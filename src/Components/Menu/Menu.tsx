import menu from "../../images/icon-menu.svg";

interface Props {
  clickHandler: () => any;
}

const Menu = ({ clickHandler }: Props) => {
  return (
    <div className="md:hidden cursor:pointer" onClick={clickHandler}>
      <img className="w-4" src={menu} alt={menu} />
    </div>
  );
};

export default Menu;
