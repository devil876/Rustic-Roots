"use client";

import { useState } from "react";
import { Calendar, Users } from "lucide-react";
import { format, addDays, differenceInDays } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState(new Date());
  const [checkOut, setCheckOut] = useState(addDays(new Date(), 1));

  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [showIn, setShowIn] = useState(false);
  const [showOut, setShowOut] = useState(false);
  const [showGuests, setShowGuests] = useState(false);

  const whatsapp = "919876543210"; // CHANGE THIS

  const sendWhatsapp = () => {
    const nights = differenceInDays(checkOut, checkIn);

    const message = `Hello! I'd like to check availability at Rustic Roots.

📅 Check-in: ${format(checkIn, "yyyy-MM-dd")}
📅 Check-out: ${format(checkOut, "yyyy-MM-dd")}
🌙 Nights: ${nights}
🛏 Rooms: ${rooms}
👤 Adults: ${adults}
👶 Children: ${children}

Please let me know if these dates are available.`;

    window.open(
      `https://wa.me/${whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  const updateCount = (
  type: "adults" | "children" | "rooms",
  operation: "+" | "-"
) => {
    if (type === "adults") {
      setAdults((prev) => (operation === "+" ? prev + 1 : Math.max(1, prev - 1)));
    }
    if (type === "children") {
      setChildren((prev) => (operation === "+" ? prev + 1 : Math.max(0, prev - 1)));
    }
    if (type === "rooms") {
      setRooms((prev) => (operation === "+" ? prev + 1 : Math.max(1, prev - 1)));
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#FAF8F5] rounded-xl shadow-lg border border-[#EBE6DD] flex flex-col md:flex-row relative text-stone-800">
      
      {/* Check In */}
      <div className="flex-1 p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#D2C5B3] relative">
        <button
          onClick={() => {
            setShowIn(!showIn);
            setShowOut(false);
            setShowGuests(false);
          }}
          className="text-left w-full focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <Calendar size={24} className="text-[#B59C75]" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-stone-900">Check In</p>
              <p className="text-sm text-stone-600 mt-0.5">{format(checkIn, "yyyy-MM-dd")}</p>
            </div>
          </div>
        </button>

        {showIn && (
          <div className="absolute z-50 bg-[#FAF8F5] mt-4 top-full left-0 shadow-2xl rounded-lg border border-[#EBE6DD] p-2">
            <DayPicker
              mode="single"
              selected={checkIn}
              onSelect={(day) => {
                if (!day) return;
                setCheckIn(day);
                if (day >= checkOut) setCheckOut(addDays(day, 1));
                setShowIn(false);
                setShowOut(true); // Automatically open check-out next
              }}
            />
          </div>
        )}
      </div>

      {/* Check Out */}
      <div className="flex-1 p-4 md:p-6 border-b md:border-b-0 md:border-r border-[#D2C5B3] relative">
        <button
          onClick={() => {
            setShowOut(!showOut);
            setShowIn(false);
            setShowGuests(false);
          }}
          className="text-left w-full focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <Calendar size={24} className="text-[#B59C75]" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-stone-900">Check Out</p>
              <p className="text-sm text-stone-600 mt-0.5">{format(checkOut, "yyyy-MM-dd")}</p>
            </div>
          </div>
        </button>

        {showOut && (
          <div className="absolute z-50 bg-[#FAF8F5] mt-4 top-full left-0 shadow-2xl rounded-lg border border-[#EBE6DD] p-2">
            <DayPicker
              mode="single"
              selected={checkOut}
              disabled={{ before: addDays(checkIn, 1) }}
              onSelect={(day) => {
                if (!day) return;
                setCheckOut(day);
                setShowOut(false);
              }}
            />
          </div>
        )}
      </div>

      {/* Guests */}
      <div className="flex-1 p-4 md:p-6 relative">
        <button 
          onClick={() => {
            setShowGuests(!showGuests);
            setShowIn(false);
            setShowOut(false);
          }}
          className="text-left w-full focus:outline-none"
        >
          <div className="flex items-center gap-4">
            <Users size={24} className="text-[#B59C75]" strokeWidth={1.5} />
            <div>
              <p className="text-sm font-medium text-stone-900">Guests</p>
              <p className="text-sm text-stone-600 mt-0.5">
                {rooms} Room, {adults} Adult{adults > 1 ? "s" : ""}, {children} Child{children !== 1 ? "ren" : ""}
              </p>
            </div>
          </div>
        </button>

        {/* Custom Guest Pop-up */}
        {showGuests && (
          <div className="absolute z-50 bg-[#FAF8F5] mt-4 top-full left-0 shadow-2xl rounded-lg border border-[#D2C5B3] w-64 p-5 text-sm text-stone-800">
            {/* Rooms */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Rooms</span>
              <div className="flex items-center gap-4">
                <button onClick={() => updateCount("rooms", "-")} className="text-stone-400 hover:text-stone-800 transition">
                  —
                </button>
                <span className="w-4 text-center">{rooms}</span>
                <button onClick={() => updateCount("rooms", "+")} className="text-stone-400 hover:text-stone-800 transition">
                  +
                </button>
              </div>
            </div>

            {/* Adults */}
            <div className="flex justify-between items-center mb-4">
              <span className="font-medium">Adults</span>
              <div className="flex items-center gap-4">
                <button onClick={() => updateCount("adults", "-")} className="text-stone-400 hover:text-stone-800 transition">
                  —
                </button>
                <span className="w-4 text-center">{adults}</span>
                <button onClick={() => updateCount("adults", "+")} className="text-stone-400 hover:text-stone-800 transition">
                  +
                </button>
              </div>
            </div>

            {/* Children */}
            <div className="flex justify-between items-center">
              <span className="font-medium">Children</span>
              <div className="flex items-center gap-4">
                <button onClick={() => updateCount("children", "-")} className="text-stone-400 hover:text-stone-800 transition">
                  —
                </button>
                <span className="w-4 text-center">{children}</span>
                <button onClick={() => updateCount("children", "+")} className="text-stone-400 hover:text-stone-800 transition">
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="p-4 md:p-6 flex items-center justify-center bg-transparent">
        <button
          onClick={sendWhatsapp}
          className="w-full h-full min-h-[48px] bg-[#546553] text-white font-medium text-sm md:text-base hover:bg-[#435242] transition px-6 py-3 rounded-sm shadow-sm"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
}