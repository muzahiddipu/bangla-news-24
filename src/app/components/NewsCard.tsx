import Image from "next/image";
import Link from "next/link";

export interface NewsCardArticle {
  id: string | number;
  title: string;
  description?: string | null;
  imageUrl?: string | null;
  imageAlt?: string | null;
  category?: string | null;
  source?: string | null;
  link?: string | null;
}

export type NewsCardVariant = "featured" | "standard" | "headline" | "ranked";

interface NewsCardProps {
  article: NewsCardArticle;
  variant?: NewsCardVariant;
  priority?: boolean;
  rank?: number;
  className?: string;
  headingLevel?: 2 | 3;
}

const NewsCard = ({
  article,
  variant = "standard",
  priority = false,
  rank,
  className,
  headingLevel = variant === "featured" ? 2 : 3,
}: NewsCardProps) => {
  const newsHref = `/news/${article.id}`;

  if (variant === "headline" || variant === "ranked") {
    const isRanked = variant === "ranked";
    const displayRank = rank ?? 1;

    return (
      <Link
        href={newsHref}
        aria-label={`সম্পূর্ণ সংবাদ পড়ুন: ${article.title}`}
        className="group block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-red-500"
      >
        <article className="flex min-h-20 items-center gap-3 rounded-2xl px-2 py-4 transition duration-200 group-hover:bg-red-50/70 sm:gap-4 sm:px-3">
          {/* Ranking badges help readers scan ordered headlines. */}
          <span
            aria-hidden="true"
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold transition duration-200 sm:h-11 sm:w-11 ${
              isRanked && displayRank === 1
                ? "bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md shadow-red-600/20"
                : isRanked && displayRank < 4
                  ? "bg-red-100 text-red-700 group-hover:bg-red-600 group-hover:text-white"
                  : "bg-gray-100 text-gray-500 group-hover:bg-red-100 group-hover:text-red-700"
            }`}
          >
            {String(displayRank).padStart(2, "0")}
          </span>

          {/* Text-only variants stay compact for sidebars and headline lists. */}
          <span className="min-w-0 flex-1">
            <span className="mb-1 block text-[10px] font-bold uppercase tracking-wider text-gray-400">
              {isRanked
                ? displayRank === 1
                  ? "আজকের শীর্ষ সংবাদ"
                  : `জনপ্রিয় সংবাদ ${displayRank}`
                : article.category}
            </span>
            <span className="block text-sm font-bold leading-6 text-gray-800 transition-colors group-hover:text-red-700 sm:text-[15px]">
              {article.title}
            </span>
          </span>

          {/* The arrow indicates that the headline opens a story. */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            className="shrink-0 text-gray-300 transition duration-200 group-hover:translate-x-0.5 group-hover:text-red-600"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </article>
      </Link>
    );
  }

  const isFeatured = variant === "featured";
  const Headline = headingLevel === 2 ? "h2" : "h3";
  const cardClassName = isFeatured
    ? "group grid overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl lg:grid-cols-5"
    : "group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-100 hover:shadow-xl";

  return (
    <Link
      href={newsHref}
      aria-label={`সম্পূর্ণ সংবাদ পড়ুন: ${article.title}`}
      className="block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
    >
      <article className={`${cardClassName} ${className ?? ""}`}>
        {/* Image and category metadata share a consistent treatment across card variants. */}
        <div
          className={`relative block overflow-hidden bg-gray-100 ${
            isFeatured
              ? "aspect-[16/10] sm:aspect-[16/8] lg:col-span-3 lg:aspect-auto lg:min-h-[380px]"
              : "aspect-[16/9]"
          }`}
        >
          {article.imageUrl ? (
            <Image
              src={article.imageUrl}
              alt={article.imageAlt ?? article.title}
              fill
              priority={priority}
              sizes={
                isFeatured
                  ? "(max-width: 1024px) 100vw, 60vw"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-red-100 via-gray-100 to-orange-100"
            />
          )}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
          {article.category && (
            <span className="absolute bottom-3 left-3 rounded-full bg-red-600 px-3 py-1.5 text-xs font-bold text-white shadow-md sm:bottom-4 sm:left-4">
              {article.category}
            </span>
          )}
        </div>

        {/* Headline, summary, source, and read-more affordance adapt to card size. */}
        <div
          className={`flex flex-1 flex-col ${
            isFeatured
              ? "justify-center p-5 sm:p-7 lg:col-span-2 lg:p-8"
              : "p-5"
          }`}
        >
          {isFeatured && (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-red-600">
              আজকের প্রধান সংবাদ
            </p>
          )}

          <Headline
            className={
              isFeatured
                ? "text-xl font-extrabold leading-snug text-gray-950 transition-colors group-hover:text-red-700 sm:text-2xl lg:text-3xl"
                : "line-clamp-3 text-lg font-extrabold leading-7 text-gray-900 transition-colors duration-200 group-hover:text-red-600"
            }
          >
            {article.title}
          </Headline>

          {article.description && (
            <p
              className={`mt-3 text-sm leading-7 text-gray-600 ${
                isFeatured ? "line-clamp-5 sm:text-base" : "line-clamp-3"
              }`}
            >
              {article.description}
            </p>
          )}

          {isFeatured ? (
            <div className="mt-6 flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
              <span className="text-xs font-semibold text-gray-500">
                {article.source ?? "সংবাদ"}
              </span>
              <span className="inline-flex min-h-11 items-center gap-2 rounded-full bg-red-600 px-4 text-sm font-bold text-white transition-colors group-hover:bg-red-700">
                বিস্তারিত পড়ুন <span aria-hidden="true">→</span>
              </span>
            </div>
          ) : (
            <div className="mt-auto flex items-center gap-2 pt-5 text-sm font-bold text-red-600">
              <span>বিস্তারিত পড়ুন</span>
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};

export default NewsCard;
