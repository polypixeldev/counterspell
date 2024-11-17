export default function Sponsors() {
    return (
        <div className="cont">
            <p className="text-3xl uppercase">
                Our Sponsors
            </p>
            <div className="max-w-5xl w-full flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40 mx-auto">
                <img
                    src="https://www.raspberrypi.org/assets/components/site/header/foundation-logo-b0f19781e462be54d3371c3da03431bb6dc407fca9f36820d27a7ff4e673406e.svg"
                    alt="Raspberry Pi Foundation"
                    className="w-auto h-20 md:h-40"
                    style={{ imageRendering: "auto" }}
                />
                <img
                    src=""
                    alt="Nandos"
                    className="w-auto h-20 md:h-40"
                    style={{ imageRendering: "auto" }}
                />
            </div>
        </div>
    );
}