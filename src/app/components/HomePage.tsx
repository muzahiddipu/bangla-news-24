import React from "react";
import MainNews from "./MainNews";
import OtherNews from "./OtherNews";
import MostRead from "./MostRead";

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data.data;
  const [mainNews, ...otherNews] = section;
  const mainNewsInfo = mainNews.articles;
  const otherNewsInfo = otherNews;
  //   console.log(section);
  //   console.log(otherNews);

  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3">
      {/* News section */}
      <div className="lg:col-span-2">
        <MainNews news={mainNewsInfo}></MainNews>
        <OtherNews otherNewsInfo={otherNewsInfo}></OtherNews>
      </div>
      {/* Most read section */}
      <div className="lg:col-span-1">
        <MostRead></MostRead>
      </div>
    </div>
  );
};

export default HomePage;
