import Image from "next/image";
import Navlinks from "./Navlinks";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="container mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex min-h-20 items-center justify-between gap-4 py-3">
          {/* Logo and Brand */}
          <div className="flex min-w-0 items-center gap-3">
            <div className="shrink-0 rounded-xl bg-red-50 p-2">
              <Image
                src="/logo.webp"
                width={48}
                height={48}
                alt="Bangla News 24 logo"
                priority
                className="h-10 w-10 object-contain sm:h-12 sm:w-12"
              />
            </div>

            <div className="min-w-0">
              <h1 className="text-lg font-extrabold tracking-tight text-gray-900 sm:text-2xl">
                Bangla News <span className="text-red-600">24</span>
              </h1>
              <p className="font-bold mt-1 text-xs text-gray-500 sm:text-sm">
                {date}
              </p>
            </div>
          </div>

          {/* Authentication Buttons */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <button
              type="button"
              className="rounded-lg border border-red-600 px-3 py-2 text-sm font-semibold text-red-600 transition-all duration-200 hover:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-600 sm:px-5 sm:py-2.5"
            >
              সাইন ইন
            </button>

            <button
              type="button"
              className="rounded-lg bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-red-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 sm:px-5 sm:py-2.5"
            >
              সাইন আপ
            </button>
          </div>
        </div>
      </div>

      {/* Red accent line */}
      <hr className="text-red-700" />
      <Navlinks></Navlinks>
    </header>
  );
};

export default Header;
