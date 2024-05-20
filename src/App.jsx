import { useState, useEffect } from "react";
import TopBanner from "./components/TopBanner";
import Header from "./components/Header";
import SlideBannerCard from "./components/SlideBannerCard";
import SlideBanner from "./components/SlideBanner";

const App = () => {
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    const savedIsViewed = localStorage.getItem("isViewed");

    if (savedIsViewed === "1") {
      setIsViewed(true);
    }
  }, []);

  return (
    <div>
      <div className="font-pretendard">
        {!isViewed && <TopBanner setIsViewed={setIsViewed} />}
        <Header />
      </div>
      <SlideBanner />
    </div>
  );
};

export default App;
