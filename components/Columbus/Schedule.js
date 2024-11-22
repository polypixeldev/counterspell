export default function Schedule() {
	// TODO: Edit this to match your event schedule
	const schedule = [
		{ time: "11:50 AM", event: "Doors Open" },
		{ time: "12:00-12:15 AM", event: "Introductions" },
		{ time: "12:15-12:30 AM", event: "Opening Ceremony" },
		{ time: "12:30 AM", event: "Hacking Begins!" },
		{
			time: "12:30-12:45 AM",
			event: "brainstorming / split into teams",
		},
		{ time: "1:00-2:15 PM", event: "Eat lunch if you brought it / Hack1" },
		{ time: "2:15 PM", event: "Delicious Snacks + Lightening Talks!" },
		{ time: "2:45-3:45 PM", event: "More Hacking!" },
		{ time: "3:45-4:00 PM", event: "Game demos! + Voting" },
		{
			time: "4:00-4:10 PM",
			event: "Bye bye!",
		},
	];

	return (
		<>
			<div className="flex flex-col items-center neuebit">
				<div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
					{schedule.map((item, i) => (
						<div className="flex" key={i}>
							<p>{item.event}</p>
							<div className="mx-4 -translate-y-3 border-b-4 border-dotted grow" />
							<p>{item.time}</p>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
