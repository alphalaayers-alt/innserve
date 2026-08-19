"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent, useState } from "react";
import { Logo } from "./Logo";

export function AuthScreen({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const isLogin = mode === "login";

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <div className="flex min-h-full flex-col px-6">
      <header className="flex h-[68px] w-full items-center justify-between">
        <Logo />
        {isLogin && (
          <Link href="/signup" className="btn-primary h-10 px-4">
            Sign up
          </Link>
        )}
      </header>

      <main className="mx-auto flex w-full max-w-[400px] flex-1 flex-col justify-center py-12">
        <h1 className="font-[family-name:var(--font-jakarta)] text-[28px] font-semibold tracking-[-0.03em]">
          {isLogin ? "Log in" : "Create an account"}
        </h1>
        <p className="mt-2 text-[14px] text-white/50">
          {isLogin ? "Welcome back to InnServe." : "Start with your restaurant details."}
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          {!isLogin && (
            <>
              <div>
                <label className="label" htmlFor="name">
                  Full name
                </label>
                <input id="name" name="name" required className="field" placeholder="Your name" />
              </div>
              <div>
                <label className="label" htmlFor="restaurant">
                  Restaurant, bar, cafe, or hotel
                </label>
                <input id="restaurant" name="restaurant" required className="field" placeholder="Outlet name" />
              </div>
            </>
          )}
          <div>
            <label className="label" htmlFor="email">
              Email
            </label>
            <input id="email" name="email" type="email" required className="field" placeholder="you@email.com" />
          </div>
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label className="label mb-0" htmlFor="password">
                Password
              </label>
              {isLogin && <span className="text-[12px] text-white/35">Forgot password</span>}
            </div>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                minLength={8}
                className="field pr-14"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword((value) => !value)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[12px] text-white/40"
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>
          <button type="submit" className="btn-primary mt-2 w-full">
            {isLogin ? "Log in" : "Sign up"}
          </button>
        </form>

        <p className="mt-6 text-[14px] text-white/45">
          {isLogin ? "No account?" : "Already have an account?"}{" "}
          <Link href={isLogin ? "/signup" : "/login"} className="text-[#8bff00]">
            {isLogin ? "Sign up" : "Log in"}
          </Link>
        </p>
      </main>
    </div>
  );
}
