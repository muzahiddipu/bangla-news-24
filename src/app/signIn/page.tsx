import Link from "next/link";
import React from "react";

const SignInPage = () => {
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
                Welcome Back
              </span>

              <h2 className="mt-6 text-4xl font-extrabold leading-tight lg:text-5xl">
                আবারও
                <br />
                সংবাদের সাথে।
              </h2>

              <p className="mt-5 max-w-sm text-base leading-7 text-red-100">
                আপনার পছন্দের সংবাদ, দেশ-বিদেশের সর্বশেষ খবর এবং গুরুত্বপূর্ণ
                আপডেট জানতে আমাদের সাথে থাকুন।
              </p>
            </div>

            <div className="relative z-10 border-t border-white/20 pt-5 text-sm text-red-100">
              © 2026 Bangla News 24. সর্বস্বত্ব সংরক্ষিত।
            </div>
          </section>

          {/* Right: Sign In Form */}
          <section className="flex items-center justify-center p-6 sm:p-10 lg:p-12">
            <div className="w-full max-w-md">
              {/* Mobile Branding */}
              <Link href="/" className="mb-8 inline-block md:hidden">
                <h1 className="text-2xl font-black tracking-tight text-base-content">
                  Bangla News <span className="text-red-700">24</span>
                </h1>
                <div className="mt-2 h-1 w-12 rounded-full bg-red-700" />
              </Link>

              <div className="mb-8">
                <p className="text-sm font-bold uppercase tracking-widest text-red-700">
                  Welcome Back
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-base-content sm:text-4xl">
                  সাইন ইন করুন
                </h2>

                <p className="mt-3 text-sm leading-6 text-base-content/60">
                  আপনার অ্যাকাউন্টে প্রবেশ করুন এবং সর্বশেষ সংবাদ ও আপডেটের সাথে
                  যুক্ত থাকুন।
                </p>
              </div>

              <form action="#" method="post" className="space-y-5">
                {/* Email */}
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

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label htmlFor="password" className="text-sm font-semibold">
                      পাসওয়ার্ড
                    </label>

                    <a
                      href="/forgot-password"
                      className="text-xs font-semibold text-red-700 hover:text-red-800 hover:underline"
                    >
                      পাসওয়ার্ড ভুলে গেছেন?
                    </a>
                  </div>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="আপনার পাসওয়ার্ড লিখুন"
                    autoComplete="current-password"
                    required
                    className="input input-bordered h-12 w-full rounded-lg bg-base-100 focus:border-red-600 focus:outline-red-600"
                  />
                </div>

                {/* Remember Me */}
                <label className="flex cursor-pointer items-center gap-3 py-1 text-sm text-base-content/70">
                  <input
                    type="checkbox"
                    name="remember"
                    className="checkbox checkbox-sm rounded border-base-300 checked:border-red-700 checked:bg-red-700"
                  />
                  আমাকে মনে রাখুন
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn h-12 min-h-12 w-full rounded-lg border-0 bg-red-700 text-base font-bold text-white shadow-md shadow-red-700/20 transition hover:bg-red-800"
                >
                  সাইন ইন করুন
                  <span aria-hidden="true" className="text-lg">
                    →
                  </span>
                </button>
              </form>

              {/* Signup Link */}
              <div className="my-6 flex items-center gap-4">
                <div className="h-px flex-1 bg-base-300" />
                <span className="text-xs font-medium text-base-content/50">
                  নতুন সদস্য?
                </span>
                <div className="h-px flex-1 bg-base-300" />
              </div>

              <p className="text-center text-sm text-base-content/70">
                এখনো অ্যাকাউন্ট নেই?{" "}
                <a
                  href="/signUp"
                  className="font-bold text-red-700 transition hover:text-red-800 hover:underline"
                >
                  সাইন আপ করুন
                </a>
              </p>

              <p className="mt-7 text-center text-xs leading-5 text-base-content/50">
                নিরাপদে প্রবেশ করুন এবং Bangla News 24-এর সাথে সংযুক্ত থাকুন।
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SignInPage;
