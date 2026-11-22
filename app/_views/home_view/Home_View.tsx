import Home_Hero from "./home_components/Home_Hero";
import Home_Spread_Sheet from "./home_components/Home_Spread_Sheet";
import Home_Built_For_Work from "./home_components/Home_Built_For_Work";

const Home_View = () => {
  return (
    <>
      <Home_Hero />
      <div className="bg-sec-bg border border-y py-12"></div>
      <Home_Spread_Sheet />
      <Home_Built_For_Work />
    </>
  );
};

export default Home_View;
