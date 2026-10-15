import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <main className="min-h-screen bg-base-200 px-4 py-10 sm:py-14">
      <div className="mx-auto flex min-h-[75vh] w-full max-w-5xl items-center justify-center">
        <div className="grid w-full overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-xl md:grid-cols-2">
          {/* Left: Brand Panel */}
          <section className="relative hidden overflow-hidden bg-red-700 p-10 text-white md:flex md:flex-col md:justify-between lg:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border-[35px] border-white/10" />
            <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[40px] border-white/10" />

            <div className="relative z-10">
              <Link href="/" className="inline-block">
                <h1 className="text-3xl font-black tracking-tight">
                  Bangla News <span className="text-red-200">24</span>
                </h1>
              </Link>
              <div className="mt-3 h-1 w-16 rounded-full bg-white" />
              <p className="mt-3 text-sm text-red-100">
                সত্যের সন্ধানে, সংবাদের সাথে
              </p>
            </div>

            <div className="relative z-10 py-12">
              <span className="inline-block rounded-full border border-white/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest">
                Stay Informed
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                খবর জানুন,
                <br />
                সবার আগে।
              </h2>

              <p className="mt-5 max-w-sm text-base leading-7 text-red-100">
                দেশ ও বিশ্বের গুরুত্বপূর্ণ সংবাদ, সর্বশেষ আপডেট এবং আপনার
                পছন্দের খবর জানতে আমাদের কমিউনিটিতে যুক্ত হোন।
              </p>
            </div>

            <div className="relative z-10 border-t border-white/20 pt-5 text-sm text-red-100">
              © 2026 Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
            </div>
          </section>

          {/* Right: Signup Form */}
          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              {/* Mobile Brand */}
              <Link href="/" className="mb-8 inline-block md:hidden">
                <h1 className="text-2xl font-black tracking-tight text-base-content">
                  Bangla News <span className="text-red-700">24</span>
                </h1>
                <div className="mt-2 h-1 w-12 rounded-full bg-red-700" />
              </Link>

              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                  Join Our Community
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
                  অ্যাকাউন্ট তৈরি করুন
                </h2>

                <p className="mt-3 text-sm leading-6 text-base-content/60">
                  আপনার অ্যাকাউন্ট তৈরি করুন এবং সর্বশেষ সংবাদ ও গুরুত্বপূর্ণ
                  আপডেটের সাথে যুক্ত থাকুন।
                </p>
              </div>

              <form action="#" method="post" className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    আপনার নাম
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="আপনার পুরো নাম লিখুন"
                    autoComplete="name"
                    required
                    className="input input-bordered h-12 w-full rounded-lg bg-base-100 focus:border-red-600 focus:outline-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    ইমেইল ঠিকানা
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@email.com"
                    autoComplete="email"
                    required
                    className="input input-bordered h-12 w-full rounded-lg bg-base-100 focus:border-red-600 focus:outline-red-600"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-semibold"
                  >
                    পাসওয়ার্ড
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="কমপক্ষে ৮ অক্ষর লিখুন"
                    autoComplete="new-password"
                    minLength={8}
                    required
                    className="input input-bordered h-12 w-full rounded-lg bg-base-100 focus:border-red-600 focus:outline-red-600"
                  />

                  <p className="mt-2 text-xs text-base-content/50">
                    নিরাপদ পাসওয়ার্ড ব্যবহার করুন।
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn mt-3 h-12 min-h-12 w-full rounded-lg border-0 bg-red-700 text-base font-bold text-white shadow-md shadow-red-700/20 transition hover:bg-red-800"
                >
                  সাইন আপ করুন
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </button>
              </form>

              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-base-300" />
                <span className="text-xs font-medium text-base-content/50">
                  ইতোমধ্যে সদস্য?
                </span>
                <div className="h-px flex-1 bg-base-300" />
              </div>

              <p className="text-center text-sm text-base-content/70">
                আগে থেকেই অ্যাকাউন্ট আছে?{" "}
                <a
                  href="/signIn"
                  className="font-bold text-red-700 transition hover:text-red-800 hover:underline"
                >
                  সাইন ইন করুন
                </a>
              </p>

              <p className="mt-7 text-center text-xs leading-5 text-base-content/50">
                সাইন আপ করার মাধ্যমে আপনি আমাদের ব্যবহারের শর্তাবলি ও গোপনীয়তা
                নীতিতে সম্মত হচ্ছেন।
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
