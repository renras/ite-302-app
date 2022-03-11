import useFetch from "./useThumbnails";

const Thumbnails = () => {
  const { thumbnails, activeThumbnailIndex, changeActiveThumbnailIndex } =
    useFetch();

  return (
    <>
      {thumbnails.map((thumbnail, index) => {
        return (
          <button
            onClick={() => changeActiveThumbnailIndex(index)}
            key={index}
            className={`${
              index === activeThumbnailIndex && "border-opacity-100"
            } relative overflow-hidden w-full h-auto rounded-lg  border-orange bg-orange bg-opacity-0 ${
              index === activeThumbnailIndex && "bg-orange bg-opacity-100"
            } border-2 border-opacity-0 hover:border-opacity-100 hover:bg-opacity-100 mt-2`}
          >
            <img src={thumbnail} alt={`thumbnail${index}`} />
            <div
              className={`${
                index === activeThumbnailIndex
                  ? "bg-opacity-70"
                  : "bg-opacity-0"
              } absolute w-full h-full bg-white  top-0 left-0  hover:bg-opacity-70 `}
            >
              {" "}
            </div>
          </button>
        );
      })}
    </>
  );
};

export default Thumbnails;
