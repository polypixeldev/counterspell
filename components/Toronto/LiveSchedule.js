import React, { useEffect, useState, useRef } from "react";

export default function LiveSchedule() {
  const [hoursAfterStart, setHoursAfterStart] = useState(0);
  const [currentTime, setCurrentTime] = useState("");
  const scheduleRef = useRef(null);

  useEffect(() => {
    const startDate = new Date("2024-11-23T10:00:00");
    const now = new Date();
    const diffInHours = (now.getTime() - startDate.getTime()) / (1000 * 60 * 60);
    setHoursAfterStart(diffInHours);

    const day = diffInHours < 14 ? "November 23 | Day 1" : "November 24 | Day 2";
    setCurrentTime(day);
  }, []);

  useEffect(() => {
    if (scheduleRef.current) {
      const currentTimePosition = (hoursAfterStart * 258) + 45;
      scheduleRef.current.scrollLeft = currentTimePosition - scheduleRef.current.clientWidth / 2;
    }
  }, [hoursAfterStart]);

  const handleScroll = () => {
    if (scheduleRef.current) {
      const scrollLeft = scheduleRef.current.scrollLeft;
      const hoursScrolled = (scrollLeft - 45) / 258;
      const day = hoursScrolled < 14 ? "November 23 | Day 1" : "November 24 | Day 2";
      setCurrentTime(day);
    }
  };

  return (
    <div className="flex items-center flex-col pt-24">
      <h1 className="text-6xl pb-8">Schedule</h1>
      <h1 className="text-2xl pb-4 bg-[#FF4186] z-10 lg:w-[60%] w-[95%] px-12 pt-4 rounded-tr-lg rounded-tl-lg">{currentTime}</h1>
      <div ref={scheduleRef} onScroll={handleScroll} style={{ overflowX: "auto" }}
           className="bg-[#0A081E] py-4 px-12 lg:w-[60%] w-[95%] relative rounded-bl-lg rounded-br-lg">
        <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(30, 250px)" }}>
          {["10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"].map((time, index) => (
            <h1 key={index} className="text-xl relative">
              {time}
            </h1>
          ))}
          <div className="col-start-1 col-span-2 bg-indigo-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Registration</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Front Desk
            </p>
          </div>
          <div className="col-start-3 col-span-1 bg-indigo-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Opening Ceremony</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Main Stage
            </p>
          </div>
          <div className="col-start-4 col-span-1 row-start-3 bg-red-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Lunch: Pizza</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L10
            </p>
          </div>
          <div className="col-start-5 col-span-1 row-start-4 bg-green-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Gamification Mindset!</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Arthur Cloche | Main Stage
            </p>
          </div>
          <div className="col-start-6 col-span-1 row-start-4 bg-green-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Sprig Workshop</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Main Stage
            </p>
          </div>
          <div className="col-start-7 col-span-1 row-start-4 bg-green-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Construct 3 Workshop</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Main Stage
            </p>
          </div>
          <div className="col-start-8 col-span-1 row-start-4 bg-green-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Unity Workshop</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L11
            </p>
          </div>
          <div className="col-start-9 col-span-1 row-start-4 bg-green-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">PyGame Workshop</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L11
            </p>
          </div>
          <div className="col-start-10 col-span-1 row-start-3 bg-red-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Dinner: Chipotle</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L10
            </p>
          </div>
          <div className="col-start-11 col-span-1 row-start-5 bg-sky-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold"
                style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Super Smash Bros. Ultimate Tournament
            </h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Gaming Area
            </p>
          </div>
          <div className="col-start-12 col-span-1 row-start-5 bg-sky-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold"
                style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Mario Kart 8 Deluxe Tournament
            </h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Gaming Area
            </p>
          </div>
          <div className="col-start-[25] col-span-1 row-start-3 bg-red-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Breakfast: Pastries</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L10
            </p>
          </div>
          <div className="col-start-[26] col-span-2 bg-indigo-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Game Demos</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Main Stage
            </p>
          </div>
          <div className="col-start-[28] col-span-1 bg-indigo-500 p-4 h-24 rounded-lg w-1/2 z-10"
               style={{ justifySelf: "end" }}>
            <h1 className="text-xl font-semibold">Cleanup</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              L9, L10 & L11
            </p>
          </div>
          <div className="col-start-[29] col-span-1 bg-indigo-500 p-4 h-24 rounded-lg z-10">
            <h1 className="text-xl font-semibold">Closing Ceremony</h1>
            <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Main Stage
            </p>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 w-full">
          {Array.from({ length: 30 }).map((_, index) => (
            <div key={index} className="absolute top-0 bottom-0 border-r border-gray-600 opacity-50" style={{ left: `${index * 258 - 5}px` }}></div>
          ))}
        </div>
        <div className="absolute top-0 bottom-0 z-20"
             style={{ left: `${(hoursAfterStart * 258) + 45}px`, width: "2px", backgroundColor: "red" }}></div>
      </div>
    </div>
  );
}