import useFetch from "./useCart";
import CartItem from "./CartItem";
import Button from "../Button/Button";

const Cart = () => {
  const { cart } = useFetch();

  return (
    <div className="fixed left-0 right-0  top-24 shadow-2xl rounded-md bg-white z-10 sm:left-auto sm:w-96 sm:top-12 sm:absolute sm:-right-12 lg:-right-48 lg:flex flex-col">
      <div className="border-b border-light-grayish-blue px-4 py-4">
        <h1 className="font-bold text-lg">Cart</h1>
      </div>
      <div className="flex flex-col px-6 gap-8 pt-6 pb-8">
        {cart.length > 0 ? (
          cart.map((item, index) => {
            return <CartItem item={item} key={index} />;
          })
        ) : (
          <div className="h-52 flex items-center justify-center text-dark-grayish-blue font-bold text-lg">
            <p>Your cart is empty.</p>
          </div>
        )}
        {cart.length > 0 && <Button>Checkout</Button>}
      </div>
    </div>
  );
};

export default Cart;
