import NewsCard, { type NewsCardArticle } from "./NewsCard";

// Keep the API fields used by this section explicitly typed.
type MostReadNews = Pick<NewsCardArticle, "id" | "title">;

const MostRead = async () => {
  // Revalidate the ranked headlines periodically so the list stays current.
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch most-read news");
  }

  const data = await res.json();
  const news: MostReadNews[] = data.data ?? [];

  return (
    // Outer spacing keeps the card comfortable in both sidebar and mobile layouts.
    <section
      aria-labelledby="most-read-heading"
      className="w-full px-4 py-6 sm:px-6 lg:px-4 lg:py-8"
    >
      <div className="overflow-hidden rounded-3xl border border-gray-200/80 bg-white shadow-[0_12px_40px_-20px_rgba(15,23,42,0.28)]">
        {/* The header introduces the section and its popularity context. */}
        <header className="relative overflow-hidden border-b border-red-100 bg-gradient-to-br from-red-50 via-white to-orange-50 px-5 py-5 sm:px-6">
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-12 h-36 w-36 rounded-full bg-red-100/60 blur-2xl"
          />

          <div className="relative flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-lg shadow-red-600/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-5 5" />
                </svg>
              </div>

              <div className="min-w-0">
                <p className="mb-1 text-[10px] font-extrabold uppercase tracking-[0.2em] text-red-600">
                  পাঠকের পছন্দ
                </p>
                <h2
                  id="most-read-heading"
                  className="text-lg font-extrabold leading-tight text-gray-950 sm:text-xl"
                >
                  সর্বাধিক পঠিত
                </h2>
                <p className="mt-1 text-xs leading-5 text-gray-600 sm:text-sm">
                  পাঠকদের আগ্রহের শীর্ষ সংবাদ
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-red-100 bg-white/80 px-3 py-1.5 text-[11px] font-bold text-red-700 shadow-sm sm:text-xs">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-red-500"
              />
              জনপ্রিয়
            </span>
          </div>
        </header>

        {/* A simple ranked list keeps every headline readable at sidebar widths. */}
        {news.length > 0 ? (
          <ol className="divide-y divide-gray-100 px-4 sm:px-5">
            {news.map((item, index) => (
              <li key={item.id}>
                <NewsCard
                  article={item}
                  variant="ranked"
                  rank={index + 1}
                />
              </li>
            ))}
          </ol>
        ) : (
          // A friendly empty state keeps the panel intentional when there is no data.
          <div className="px-5 py-12 text-center sm:px-8">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gray-100 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-5 5" />
              </svg>
            </div>
            <p className="mt-4 font-semibold text-gray-800">
              এই মুহূর্তে কোনো সংবাদ পাওয়া যায়নি।
            </p>
            <p className="mt-1 text-sm text-gray-500">
              কিছুক্ষণ পর আবার চেষ্টা করুন।
            </p>
          </div>
        )}

        {/* A slim brand accent neatly closes the card. */}
        <div
          aria-hidden="true"
          className="h-1 w-full bg-gradient-to-r from-red-700 via-red-500 to-orange-400"
        />
      </div>
    </section>
  );
};

export default MostRead;
