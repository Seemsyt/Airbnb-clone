import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { properties } from "@/lib/properties";

export default function PropertiesPage() {
  return (
    <main className="min-h-screen bg-zinc-50 pb-12 pt-24">
      <section className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Stays</p>
          <h1 className="text-3xl font-semibold text-zinc-900">Properties</h1>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <Link
              key={property.id}
              href={`/properties/${property.id}`}
              className="overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 33vw"
                />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between gap-3 p-2">
                  <div>
                    <h2 className="text-base font-semibold text-zinc-900">{property.title}</h2>
                    <p className="text-sm text-zinc-500">{property.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm text-zinc-700">
                    <Star className="h-4 w-4 fill-current" />
                    {property.rating}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-700">
                  <span className="text-lg font-semibold text-zinc-900">${property.price}</span> /
                  night
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
