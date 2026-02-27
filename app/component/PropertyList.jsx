import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { properties } from "@/lib/properties";

const PropertyList = () => {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            Featured stays
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900 sm:text-3xl">
            Property List
          </h2>
        </div>
        <Button asChild variant="outline" size="sm">
          <Link href="/properties">View all</Link>
        </Button>
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
              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-zinc-700">
                {property.tag}
              </span>
            </div>

            <div className="space-y-3 p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="line-clamp-1 text-base font-semibold text-zinc-900">
                    {property.title}
                  </h3>
                  <p className="text-sm text-zinc-500">{property.location}</p>
                </div>
                <span className="rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-zinc-700">
                  {property.rating}★
                </span>
              </div>

              <div className="flex items-center justify-between">
                <p className="text-sm text-zinc-600">
                  <span className="text-lg font-semibold text-zinc-900">
                    ${property.price}
                  </span>{" "}
                  / night
                </p>
                <Button size="sm">Book now</Button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
