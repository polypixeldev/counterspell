import React, { useEffect, useRef, useState } from "react";
import useSound from "use-sound";
import Head from "next/head";

import Hero from "../components/Cambridge/Hero";
import About from "../components/Cambridge/About";
import Guilds from "../components/Cambridge/Guilds";
import Steps from "../components/Cambridge/Steps";
import Sponsors from "../components/Cambridge/Sponsors";
import Faq from "../components/Cambridge/Faq";
import Footer from "../components/Cambridge/Footer";

export default function Cambridge() {
  const [docHeight, setDocHeight] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);


  useEffect(() => {
    setDocHeight(document.documentElement.scrollHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };
  return (
    <>
      <Head>
        <title>Counterspell Cambridge</title>
      </Head>
      <div>
        <div
          className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-t from-darker from-20% to-transparent z-10 motion-safe:transition-all"
          style={{ opacity: docHeight - scrollPos < 1000 ? "0" : "100" }}
        ></div>
        <div
          style={{
            zIndex: 999,
          }}
          className="fixed bottom-3 right-3"
        >
        </div>
        <a
          className="fixed z-50 hidden px-3 py-2 text-white uppercase sm:block top-4 right-4 retro bg-pink hover:scale-105 hover:text-white"
          href="https://counterspell-signup.mattsoh.dev/"
          target="_blank"
          style={{ textDecorationLine: "none" }}
        >
          Sign up
        </a>
        <Hero />

        <div className="relative">
          <div className="absolute top-0 left-0 right-0 pointer-events-none -bottom-4 grainy-bg"></div>
          <div className="absolute top-0 left-0 right-0 -bottom-4 -z-10 bg-dark"></div>

          <About />
          <Guilds />
          <Steps />
          <Sponsors />

          <div className="flex flex-col justify-center py-12 text-center faq retro">
            <div className="m-6">
              <p className="mb-6 text-3xl uppercase">
                Frequently Asked Questions
              </p>
              <div className="flex justify-center">
                <Faq />
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <svg width="0" height="0" className="block">
          <filter id="grainy" x="0" y="0" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency=".5" />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
        </svg>
      </div>
    </>
  );
}
