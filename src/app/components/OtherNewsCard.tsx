import React from "react";

interface OtherNewsCardProps {
  otherNews: {
    articles: unknown[];
  };
}

const OtherNewsCard = ({ otherNews }: OtherNewsCardProps) => {
  console.log(otherNews.articles);

  return (
    <div>
      <div></div>
    </div>
  );
};

export default OtherNewsCard;
