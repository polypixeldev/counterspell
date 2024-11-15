import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr:false });

export default function Locations() {
  return (
    
      <div className="relative px-3 py-24 text-center text-5xl neuebit bg-darker retro">
          Meet Us At{' '} 
          <a 
            href="https://maps.app.goo.gl/Lq6LM8PnX8e9fTKE6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
          Vancouver Independent School for Science and Technology, 1490 W Broadway #200, Vancouver, BC V6H 4E8
          </a>!

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map full={false} />
        </div>
      </div>

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>Counterspell is organized by teenagers, for teenagers.</p>
          <p>
            Want to join click the link! {" "}
            <a
              href="https://forms.hackclub.com/t/sdMpoL7wK9us"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Sign up here
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}
