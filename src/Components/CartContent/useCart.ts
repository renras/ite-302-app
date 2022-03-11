import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

const useCart = () => {
  const dispatch = useAppDispatch();
  const cart: {
    title: string;
    price: number;
    quantity: number;
    thumbnail: string;
    id: number;
  }[] = useAppSelector((state) => state.app.cart);

  const removeItem = (id: number) => {
    dispatch(appActions.removeItem(id));
  };

  return { cart, removeItem };
};

export default useCart;
