import NewsCard, { type NewsCardArticle } from "./NewsCard";

interface NewsSection {
  title: string;
  articles: NewsCardArticle[];
}

interface OtherNewsProps {
  otherNewsInfo: NewsSection[];
}

const OtherNews = ({ otherNewsInfo }: OtherNewsProps) => {
  return (
    <div className="container mx-auto space-y-12 px-4 py-10 sm:px-6 lg:px-8">
      {otherNewsInfo.map((section) => (
        <section key={section.title}>
          {/* Section Heading */}
          <div className="mb-6 flex items-center justify-between gap-4 border-b border-gray-200 pb-3">
            <h2 className="border-l-4 border-red-600 pl-3 text-xl font-extrabold text-gray-900 sm:text-2xl">
              {section.title}
            </h2>

            <span className="shrink-0 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-600 sm:text-sm">
              {section.articles.length} টি সংবাদ
            </span>
          </div>

          {/* Articles Grid */}
          {section.articles.length > 0 ? (
            <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-6">
              {section.articles.map((article) => (
                <NewsCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-300 bg-gray-50 px-4 py-12 text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M8 6h13" />
                  <path d="M8 12h13" />
                  <path d="M8 18h13" />
                  <path d="M3 6h.01" />
                  <path d="M3 12h.01" />
                  <path d="M3 18h.01" />
                </svg>
              </div>

              <h3 className="text-base font-bold text-gray-800">
                কোনো সংবাদ পাওয়া যায়নি
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                এই মুহূর্তে এই বিভাগে কোনো সংবাদ নেই। পরে আবার দেখুন।
              </p>
            </div>
          )}
        </section>
      ))}
    </div>
  );
};

export default OtherNews;
