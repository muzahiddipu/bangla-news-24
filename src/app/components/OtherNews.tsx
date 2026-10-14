"use client";

import Image from "next/image";

interface NewsItem {
  id: string | number;
  title: string;
  imageUrl: string;
  category: string;
  description: string;
}

interface NewsSection {
  title: string;
  articles: NewsItem[];
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
                <article
                  key={article.id}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl"
                >
                  {/* Article Image */}
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <Image
                      src={article.imageUrl}
                      alt={article.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image Gradient */}
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent opacity-80" />

                    {/* Category Badge */}
                    <span className="absolute bottom-3 left-3 rounded-md bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-md">
                      {article.category}
                    </span>
                  </div>

                  {/* Article Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-3 text-lg font-extrabold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-red-600">
                      {article.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-sm leading-7 text-gray-600">
                      {article.description}
                    </p>

                    {/* Read More */}
                    <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-red-600">
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
