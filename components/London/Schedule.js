export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "10:00 AM", event: "Doors open!" },
    { time: "10:30 AM", event: "Opening Ceremony" },
    { time: "11:00 AM", event: "Workshop 1: Construct 3" },
    { time: "11:45 AM", event: "Workshop 2: PyGame" },
    { time: "12:30 PM", event: "Lunch" },
    { time: "1:30 PM", event: "Work on your game!" },
    { time: "3:15 PM", event: "Game demos + judging!" },
    { time: "4:00 PM", event: "Closing ceremony" },
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
