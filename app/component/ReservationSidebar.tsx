"use client"
import { useState } from "react";
import { Plus } from "lucide-react";
const ReservationSidebar = () => {
  const [guests, setGuests] = useState(1)
  const [children, setChildren] = useState(2)
  const [baby, setBaby] = useState(8)
  return (
    <aside className="sticky top-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm mt-7">
      <h2 className="mb-5 text-2xl">200 per night</h2>
      <div className="w-full rounded-2xl p-2 border grid grid-cols-2 ">
        <div className="flex justify-center items-center border-r-2 flex-col p-2 items-start"><h2 className="font-bold">Check in</h2>
          <span>24/2/2026</span>
        </div>
        <div className="flex justify-center items-center flex-col items-start p-2">
          <h2 className="font-bold">Check out</h2>
          <span>28/2/2026</span>
        </div>
        <div className="col-span-2">
          <h2>Guests</h2>
          <div className="flex flex-row justify-between p-1">
            <div><span>{guests} Guests</span>
              {children > 0 && (<span>, {children} Children</span>)}
              {baby > 0 && (<span>, {baby} Baby</span>)}</div>
            <div className="w-3 h-3 border-l-2 border-t-2 border-black flex items-end rotate-45"></div>
          </div>

        </div>

      </div>
           <div className="border rounded-2xl p-2">
          <div className="flex items-center justify-between p-2 rounded-2xl text-xl"><span>Guests older than 13</span> <button className="border rounded-full overflow-hidden hover:bg-gray-600 transition"><Plus size={30}></Plus></button></div>
          <div className="flex items-center justify-between p-2 rounded-2xl text-xl"><span>Guests older than 13</span> <button className="border rounded-full overflow-hidden hover:bg-gray-600 transition"><Plus size={30}></Plus></button></div>
          <div className="flex items-center justify-between p-2 rounded-2xl text-xl"><span>Guests older than 13</span> <button className="border rounded-full overflow-hidden hover:bg-gray-600 transition"><Plus size={30}></Plus></button></div>
        </div>
    </aside>
  );
};

export default ReservationSidebar;
