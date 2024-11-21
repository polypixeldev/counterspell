import React, { useState, useEffect } from "react";

export default function Schedule() {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const timestamp = new Date().getTime();
        const response = await fetch(
          `https://adamxu.net/counterspell/schedule.json?t=${timestamp}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch schedule");
        }
        const data = await response.json();
        setSchedule(data);
      } catch (error) {
        console.error("Error fetching schedule:", error);
        // Optionally, set a default schedule or show an error message
      }
    };

    fetchSchedule();
  }, []);

  return (
    <>
      <h2
        className="text-center text-6xl uppercase retro text-whitepurp"
        id="schedule"
      >
        The Schedule
      </h2>
      <div className="flex flex-col items-center neuebit">
        {schedule.map((day, dayIndex) => (
          <div key={dayIndex} className="w-full max-w-3xl px-12 pb-12">
            <h3 className="text-4xl font-bold uppercase retro text-whitepurp">
              {day.day}
            </h3>
            <div className="flex flex-col space-y-2 text-xl sm:text-2xl lg:text-3xl">
              {day.events.map((item, i) => (
                <div className="flex" key={i}>
                  <p className="w-1/2">{item.event}</p>
                  <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
                  <p className="w-1/2 text-right">{item.time}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
