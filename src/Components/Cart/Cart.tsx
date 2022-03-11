import cart from "../../images/icon-cart.svg";

interface Props {
  clickHandler: () => any;
}

const Cart = ({ clickHandler }: Props) => {
  return (
    <div className="cursor-pointer" onClick={clickHandler}>
      <img className="w-6" src={cart} alt="cart" />
    </div>
  );
};

export default Cart;
