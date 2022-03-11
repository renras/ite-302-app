import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { productQuantityActions } from "../../store/productQuantity";
import { appActions } from "../../store/appSlice";

import ValueIncrementer from "../../Components/ValueIncrementer/ValueIncrementer";
import Button from "../../Components/Button/Button";
import lightCart from "../../images/icon-cart-light.svg";

const RightSection = () => {
  const productQuantity = useAppSelector(
    (state) => state.productQuantity.currentValue
  );
  const price = useAppSelector((state) => state.app.products[0].price);
  const currentValue: number = useAppSelector(
    (state) => state.productQuantity.currentValue
  );
  const dispatch = useAppDispatch();

  const increment = (): void => {
    dispatch(productQuantityActions.increment());
  };

  const decrement = (): void => {
    dispatch(productQuantityActions.decrement());
  };

  const addToCart = (): void => {
    dispatch(
      appActions.addToCart({
        quantity: productQuantity,
        id: new Date().getTime(),
      })
    );
  };

  return (
    <section
      className="p-6 grid-cols-2 lg:grid-cols-3  grid gap-y-2 items-center lg:w-1/3 xl:gap-y-4
     auto-rows-max lg:gap-x-4 lg:gap-y-0"
    >
      <div className="flex flex-col col-start-1 col-span-3 xl:gap-4">
        <p className="font-bold text-orange text-xs tracking-wider">
          SNEAKER COMPANY
        </p>
        <h2 className="mt-2 text-4xl xl:text-5xl font-bold text-base text-very-dark-blue lg:text-3xl">
          Fall Limited Sneakers
        </h2>
      </div>
      <p className="mt-4 text-dark-grayish-blue col-start-1 col-span-3 lg:text-sm xl:text-base">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </p>
      <div className="flex flex-col col-start-1 col-span-3">
        <p className="lg:col-span-3 mt-4 text-very-dark-blue font-bold text-3xl lg:text-2xl xl:text-3xl col-start-1 col-span-1 flex items-center">
          ${price.toFixed(2)}
          <span className="ml-4 lg:ml-2 text-orange font-bold text-base lg:text-sm xl:text-base w-12 rounded-lg bg-pale-orange py-1 lg:py-0.5 px-2">
            50%
          </span>
        </p>
        <del className="lg:col-span-3 lg:mb-8 lg:mt-2 lg:justify-self-start justify-self-end mt-4 text-grayish-blue font-bold text-base col-start-2 col-span-1">
          ${Number(250).toFixed(2)}
        </del>
      </div>
      <ValueIncrementer
        value={currentValue}
        incrementHandler={increment}
        decrementHandler={decrement}
      />
      <Button
        className="gap-4 mt-2 flex justify-center items-center col-start-1 col-span-2 lg:col-start-2 lg:col-span-2 lg:mt-0"
        text="Add to cart"
        clickHandler={addToCart}
      >
        <img className="fill-white w-4 lg:w-3" src={lightCart} alt="cartIcon" />
      </Button>
    </section>
  );
};

export default RightSection;
