import type { NextPage } from "next";
import HomeBody from "../Components/features/home_body";
import BackgroundImage from "../Components/shared/background_img";

const Home: NextPage = () => {
  return (
    <>
      <BackgroundImage />
      <HomeBody />
    </>
  );
};

export default Home;
