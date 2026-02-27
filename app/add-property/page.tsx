import {
  Bath,
  BedDouble,
  Home,
  ImagePlus,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function AddPropertyPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-14 pt-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
            Airbnb Style Hosting
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            List your property
          </h1>
          <p className="mt-3 max-w-2xl text-zinc-600">
            Add your place details, amenities, and pricing so guests can discover and
            book your home.
          </p>
        </section>

        <form className="mt-6 space-y-6">
          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Basic details</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-700">Property title</span>
                <input
                  type="text"
                  placeholder="Cozy apartment in city center"
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900"
                />
              </label>
              <label className="block space-y-2">
                <span className="text-sm font-medium text-zinc-700">Location</span>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
                  <input
                    type="text"
                    placeholder="City, Country"
                    className="w-full rounded-xl border border-zinc-300 bg-white py-2.5 pl-9 pr-3 text-sm outline-none transition focus:border-zinc-900"
                  />
                </div>
              </label>
              <label className="block space-y-2 md:col-span-2">
                <span className="text-sm font-medium text-zinc-700">Description</span>
                <textarea
                  rows={5}
                  placeholder="Tell guests what makes your place special..."
                  className="w-full resize-none rounded-xl border border-zinc-300 bg-white px-3 py-2.5 text-sm outline-none transition focus:border-zinc-900"
                />
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Property setup</h2>
            <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <Users className="h-4 w-4" />
                  Guests
                </span>
                <input
                  type="number"
                  min={1}
                  defaultValue={2}
                  className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
                />
              </label>
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <BedDouble className="h-4 w-4" />
                  Bedrooms
                </span>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
                />
              </label>
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <Bath className="h-4 w-4" />
                  Bathrooms
                </span>
                <input
                  type="number"
                  min={1}
                  defaultValue={1}
                  className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
                />
              </label>
              <label className="space-y-2">
                <span className="flex items-center gap-2 text-sm font-medium text-zinc-700">
                  <Home className="h-4 w-4" />
                  Type
                </span>
                <select className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900">
                  <option>Entire place</option>
                  <option>Private room</option>
                  <option>Shared room</option>
                </select>
              </label>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Pricing and media</h2>
            <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-700">Price per night ($)</span>
                <input
                  type="number"
                  min={1}
                  defaultValue={120}
                  className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-700">Cleaning fee ($)</span>
                <input
                  type="number"
                  min={0}
                  defaultValue={25}
                  className="w-full rounded-xl border border-zinc-300 px-3 py-2.5 text-sm outline-none focus:border-zinc-900"
                />
              </label>
            </div>

            <div className="mt-4 rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 p-6 text-center">
              <ImagePlus className="mx-auto h-6 w-6 text-zinc-500" />
              <p className="mt-2 text-sm font-medium text-zinc-700">
                Drag and drop photos or click to upload
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Use bright, high-quality photos to improve bookings.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Host standards</h2>
            <div className="mt-4 grid gap-3 text-sm text-zinc-700 sm:grid-cols-2">
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-zinc-500" />
                Keep calendar and pricing up to date.
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-zinc-500" />
                Respond to guests quickly and clearly.
              </p>
              <p className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-zinc-500" />
                Ensure clean and photo-accurate spaces.
              </p>
              <p className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-zinc-500" />
                Provide easy self check-in instructions.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="button" variant="outline">
                Save draft
              </Button>
              <Button type="submit">Publish property</Button>
            </div>
          </section>
        </form>
      </div>
    </main>
  );
}
