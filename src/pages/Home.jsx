import HeroSlider from "../components/HeroSlider";
import MainText from "../components/MainText";
import Navbar from "../components/Navbar";
import TheGrid from "../components/TheGrid";
import Website from "../components/Website";

const Home = () => {
  return (
    <div className="text-[#1C1C19] ">
      <Navbar />
      <HeroSlider />
      <MainText />
      <TheGrid />
      <Website />
    </div>
  );
};

export default Home;
