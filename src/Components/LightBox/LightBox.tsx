import { useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";
import useFetch from "./useLightBox";

import PreviousButton from "../../Components/PreviousButton/PreviousButton";
import Thumbnails from "./Thumbnails";
import CloseButton from "../CloseButton/CloseButton";

const LightBox = () => {
  const dispatch = useAppDispatch();

  const { fullImages, activeThumbnailIndex } = useFetch();

  const decrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.decrementActiveThumbnailIndex());
  };

  const incrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.incrementActiveThumbnailIndex());
  };

  const showLightBox = (): void => {
    dispatch(appActions.closeLightBox());
  };

  return (
    <section className="fixed top-0 left-0 bottom-0 h-full w-full flex items-center justify-center bg-black bg-opacity-70">
      <div className="flex flex-col gap-6 w-1/3">
        <CloseButton onClick={showLightBox} className="self-end" />
        <div className="flex flex-row relative">
          <PreviousButton
            className="-left-6"
            clickHandler={decrementActiveThumbnailIndex}
          />
          <img
            className="rounded-xl"
            src={fullImages[activeThumbnailIndex]}
            alt="shoes"
          />
          <PreviousButton
            className="-right-6 rotate-180"
            clickHandler={incrementActiveThumbnailIndex}
          />
        </div>
        <div className="flex flex-row justify-center gap-8">
          <Thumbnails />
        </div>
      </div>
    </section>
  );
};

export default LightBox;
