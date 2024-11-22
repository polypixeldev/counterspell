export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "8:00 AM", event: "Doors Open" },
    { time: "8:30-9:00 AM", event: "Opening Ceremony" },
    { time: "9:00 AM", event: "Hacking Begins!" },
    { time: "9:00-10:35 AM", event: "Intro to Godot Workshop" },
    { time: "10:50-11:35 AM", event: "Onshape/CAD Workshop" },
    { time: "10:50-11:35 AM", event: "Figma/Design Workshop" },
    { time: "12:00 PM", event: "Lunch + Lightening Talks!" },
    { time: "4:00-5:00 PM", event: "Game demos! + Voting" },
    { time: "5:00-5:30 PM", event: "Closing Ceremony" },
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
