export default function Schedule() {
  const schedule = [
    { time: "8.45 AM", event: "Doors open" },
    { time: "9:00 AM", event: "Opening ceremony" },
    { time: "9:30 AM", event: "Start working on your game!" },
    { time: "9:30 AM", event: "Workshop 1" },
    { time: "11:00 AM", event: "Workshop 2" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "1:00 PM", event: "Workshop 3" },
    { time: "5:15 PM", event: "Dinner" },
    { time: "7:30 PM", event: "Game demos and judging" },
    { time: "8:15 PM", event: "Closing ceremony" },
    { time: "8:30 PM", event: "Home time!" },
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
