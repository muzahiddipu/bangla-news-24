import NewsCard, { type NewsCardArticle } from "./NewsCard";

interface MainNewsProps {
  news: NewsCardArticle[];
}

const MainNews = ({ news }: MainNewsProps) => {
  const [firstNews, ...otherNews] = news;

  if (!firstNews) {
    return null;
  }

  const displayedNews = otherNews.slice(0, 4);

  return (
    <section className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-3">
        <h2 className="border-l-4 border-red-600 pl-3 text-xl font-extrabold text-gray-900 sm:text-2xl">
          প্রধান সংবাদ
        </h2>

        <span className="text-sm font-medium text-gray-500">আজকের খবর</span>
      </div>

      {/* Give the lead story the full available width instead of squeezing it beside a sidebar. */}
      <div>
        <NewsCard
          article={firstNews}
          variant="featured"
          priority
          headingLevel={3}
        />
      </div>

      {/* Supporting headlines sit below the lead story in a balanced responsive grid. */}
      <section className="mt-8" aria-labelledby="other-headlines-heading">
        <div className="mb-4 flex items-center justify-between gap-3">
          <h3
            id="other-headlines-heading"
            className="text-lg font-bold text-gray-900 sm:text-xl"
          >
            আরও প্রধান সংবাদ
          </h3>
          <span className="shrink-0 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600">
            {displayedNews.length} টি খবর
          </span>
        </div>

        {displayedNews.length > 0 ? (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {displayedNews.map((otNews, index) => (
              <div
                key={otNews.id}
                className="rounded-2xl border border-gray-200 bg-white shadow-sm"
              >
                <NewsCard
                  article={otNews}
                  variant="headline"
                  rank={index + 1}
                />
              </div>
            ))}
          </div>
        ) : (
          <p className="rounded-2xl border border-gray-200 bg-white px-4 py-6 text-center text-sm text-gray-500">
            এই মুহূর্তে অন্য কোনো সংবাদ নেই।
          </p>
        )}
      </section>
    </section>
  );
};

export default MainNews;
