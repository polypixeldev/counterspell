export default function Schedule() {
  const schedule = [
    { time: "07:30 AM", event: "Doors open" },
    { time: "08:00 AM", event: "Opening ceremony" },
    { time: "08:15 AM", event: "PyGame Workshop" },
    { time: "09:00 AM", event: "Coding Session 1" },
    { time: "11:00 AM", event: "Boba" },
    { time: "11:30 AM", event: "Coding Session 1" },
    { time: "12:00 PM", event: "Fun Activity" },
    { time: "01:00 PM", event: "Lunch" },
    { time: "01:30 PM", event: "Fun Activity" },
    { time: "02:00 PM", event: "Coding Session" },
    { time: "04:00 PM", event: "Fun Activity" },
    { time: "04:15 PM", event: "Coding Session" },
    { time: "05:00 PM", event: "Boba" },
    { time: "05:25 PM", event: "Peer Voting" },
    { time: "06:25 PM", event: "Fun Activity" },
    { time: "07:00 PM", event: "Lightning Talks" },
    { time: "07:30 PM", event: "Closing Ceremony" },
    { time: "07:45 PM", event: "Photo Session" },
    { time: "08:00 PM", event: "Departure" },
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
