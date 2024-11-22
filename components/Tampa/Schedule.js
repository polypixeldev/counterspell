export default function Schedule() {
  const schedule = [
    { time: "8:30 AM", event: "Doors Open" },
    { time: "9:00 AM", event: "Opening Ceremony" },
    { time: "9:30 AM", event: "Intro to Game Development" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "3:00 PM", event: "Surprise 🌠" },
    { time: "6:30 PM", event: "Dinner & Lightning Talks" },
    { time: "7:30 PM", event: "Game Demos & Voting" },
    { time: "8:15 PM", event: "Closing Ceremony" },
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
