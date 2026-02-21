import Image from "next/image";
import { Button } from "@/components/ui/button";

const PropertyList = () => {
  const properties = [
    {
      id: 1,
      title: "Ocean View Villa",
      location: "Malibu, California",
      price: 320,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop",
      tag: "Beach",
    },
    {
      id: 2,
      title: "Forest Cabin Retreat",
      location: "Bend, Oregon",
      price: 180,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=1200&auto=format&fit=crop",
      tag: "Forest",
    },
    {
      id: 3,
      title: "Modern City Loft",
      location: "Seattle, Washington",
      price: 210,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
      tag: "City",
    },
    {
      id: 4,
      title: "Mountain Escape House",
      location: "Aspen, Colorado",
      price: 275,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1200&auto=format&fit=crop",
      tag: "Mountain",
    },
    {
      id: 5,
      title: "Desert Glass Home",
      location: "Scottsdale, Arizona",
      price: 245,
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1430285561322-7808604715df?q=80&w=1200&auto=format&fit=crop",
      tag: "Desert",
    },
    {
      id: 6,
      title: "Lakefront Cottage",
      location: "Lake Tahoe, Nevada",
      price: 260,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1472228283686-42356d789f66?q=80&w=1200&auto=format&fit=crop",
      tag: "Lake",
    },
  ];

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
        <Button variant="outline" size="sm">
          View all
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {properties.map((property) => (
          <article
            key={property.id}
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
          </article>
        ))}
      </div>
    </section>
  );
};

export default PropertyList;
