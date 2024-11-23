export default function LiveSchedule() {
  return (
    <div style={{ overflowX: "auto" }} className="bg-[#0A081E] p-12 rounded-lg lg:w-[60%] w-[95%]">
      <div className="grid gap-2" style={{ gridTemplateColumns: "repeat(30, 250px)" }}>
        {["10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm", "12pm", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm"].map((time, index) => (
          <h1 key={index} className="text-xl">{time}</h1>
        ))}
        <div className="col-start-1 col-span-2 bg-indigo-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Registration</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Front Desk
          </p>
        </div>
        <div className="col-start-3 col-span-1 bg-indigo-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Opening Ceremony</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Main Stage
          </p>
        </div>
        <div className="col-start-4 col-span-1 row-start-3 bg-red-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Lunch: Pizza</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L10
          </p>
        </div>
        <div className="col-start-5 col-span-1 row-start-4 bg-green-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Gamification Mindset! </h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Arthur Cloche | Main Stage
          </p>
        </div>
        <div className="col-start-6 col-span-1 row-start-4 bg-green-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Sprig Workshop</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Main Stage
          </p>
        </div>
        <div className="col-start-7 col-span-1 row-start-4 bg-green-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Construct 3 Workshop</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Main Stage
          </p>
        </div>
        <div className="col-start-8 col-span-1 row-start-4 bg-green-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Unity Workshop</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L11
          </p>
        </div>
        <div className="col-start-9 col-span-1 row-start-4 bg-green-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">PyGame Workshop</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L11
          </p>
        </div>
        <div className="col-start-10 col-span-1 row-start-3 bg-red-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Dinner: Chipotle</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L10
          </p>
        </div>
        <div className="col-start-11 col-span-1 row-start-5 bg-sky-500  p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold"
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Super Smash Bros. Ultimate Tournament
          </h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Gaming Area
          </p>
        </div>
        <div className="col-start-12 col-span-1 row-start-5 bg-sky-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold"
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Mario Kart 8 Deluxe Tournament
          </h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Gaming Area
          </p>
        </div>
        <div className="col-start-[25] col-span-1 row-start-3 bg-red-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Breakfast: Pastries</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L10
          </p>
        </div>
        <div className="col-start-[26] col-span-2 bg-indigo-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Game Demos</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Main Stage
          </p>
        </div>
        <div className="col-start-[28] col-span-1 bg-indigo-500 p-4 h-24 rounded-lg w-1/2"
             style={{ justifySelf: "end" }}>
          <h1 className="text-xl font-semibold">Cleanup</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            L9, L10 & L11
          </p>
        </div>
        <div className="col-start-[29] col-span-1 bg-indigo-500 p-4 h-24 rounded-lg">
          <h1 className="text-xl font-semibold">Closing Ceremony</h1>
          <p style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            Main Stage
          </p>
        </div>

      </div>
    </div>
  );
}