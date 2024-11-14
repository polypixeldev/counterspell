export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "9:30 AM", event: "Intro and Welcome" },
    { time: "10:00 AM", event: "Workshop" },
    { time: "12:00 PM", event: "Lunch Break" },
    { time: "12:30 PM", event: "Hackathon Session" },
    { time: "5:30 PM", event: "Review and Winners Announcement" },
    { time: "6:00 PM", event: "End of Event" }
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
