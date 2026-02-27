"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { type FormEvent } from "react";
import { Button } from "@/components/ui/button";

const AUTH_STORAGE_KEY = "eccomerce_auth";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.localStorage.setItem(AUTH_STORAGE_KEY, "logged_in");
    window.dispatchEvent(new Event("auth-change"));
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-zinc-50 px-4 pb-12 pt-24 sm:px-6">
      <section className="mx-auto w-full max-w-md rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">Get started</p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900">Create account</h1>
        <p className="mt-2 text-sm text-zinc-600">Join to book stays, message hosts, and list your property.</p>

        <form className="mt-6 space-y-4" onSubmit={handleSignup}>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-700">Full name</span>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-700">Email</span>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
            />
          </label>
          <label className="block space-y-2">
            <span className="text-sm font-medium text-zinc-700">Password</span>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
            />
          </label>
          <Button type="submit" className="w-full">
            Sign up
          </Button>
        </form>

        <p className="mt-4 text-center text-sm text-zinc-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-zinc-900 underline underline-offset-2">
            Log in
          </Link>
        </p>
      </section>
    </main>
  );
}
