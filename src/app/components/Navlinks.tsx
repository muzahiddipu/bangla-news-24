import Link from "next/link";

interface NewsCategory {
  slug: string;
  title: string;
  topicId: string | null;
  url: string;
  scrapable: boolean;
}

const Navlinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch news categories");
  }

  const data = await res.json();
  const navs: NewsCategory[] = data.data;
  const newNavs = navs.filter((n) => n.scrapable);

  return (
    <nav aria-label="প্রধান নেভিগেশন" className=" bg-white">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center">
          <div
            aria-label="সংবাদ বিভাগসমূহ"
            className="min-w-0 flex-1 overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            role="region"
            tabIndex={0}
          >
            <ul className="flex w-max min-w-full items-center justify-center gap-1.5 py-2">
              <li className="shrink-0">
                <Link
                  href="/"
                  className="inline-flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m3 10 9-7 9 7" />
                    <path d="M5 9v12h14V9" />
                    <path d="M9 21v-8h6v8" />
                  </svg>
                  <span>হোম</span>
                </Link>
              </li>
              {newNavs.map((n) => (
                <li key={n.slug} className="shrink-0">
                  <Link
                    href={n.slug}
                    className="inline-flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:px-4"
                  >
                    {n.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navlinks;
