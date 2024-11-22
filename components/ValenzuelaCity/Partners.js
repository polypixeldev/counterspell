import React from "react";

function SponsorTier({ sponsorInfo, sponsorsPerRow }) {
    return (
      <div className="xl:w-[60%] lg:w-[70%] md:w-[80%] w-[92%] z-[5]">
        {/*Splits the sponsors into sub-arrays of max length sponsorsPerRow*/}
        {Array.from(
          { length: Math.ceil(sponsorInfo.length / sponsorsPerRow) },
          (_, i) => sponsorInfo.slice(i * sponsorsPerRow, (i + 1) * sponsorsPerRow))
          .map((sponsorRow, rowIndex) => {
            return (
              <React.Fragment key={rowIndex}>
                <div
                  style={{ gridTemplateColumns: `repeat(${sponsorsPerRow}, minmax(0, 1fr))` }}
                  className={sponsorRow.length === sponsorsPerRow ? `grid lg:gap-6 md:gap-4 gap-2 lg:pt-6 md:pt-4 pt-2` : "flex flex-row justify-center lg:pt-6 md:pt-4 pt-2 lg:gap-6 md:gap-4 gap-2"}>
                  {sponsorRow.map((sponsor, sponsorIndex) => {
                    return (
                      <React.Fragment key={sponsorIndex}>
                        <a href={sponsor.url} target="_blank"
                           style={{ width: `${sponsorRow.length === sponsorsPerRow ? "100" : (1 / sponsorsPerRow * 100)}%` }}
                           className={"flex flex-col items-center"}>
                          <div
                            className="w-full bg-[#1A2F57] flex flex-col items-center p-4 rounded-xl duration-200 ease-in-out hover:scale-[103%]">
                            <img
                              src={"/city/toronto/sponsors/" + sponsor.fileName}
                              alt={sponsor.name + "Logo"}
                              className="lg:h-28 md:h-20 h-16 object-contain"
                              style={{ imageRendering: "auto" }}
                            />
                          </div>
                        </a>
                      </React.Fragment>
                    )
                  })}
                </div>
              </React.Fragment>
            )
          })}
      </div>
    )
  }
  
  export default function Sponsor() {
  return (
    <div className="py-16 bg-[#2A385A] flex flex-col justify-evenly items-center ">
      <div>
        <div className="text-5xl Partner text-white text-center retro mb-3">
          Meet our Partners
        </div>
      </div>
      <div className="w-full flex flex-col items-center lg:pt-12 md:pt-8 pt-6">
        <SponsorTier
          sponsorsPerRow={2}
          sponsorInfo={[
            { fileName: "valace.png", name: "ValAce Library", url: "https://web.facebook.com/ValenzuelaCityLibraryValACE" },
            { fileName: "devcon-manila.png", name: "Devcon Manila", url: "https://web.facebook.com/devconmanila" },
            { fileName: "aws-siklab.png", name: "AWS Siklab", url: "https://web.facebook.com/AWS.SiklabPH" },
            { fileName: "aws-cavite.png", name: "AWS Club Cavite", url: "https://web.facebook.com/profile.php?id=61558923103548" },
          ]}
        />
        {/*Bronze Sponsors*/}
        {/*<SponsorTier*/}
        {/*  sponsorsPerRow={3}*/}
        {/*  sponsorInfo={[*/}
        {/*  ]}*/}
        {/*/>*/}
      </div>
    </div>
  )
}