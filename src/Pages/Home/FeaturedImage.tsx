import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { appActions } from "../../store/appSlice";

import PreviousButton from "../../Components/PreviousButton/PreviousButton";
import Thumbnails from "../Home/Thumbnails";

const FeaturedImage = () => {
  const [sizeIsOver1024px, setSizeIsOver1024px] = useState(false);
  const dispatch = useAppDispatch();
  const fullImages: string[] = useAppSelector(
    (state) => state.app.products[0].fullimages
  );

  const activeThumbnailIndex: number = useAppSelector(
    (state) => state.app.activeThumbnailIndex
  );

  const decrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.decrementActiveThumbnailIndex());
  };

  const incrementActiveThumbnailIndex = (): void => {
    dispatch(appActions.incrementActiveThumbnailIndex());
  };

  const featuredImageClickHandler = (index: number): void => {
    sizeIsOver1024px && dispatch(appActions.showLightBox());
    changeLightBoxIndex(index);
  };

  const changeLightBoxIndex = (index: number): void => {
    dispatch(appActions.changeLightBoxIndex(index));
  };

  const html = document.querySelector("html")!;
  const observer = new ResizeObserver((entries) => {
    const html = entries[0];
    setSizeIsOver1024px(html.contentRect.width >= 1024 ? true : false);
  });
  observer.observe(html);

  useEffect(() => {
    const closeLightBox = (): void => {
      dispatch(appActions.closeLightBox());
    };
    !sizeIsOver1024px && closeLightBox();
  }, [sizeIsOver1024px, dispatch]);

  return (
    <section className="relative lg:grid lg:w-1/3 lg:grid-cols-4 lg:gap-6 lg:auto-rows-max">
      <PreviousButton
        className="left-2 lg:hidden"
        clickHandler={decrementActiveThumbnailIndex}
      />
      <img
        onClick={() => featuredImageClickHandler(activeThumbnailIndex)}
        className={`${
          sizeIsOver1024px && "cursor-pointer"
        } w-full lg:col-start-1 lg:col-span-4 lg:w-full lg:h-auto lg:rounded-xl`}
        src={fullImages[activeThumbnailIndex]}
        alt="shoe"
      />
      <PreviousButton
        className="right-2 rotate-180 lg:hidden"
        clickHandler={incrementActiveThumbnailIndex}
      />
      <Thumbnails />
    </section>
  );
};

export default FeaturedImage;
