export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "8:00 AM", event: "Se abren las puertas" },
    { time: "9:00 AM", event: "Ceremonia de apertura" },
    { time: "9:30 AM", event: "Empieza a trabajar en tu juego" },
    { time: "10:00 AM", event: "Taller de desarrollo de juegos 1" },
    { time: "1:00 PM", event: "Almuerzo" },
    { time: "2:00 PM", event: "Actividad 1" },
    { time: "3:00 PM", event: "Taller de desarrollo de juegos 2" },
    { time: "5:00 PM", event: "Coffee Break" },
    { time: "6:00 PM", event: "Fin y presentación de juegos" },
    { time: "7:00 PM", event: "Votación y ceremonia de cierre" },
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
