import { useAppSelector } from "../../store/hooks";

const useLightBox = () => {
  const fullImages: string[] = useAppSelector(
    (state) => state.app.products[0].fullimages
  );

  const activeThumbnailIndex: number = useAppSelector(
    (state) => state.app.activeThumbnailIndex
  );

  return { fullImages, activeThumbnailIndex };
};

export default useLightBox;
