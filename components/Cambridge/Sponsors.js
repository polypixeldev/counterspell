export default function Sponsors() {
    return (
      <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
        <p className="text-3xl uppercase">
          Sponsor a Magical Weekend
        </p>
        <p className="text-xl">
          Help make Cambridge's first in-person teenage hackathon happen!
        </p>
  
        <div className="z-30">
          <a
            className="inline-block px-12 py-3 my-12 text-2xl uppercase retro bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
            href="mailto:cambridge@counterspell.hackclub.com"
            style={{ textDecorationLine: "none" }}
          >
            Send us an email!
          </a>
        </div>
  
        <div class="flex flex-col items-center text-white">
          <p class="py-2 text-4xl">Our Sponsors</p>
          <div class="max-w-5xl bg-white w-full flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40">
            <a
              href="https://www.raspberrypi.org/"
              target="_blank"
              class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
            >
              <img
                src="https://www.raspberrypi.org/assets/components/site/header/foundation-logo-b0f19781e462be54d3371c3da03431bb6dc407fca9f36820d27a7ff4e673406e.svg"
                alt="Raspberry Pi Foundation"
                class="w-auto h-20 md:h-40"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
                href="https://www.nandos.co.uk/"
                target="_blank"
                class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
              >
                <img
                  src="https://www.nandos.co.uk/sites/all/themes/nandos/nandos-2015-styleguide-dist/images/layout/barci.svg"
                  alt="Nando's Cambridge - St Andrew's Street"
                  class="w-auto h-50 md:h-40"
                  style={{ imageRendering: "auto" }}
                />
              </a>
            <div class="flex gap-x-12 items-center flex-wrap justify-center gap-y-8">
              
              
              <a
                href=""
                target="_blank"
                class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
              >
              <img
                src="https://fireaway.co.uk/wp-content/uploads/2021/05/Group-15.png"
                alt="Fireaway Pizza Cambridge"
                class="w-auto h-15 md:h-28"
                style={{ imageRendering: "auto" }}
              />
              </a>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
  