import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface ArticleContentBlock {
  type: "text" | "subheading" | "image";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string | null;
  altText?: string | null;
  copyrightHolder?: string | null;
}

interface ArticleDescription {
  blocks?: {
    model?: {
      blocks?: {
        model?: {
          text?: string;
        };
      }[];
    };
  }[];
}

interface ArticleTopic {
  id: string;
  name: string;
}

interface NewsArticle {
  id: string;
  title: string;
  description?: ArticleDescription | null;
  imageUrl?: string | null;
  link?: string | null;
  source?: string | null;
  firstPublished?: string | null;
  lastPublished?: string | null;
  byline?: string[];
  topics?: ArticleTopic[];
  tags?: string[];
  body?: ArticleContentBlock[];
}

interface NewsArticleResponse {
  data?: NewsArticle;
}

interface NewsDetailsPageProps {
  params: Promise<{ newsId: string }>;
}

const formatPublishedDate = (date: string | null | undefined) => {
  if (!date) {
    return null;
  }

  const parsedDate = new Date(date);
  if (Number.isNaN(parsedDate.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "long",
    timeStyle: "short",
  }).format(parsedDate);
};

const NewsDetailsPage = async ({ params }: NewsDetailsPageProps) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${encodeURIComponent(newsId)}`,
    { next: { revalidate: 300 } },
  );

  if (res.status === 404) {
    notFound();
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch news article "${newsId}"`);
  }

  const response: NewsArticleResponse = await res.json();
  const news = response.data;

  if (!news) {
    notFound();
  }

  // The API summary is nested in its text-block model; flatten available text for the dek.
  const summary =
    news.description?.blocks
      ?.flatMap((block) => block.model?.blocks ?? [])
      .map((block) => block.model?.text)
      .filter((text): text is string => Boolean(text))
      .join(" ") ?? "";
  const publishedDate = formatPublishedDate(
    news.firstPublished ?? news.lastPublished,
  );
  const topics = news.topics?.length
    ? news.topics.map((topic) => topic.name.trim()).filter(Boolean)
    : (news.tags ?? []);

  return (
    <main className="min-h-screen bg-gray-50/70">
      <article className="container mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8">
        {/* Breadcrumbs help readers return to the homepage from the article. */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <li>
              <Link
                href="/"
                className="rounded-sm transition-colors hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                প্রচ্ছদ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-semibold text-gray-700">সংবাদ</li>
          </ol>
        </nav>

        {/* Article title and publication details establish a clear reading hierarchy. */}
        <header className="mx-auto mb-8 max-w-4xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-red-50 px-3 py-1.5 text-xs font-bold text-red-700">
            <span
              aria-hidden="true"
              className="h-1.5 w-1.5 rounded-full bg-red-600"
            />
            সংবাদ বিশ্লেষণ ও প্রতিবেদন
          </p>

          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-950 sm:text-4xl sm:leading-tight lg:text-5xl">
            {news.title}
          </h1>

          {summary && (
            <p className="mt-5 text-lg leading-8 text-gray-600 sm:text-xl sm:leading-9">
              {summary}
            </p>
          )}

          {/* Author, publisher, and date stay readable on small screens. */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-y border-gray-200 py-4 text-sm text-gray-500">
            {news.byline && news.byline.length > 0 && (
              <span className="font-semibold text-gray-800">
                {news.byline.join(", ")}
              </span>
            )}
            <span>{news.source ?? "BBC বাংলা"}</span>
            {publishedDate && (
              <time dateTime={news.firstPublished ?? news.lastPublished ?? ""}>
                {publishedDate}
              </time>
            )}
          </div>
        </header>

        {/* The lead image anchors the story and includes a descriptive caption when available. */}
        {news.imageUrl && (
          <figure className="mb-8 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm sm:mb-10 sm:rounded-3xl">
            <div className="relative aspect-16/10 w-full bg-gray-100 sm:aspect-video">
              <Image
                src={news.imageUrl}
                alt={news.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
            <figcaption className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-xs text-gray-500 sm:px-5">
              <span>{news.title}</span>
              <span className="font-medium">ছবি: BBC বাংলা</span>
            </figcaption>
          </figure>
        )}

        {/* Article copy and topic tags use a narrow measure for comfortable reading. */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-12">
          <div className="min-w-0 rounded-2xl border border-gray-200 bg-white px-5 py-6 shadow-sm sm:px-8 sm:py-9">
            <div className="space-y-6">
              {news.body?.map((block, index) => {
                if (block.type === "image" && block.url) {
                  return (
                    <figure
                      key={`image-${index}`}
                      className="overflow-hidden rounded-xl bg-gray-100"
                    >
                      <div
                        className="relative w-full"
                        style={{
                          aspectRatio:
                            block.width && block.height
                              ? `${block.width} / ${block.height}`
                              : "16 / 9",
                        }}
                      >
                        <Image
                          src={block.url}
                          alt={block.altText ?? ""}
                          fill
                          sizes="(max-width: 1024px) 100vw, 768px"
                          className="object-cover"
                        />
                      </div>
                      {(block.caption || block.copyrightHolder) && (
                        <figcaption className="flex flex-wrap justify-between gap-2 px-4 py-3 text-xs text-gray-500">
                          {block.caption && <span>{block.caption}</span>}
                          {block.copyrightHolder && (
                            <span>{block.copyrightHolder}</span>
                          )}
                        </figcaption>
                      )}
                    </figure>
                  );
                }

                if (block.type === "subheading" && block.text) {
                  return (
                    <h2
                      key={`subheading-${index}`}
                      className="border-l-4 border-red-600 pl-4 pt-1 text-xl font-extrabold leading-snug text-gray-900 sm:text-2xl"
                    >
                      {block.text}
                    </h2>
                  );
                }

                if (block.type === "text" && block.text) {
                  return (
                    <p
                      key={`paragraph-${index}`}
                      className="text-base leading-8 text-gray-700 sm:text-lg sm:leading-9"
                    >
                      {block.text}
                    </p>
                  );
                }

                return null;
              })}
            </div>

            {/* Topic chips provide context after the article without interrupting its flow. */}
            {topics.length > 0 && (
              <footer className="mt-10 border-t border-gray-200 pt-6">
                <h2 className="mb-3 text-sm font-bold text-gray-800">
                  সংশ্লিষ্ট বিষয়
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="rounded-full bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-600"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </footer>
            )}
          </div>

          {/* A quiet sidebar reinforces source context on wide screens. */}
          <aside className="h-fit rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">
              প্রকাশক
            </p>
            <p className="mt-2 text-lg font-extrabold text-gray-900">
              BBC বাংলা
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              এই সংবাদটি মূল প্রকাশকের প্রতিবেদন থেকে উপস্থাপন করা হয়েছে।
            </p>
            {news.link && (
              <a
                href={news.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 text-sm font-bold text-gray-700 transition-colors hover:border-red-200 hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
              >
                মূল প্রতিবেদন পড়ুন
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </aside>
        </div>
      </article>
    </main>
  );
};

export default NewsDetailsPage;
