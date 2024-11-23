export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "8:00 AM", event: "Doors open" },
    { time: "8:30 AM", event: "Breakfast"},
    { time: "9:00 AM", event: "Opening ceremony" },
    // { time: "10:30 PM", event: "Lunch" },
    { time: "9:30 AM", event: "Start working on your game!" },
    { time: "9:30 AM", event: "Workshop 1"},
    { time: "10:45 AM", event: "End of Workshop 1"},
    { time: "12:00 PM", event: "Lunch" },
    { time: "1:30 PM", event: "Guest Speaker Q&A - Former Recruiter from Activision and other companies!" },
    // { time: "2:00 PM", event: "Gamedev workshop 2" },
    { time: "6:00 PM", event: "Dinner" },
    // { time: "8:00 PM", event: "Lightning talks" },
    // { time: "12:00 AM", event: "Midnight surprise" },
    // { time: "8:00 AM", event: "Breakfast" },
    { time: "7:30 PM", event: "Game demos and peer judging!" },
    { time: "8:30 PM", event: "Closing ceremony and winners announced" },
    { time: "9:00 PM", event: "Doors Closed"}
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
