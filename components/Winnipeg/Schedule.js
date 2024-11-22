export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "08:45", event: "Doors open" },
    { time: "09:00", event: "Opening ceremony" },
    { time: "09:30", event: "Introductions / Icebreakers" },
    { time: "10:00", event: "Morning snack" },
    { time: "11:00", event: "Workshop 1" },
    { time: "12:30", event: "Lunch" },
    { time: "15:00", event: "Workshop 2" },
    { time: "18:00", event: "Dinner & Lightning talks" },
    { time: "19:30", event: "Game demos!" },
    { time: "20:30", event: "Closing ceremony" },
    { time: "21:00", event: "Pick-up time" },
    { time: "21:15", event: "Doors close" }
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              <p>{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
