import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-800 bg-gray-950 text-gray-300">
      {/* Brand and mission introduce the site at the end of every page. */}
      <div className="container mx-auto grid gap-10 px-4 py-10 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] md:py-14 lg:px-8">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-sm text-xl font-extrabold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-400"
          >
            Bangla News <span className="ml-1 text-red-500">24</span>
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-gray-400">
            দেশ ও বিশ্বের গুরুত্বপূর্ণ সংবাদ, নির্ভরযোগ্য তথ্য এবং সাম্প্রতিক
            ঘটনাপ্রবাহ এক জায়গায়।
          </p>
        </div>

        {/* Quick links make the shared footer useful on both desktop and mobile. */}
        <nav aria-label="ফুটার নেভিগেশন">
          <h2 className="text-sm font-bold text-white">দ্রুত লিংক</h2>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                প্রচ্ছদ
              </Link>
            </li>
            <li>
              <Link
                href="/category/world"
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                বিশ্ব সংবাদ
              </Link>
            </li>
            <li>
              <Link
                href="/category/politics"
                className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-400"
              >
                রাজনীতি
              </Link>
            </li>
          </ul>
        </nav>

        {/* Contact and editorial note give readers a clear point of reference. */}
        <div>
          <h2 className="text-sm font-bold text-white">আমাদের সম্পর্কে</h2>
          <p className="mt-4 text-sm leading-7 text-gray-400">
            পাঠকের কাছে সংবাদ পৌঁছে দিতে আমরা গুরুত্ব দিই স্পষ্টতা, প্রাসঙ্গিকতা
            এবং দায়িত্বশীল উপস্থাপনায়।
          </p>
        </div>
      </div>

      {/* The bottom bar closes the layout consistently across all routes. */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col gap-2 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {currentYear} Bangla News 24. সর্বস্বত্ব সংরক্ষিত।</p>
          <p>সর্বশেষ সংবাদ, সবসময় আপনার সঙ্গে।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
