import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

const Thumbnails = () => {
  const dispatch = useAppDispatch();
  const thumbnails: string[] = useAppSelector(
    (state) => state.app.products[0].thumbnail
  );

  const changeActiveThumbnailIndex = (index: number): void => {
    dispatch(appActions.changeActiveThumbnailIndex(index));
  };

  return (
    <>
      {thumbnails.map((thumbnail, index) => {
        return (
          <div
            className="relative border-2 border-opacity-0 rounded-xl overflow-hidden border-orange hover:border-opacity-100 w-full h-auto bg-orange bg-opacity-0 hover:bg-opacity-100 cursor:pointer hidden lg:block"
            key={index}
            onClick={() => changeActiveThumbnailIndex(index)}
          >
            <img
              className="hover:opacity-20"
              src={thumbnail}
              alt={`thumbnail${index}`}
            />
            <div className="absolute w-full h-full bg-white  top-0 left-0  bg-opacity-0 hover:bg-opacity-70"></div>
          </div>
        );
      })}
    </>
  );
};

export default Thumbnails;
