"use client";

import { motion } from "motion/react";
import {
  BadgeCheck,
  Globe2,
  Languages,
  MapPin,
  ShieldCheck,
  Star,
} from "lucide-react";

const hostListings = [
  {
    title: "Sunny Loft in Downtown",
    location: "San Diego, California",
    price: "$128 night",
    rating: "4.94",
  },
  {
    title: "Modern Studio Near Beach",
    location: "Santa Monica, California",
    price: "$165 night",
    rating: "4.88",
  },
  {
    title: "Cozy Garden House",
    location: "Portland, Oregon",
    price: "$112 night",
    rating: "4.97",
  },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-zinc-50 pt-24 pb-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="grid gap-6 lg:grid-cols-[320px_1fr]"
        >
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-rose-100 text-3xl font-semibold text-rose-500">
              SJ
            </div>
            <h1 className="text-center text-2xl font-semibold text-zinc-900">Sarah J.</h1>
            <p className="mt-1 text-center text-sm text-zinc-500">Host since 2020</p>

            <div className="mt-6 space-y-3 text-sm text-zinc-700">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-zinc-500" />
                San Diego, United States
              </p>
              <p className="flex items-center gap-2">
                <Languages className="h-4 w-4 text-zinc-500" />
                English, Spanish
              </p>
              <p className="flex items-center gap-2">
                <Globe2 className="h-4 w-4 text-zinc-500" />
                Loves surfing and design
              </p>
            </div>

            <div className="mt-6 rounded-2xl bg-zinc-100 p-4">
              <h2 className="text-sm font-semibold text-zinc-900">Identity verified</h2>
              <p className="mt-1 text-sm text-zinc-600">
                Email address and government ID have been checked.
              </p>
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-100 px-3 py-1 text-sm font-medium text-rose-600">
                <Star className="h-4 w-4 fill-current" />
                Superhost
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-700">
                <BadgeCheck className="h-4 w-4" />
                Top rated host
              </span>
            </div>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight text-zinc-900">Meet Sarah</h2>
            <p className="mt-3 max-w-2xl text-zinc-600">
              I love helping guests feel at home the moment they arrive. I design each space
              with comfort and local character, and I share recommendations for food, coffee,
              and weekend adventures.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-2xl font-semibold text-zinc-900">213</p>
                <p className="text-sm text-zinc-500">Reviews received</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-2xl font-semibold text-zinc-900">4.93</p>
                <p className="text-sm text-zinc-500">Average rating</p>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <p className="text-2xl font-semibold text-zinc-900">100%</p>
                <p className="text-sm text-zinc-500">Response rate</p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold text-zinc-900">What guests can count on</h3>
              <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-zinc-500" />
                  Clear check-in instructions and local support.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-zinc-500" />
                  Fast communication, usually within one hour.
                </li>
                <li className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-zinc-500" />
                  Spaces cleaned and reset before every stay.
                </li>
              </ul>
            </div>
          </article>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Sarah&apos;s listings</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {hostListings.map((listing) => (
              <article
                key={listing.title}
                className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm"
              >
                <div className="mb-3 h-36 rounded-xl bg-gradient-to-br from-rose-100 via-orange-50 to-amber-100" />
                <h3 className="font-semibold text-zinc-900">{listing.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{listing.location}</p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-zinc-900">{listing.price}</span>
                  <span className="inline-flex items-center gap-1 text-zinc-700">
                    <Star className="h-3.5 w-3.5 fill-current" />
                    {listing.rating}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
