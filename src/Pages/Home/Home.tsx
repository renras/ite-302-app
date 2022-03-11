import RightSection from "./RightSection";
import FeaturedImage from "./FeaturedImage";

const Home = () => {
  return (
    <main className="flex flex-col relative lg:justify-center lg:items-center lg:flex-row lg:gap-6  lg:mt-20 xl:gap-20 xl:pb-10">
      <FeaturedImage />
      <RightSection />
    </main>
  );
};

export default Home;
