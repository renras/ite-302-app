import { appActions } from "../../store/appSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";

const useFetch = () => {
  const dispatch = useAppDispatch();
  const thumbnails: string[] = useAppSelector(
    (state) => state.app.products[0].thumbnail
  );
  const activeThumbnailIndex: number = useAppSelector(
    (state) => state.app.activeThumbnailIndex
  );

  const changeActiveThumbnailIndex = (index: number): void => {
    dispatch(appActions.changeActiveThumbnailIndex(index));
  };

  return { thumbnails, activeThumbnailIndex, changeActiveThumbnailIndex };
};

export default useFetch;
