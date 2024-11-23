import { Tilt } from "react-next-tilt";

export default function Guilds() {
	return (
		<div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
			<div className="text-3xl uppercase leading-[4rem] mx-6">
				<p>Artist, Musician or Coder?</p>
				<p>
					Regardless of which <span className="text-pink">guild</span> you are
					there is a place for you!
				</p>
			</div>

			<div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
				<Tilt className="rounded-lg" scale={1.1}>
					<div>
						<img
							src="/cards/artist.png"
							alt="Artist card"
							className="rounded-lg max-w-[340px]"
						/>
					</div>
				</Tilt>
				<Tilt className="rounded-lg" scale={1.1}>
					<div>
						<img
							src="/cards/musician.png"
							alt="Musician card"
							className="rounded-lg max-w-[340px]"
						/>
					</div>
				</Tilt>
				<Tilt className="rounded-lg" scale={1.1}>
					<div>
						<img
							src="/cards/hacker.png"
							alt="Hacker card"
							className="rounded-lg  max-w-[340px]"
						/>
					</div>
				</Tilt>
			</div>
		</div>
	);
}
