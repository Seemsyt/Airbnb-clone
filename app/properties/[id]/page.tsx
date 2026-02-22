import Image from "next/image";
import ReservationSidebar from "@/app/component/ReservationSidebar";
const Page = () => {
  return (
    <main className="mx-auto min-h-screen max-w-[1500px] px-6 pt-20 pb-14">
      <div className="w-full">
        <div className="mb-5">
          <h1 className="text-3xl font-semibold md:text-4xl">Modern loft hosted by Seems</h1>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-zinc-700">
            <span className="font-medium text-zinc-900">4.92 · 87 reviews</span>
            <span>Superhost</span>
            <span>Brooklyn, New York, United States</span>
            <button className="font-medium underline underline-offset-2">Share</button>
            <button className="font-medium underline underline-offset-2">Save</button>
          </div>
        </div>

        <div className="relative mb-8 h-[58vh] w-full overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1600&auto=format&fit=crop"
            alt="Main property photo"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <section className="col-span-3 md:pr-6">
            <div className="border-b border-zinc-200 pb-6">
              <h2 className="text-2xl font-semibold md:text-3xl">Entire rental unit in Brooklyn</h2>
              <p className="mt-1 text-zinc-600">4 guests · 2 bedrooms · 2 beds · 1 bath</p>
            </div>

            <div className="flex items-center py-6 border-b border-zinc-200">
              <Image
                src="/logo.png"
                alt="Host profile photo of Seems"
                width={56}
                height={56}
                className="h-14 w-14 rounded-full border object-cover"
              />
              <p className="p-4 text-zinc-700"><strong className="text-zinc-900">Seems</strong> is your host · Superhost · 5 years hosting</p>
            </div>

            <div className="border-b border-zinc-200 py-6 space-y-5">
              <div>
                <h3 className="text-lg font-semibold">Great location</h3>
                <p className="text-zinc-600">95% of recent guests gave the location a 5-star rating.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Fast wifi</h3>
                <p className="text-zinc-600">Dedicated workspace and reliable internet for remote work.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Easy self check-in</h3>
                <p className="text-zinc-600">Check yourself in with the smart lock any time after 3 PM.</p>
              </div>
            </div>

            <div className="border-b border-zinc-200 py-6">
              <h3 className="text-xl font-semibold">About this place</h3>
              <p className="mt-3 text-zinc-700 leading-7">
                Stay in a quiet, design-forward loft with a sunny living room, full kitchen, and curated local recommendations.
                It is ideal for couples, small families, and remote workers who want to be close to cafes, parks, and the subway.
              </p>
            </div>

            <div className="border-b border-zinc-200 py-6">
              <h3 className="text-xl font-semibold">What this place offers</h3>
              <div className="mt-4 grid grid-cols-1 gap-3 text-zinc-700 sm:grid-cols-2">
                <p>Kitchen</p>
                <p>Wifi</p>
                <p>Dedicated workspace</p>
                <p>Free street parking</p>
                <p>TV</p>
                <p>Air conditioning</p>
                <p>Washer</p>
                <p>Hair dryer</p>
              </div>
            </div>

            <div className="py-6">
              <h3 className="text-xl font-semibold">House rules</h3>
              <div className="mt-4 grid grid-cols-1 gap-2 text-zinc-700">
                <p>Check-in: After 3:00 PM</p>
                <p>Checkout: 11:00 AM</p>
                <p>No smoking</p>
                <p>No parties or events</p>
              </div>
            </div>
          </section>

          <aside className="col-span-2">
            <ReservationSidebar />
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Page;
