import NewsCard, { type NewsCardArticle } from "../../components/NewsCard";

interface CategoryResponse {
  title: string;
  data: NewsCardArticle[];
}

interface CategoryNewsProps {
  params: Promise<{ categoryId: string }>;
}

const CategoryNews = async ({ params }: CategoryNewsProps) => {
  const { categoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${categoryId}`,
    { next: { revalidate: 300 } },
  );

  if (!res.ok) {
    throw new Error(`Failed to fetch news for category "${categoryId}"`);
  }

  const data: CategoryResponse = await res.json();
  const [featuredArticle, ...articles] = data.data ?? [];

  return (
    <main className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
      {/* Category heading sets the context for the stories below. */}
      <header className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-gray-200 pb-5 sm:mb-10">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
            সর্বশেষ সংবাদ
          </p>
          <h1 className="border-l-4 border-red-600 pl-3 text-2xl font-extrabold text-gray-950 sm:text-3xl">
            {data.title}
          </h1>
        </div>

        <p className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
          {data.data.length} টি সংবাদ
        </p>
      </header>

      {featuredArticle ? (
        <>
          {/* The lead story receives a larger image and more room for its summary. */}
          <NewsCard
            article={featuredArticle}
            variant="featured"
            priority
            headingLevel={2}
            className="mb-8 lg:mb-10"
          />

          {/* Remaining stories are arranged for comfortable reading at every width. */}
          {articles.length > 0 && (
            <section aria-labelledby="more-stories-heading">
              <div className="mb-5 flex items-center gap-3">
                <h2
                  id="more-stories-heading"
                  className="text-xl font-extrabold text-gray-900 sm:text-2xl"
                >
                  আরও সংবাদ
                </h2>
                <span className="h-px flex-1 bg-gray-200" />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => (
                  <NewsCard
                    key={article.id}
                    article={article}
                  />
                ))}
              </div>
            </section>
          )}
        </>
      ) : (
        /* Keep the route welcoming when this category has no current stories. */
        <div className="rounded-3xl border border-dashed border-gray-300 bg-gray-50 px-5 py-16 text-center">
          <p className="text-lg font-bold text-gray-800">
            এই বিভাগে এখন কোনো সংবাদ নেই।
          </p>
          <p className="mt-2 text-sm text-gray-500">
            নতুন সংবাদ প্রকাশিত হলে এখানে দেখা যাবে।
          </p>
        </div>
      )}
    </main>
  );
};

export default CategoryNews;
