"use client"
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
const ReservationSidebar = () => {
  const [guests, setGuests] = useState(1)
  const [children, setChildren] = useState(1)
  const [baby, setBaby] = useState(0)
  const [isMemberSelectorOpen, setIsMemberSelectorOpen] = useState(false)
  return (
    <aside className="fixed inset-x-0 bottom-0 z-50 mt-0 rounded-t-2xl border border-zinc-200 bg-white p-4 shadow-lg md:sticky md:top-24 md:mt-7 md:rounded-2xl md:p-6"
    >
      <h2 className="hidden md:block mb-5 text-2xl">200 per night</h2>
      <div className="w-full rounded-2xl p-2 border grid grid-cols-2 ">
        <div className="hidden md:flex justify-center items-center border-r-2 flex-col p-2 items-start"><h2 className="font-bold">Check in</h2>
          <span>24/2/2026</span>
        </div>
        <div className="hidden md:flex justify-center items-center flex-col items-start p-2">
          <h2 className="font-bold">Check out</h2>
          <span>28/2/2026</span>
        </div>
        <div className="col-span-2">
          <h2>Guests</h2>
          <div className="flex flex-row justify-between p-1">
            <div><span>{guests} Guests</span>
              {children > 0 && (<span>, {children} Children</span>)}
              {baby > 0 && (<span>, {baby} Baby</span>)}</div>
            <button
              type="button"
              aria-expanded={isMemberSelectorOpen}
              aria-label="Toggle member selector"
              onClick={() => setIsMemberSelectorOpen((prev) => !prev)}
              className="p-1 hover:cursor-pointer"
            >
              <div className={`w-3 h-3 border-l-2 border-t-2 border-black flex items-end transition-transform duration-300 ${isMemberSelectorOpen ? "rotate-45" : "-rotate-[135deg]"}`}></div>
            </button>
          </div>

        </div>
        <div><h3 className="font-bold">Book for 3 nights</h3></div>
        <div className=" border rounded-4xl md:col-span-2 p-2 bg-red-600 text-center hover:cursor-pointer hover:bg-red-700 "><button className=" text-2xl text-zinc-950 hover:cursor-pointer hover:text-zinc-900">Book Now</button></div>
      </div>

      <AnimatePresence initial={false}>
        {isMemberSelectorOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -8 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="border rounded-2xl p-2 mt-2">
              <div className="flex items-center justify-between p-2 rounded-2xl ">
                <div>
                  <h1 className="font-bold">Members</h1>
                  <span>Older than 13 year old</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setGuests((prev) => Math.max(1, prev - 1))}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={guests <= 1}
                  >
                    <Minus size={30}></Minus>
                  </button>
                  <span>{guests}</span>
                  <button
                    onClick={() => setGuests((prev) => prev + 1)}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={guests > 3}
                  >
                    <Plus size={30}></Plus>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl ">
                <div>
                  <h1 className="font-bold">Children</h1>
                  <span>Between 2 and 12 years</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setChildren((prev) => Math.max(0, prev - 1))}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={children <= 0}
                  >
                    <Minus size={30}></Minus>
                  </button>
                  <span>{children}</span>
                  <button
                    onClick={() => setChildren((prev) => prev + 1)}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={children > 6}
                  >
                    <Plus size={30}></Plus>
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 rounded-2xl ">
                <div>
                  <h1 className="font-bold">Baby</h1>
                  <span>Younger than 2 years old</span>
                </div>
                <div className="flex gap-2 items-center">
                  <button
                    onClick={() => setBaby((prev) => Math.max(0, prev - 1))}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={baby <= 0}
                  >
                    <Minus size={30}></Minus>
                  </button>
                  <span>{baby}</span>
                  <button
                    onClick={() => setBaby((prev) => prev + 1)}
                    className="border rounded-full overflow-hidden hover:border-gray-950 transition hover:cursor-pointer disabled:opacity-40 disabled:hover:cursor-not-allowed"
                    disabled={baby > 5}
                  >
                    <Plus size={30}></Plus>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default ReservationSidebar;
