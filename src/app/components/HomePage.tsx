import React from "react";
import MainNews from "./MainNews";
import OtherNews from "./OtherNews";

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
    <div className="grid grid-cols-3 container mx-auto">
      {/* News section */}
      <div className="col-span-2">
        <MainNews news={mainNewsInfo}></MainNews>
        <OtherNews otherNewsInfo={otherNewsInfo}></OtherNews>
      </div>
      {/* Most read section */}
      <div className="col-span-1"></div>
    </div>
  );
};

export default HomePage;
