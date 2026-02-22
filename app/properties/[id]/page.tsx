import Image from "next/image";
import ReservationSidebar from "@/app/component/ReservationSidebar";
const Page = () => {
  return (
    <main className="min-h-screen pt-20 mx-auto max-w-[1500px] px-6">
      <div className="w-full overflow-hidden rounded-2xl">
        <h1 className="mb-4 text-2xl font-semibold">Comfort of your choice</h1>
        <div className="relative h-[64vh] w-full overflow-hidden rounded-2xl mb-6">
          <Image
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=1200&auto=format&fit=crop"
            alt="Property image"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-5">
          <div className="col-span-3 py-6 pr-6">
            <h1 className="md:text-4xl">property Detail</h1>
            <span className=" text-gray-600 block text-lg">4 guests 2 bedroom</span>
            <hr />
            <div className="flex items-center py-6">
              <Image src="/logo.png" alt='owner' width={50} height={50} className=" rounded-full overflow-hidden">

              </Image>
              <p className="p-4"><strong>Seems</strong> is your host</p>

            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis, aut commodi sequi atque voluptates fugit magni hic aspernatur autem ad eligendi, velit voluptate reiciendis mollitia. Laboriosam possimus suscipit praesentium amet culpa repudiandae debitis eum sequi at! Consequuntur distinctio, quis quia ut maiores quasi. Alias, quos?</p>
          </div>
          <div className="col-span-2">
            <ReservationSidebar />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
