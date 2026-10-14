import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface NewsHeadline {
  id: string | number;
  title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news", {
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch latest news");
  }

  const data = await res.json();
  const headlines: NewsHeadline[] = data.data ?? [];

  if (headlines.length === 0) return null;

  return (
    <section
      aria-label="সর্বশেষ সংবাদ"
      className="container font-bold mx-auto px-3 py-3 sm:px-6 lg:px-8"
    >
      <div className="flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        {/* Breaking News Label */}
        <div className="relative z-10 flex shrink-0 items-center gap-2 bg-red-600 px-3 py-3 text-white sm:px-5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white" />
          </span>

          <span className="whitespace-nowrap text-xs font-extrabold sm:text-sm">
            সর্বশেষ সংবাদ
          </span>
        </div>

        {/* Scrolling Headlines */}
        <div className="flex min-w-0 flex-1 items-center overflow-hidden bg-gray-50">
          <div className="w-full py-3">
            <MarqueeText direction="right" duration={25}>
              {headlines.map((headline) => (
                <span
                  key={headline.id}
                  className="mx-4 inline-flex items-center gap-3 text-sm font-medium text-gray-700 transition-colors hover:text-red-600 sm:mx-6 sm:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  <span>{headline.title}</span>
                </span>
              ))}
            </MarqueeText>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
