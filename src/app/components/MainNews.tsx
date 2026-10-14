import Image from "next/image";

interface NewsItem {
  id: string | number;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

interface MainNewsProps {
  news: NewsItem[];
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

      {/* News Grid */}
      <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-5 lg:gap-8">
        {/* Featured News */}
        <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg lg:col-span-3">
          {/* Featured Image */}
          <div className="relative aspect-[16/9] w-full shrink-0 overflow-hidden bg-gray-100">
            <Image
              src={firstNews.imageUrl}
              alt={firstNews.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />

            <span className="absolute bottom-4 left-4 rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-sm">
              {firstNews.category}
            </span>
          </div>

          {/* Featured Content */}
          <div className="flex flex-1 flex-col p-5 sm:p-6">
            <h3 className="text-xl font-extrabold leading-snug text-gray-900 transition-colors duration-200 group-hover:text-red-600 sm:text-2xl lg:text-3xl">
              {firstNews.title}
            </h3>

            <p className="mt-3 line-clamp-4 text-sm leading-7 text-gray-600 sm:text-base">
              {firstNews.description}
            </p>

            <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-red-600">
              <span>বিস্তারিত পড়ুন</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          </div>
        </article>

        {/* Other Headlines */}
        <div className="flex h-full flex-col lg:col-span-2">
          {/* Sidebar Heading */}
          <div className="mb-4 flex shrink-0 items-center justify-between">
            <h3 className="text-lg font-bold text-gray-900">অন্যান্য সংবাদ</h3>

            <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold text-red-600">
              {otherNews.length} টি খবর
            </span>
          </div>

          {/* Headlines Card */}
          <div className="flex flex-1 flex-col divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white px-4 shadow-sm">
            {displayedNews.map((otNews, index) => (
              <article key={otNews.id} className="group flex flex-1 gap-4 py-4">
                {/* Number */}
                <span className="shrink-0 pt-0.5 text-2xl font-extrabold text-gray-200 transition-colors group-hover:text-red-500">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Headline Content */}
                <div className="min-w-0 flex-1">
                  <p className="mb-2 text-xs font-bold text-red-600">
                    {otNews.category}
                  </p>

                  <h4 className="line-clamp-3 text-sm font-bold leading-6 text-gray-800 transition-colors group-hover:text-red-600 sm:text-base">
                    {otNews.title}
                  </h4>
                </div>
              </article>
            ))}

            {displayedNews.length === 0 && (
              <p className="flex flex-1 items-center justify-center py-6 text-center text-sm text-gray-500">
                এই মুহূর্তে অন্য কোনো সংবাদ নেই।
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNews;
