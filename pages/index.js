import Marquees from "@/components/Marquees";
import Link from "next/link";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

export default function Home() {
  return (
    <>
      <div className="3xl:aspect-[1920/1082] relative flex aspect-[393/412] max-h-screen w-full flex-col items-center justify-center gap-4 overflow-hidden bg-neutral-900 bg-cover bg-center bg-repeat pt-16 sm:gap-6 sm:pt-10 md:aspect-[393/414] md:gap-8 lg:aspect-[1280/1046]   bg-[url('/assets/home/images/hero-background.webp')]">
        <div style={{ opacity: "1", transform: "none" }}>
          <div className="xs:p-16 relative mx-4 flex max-w-md items-center justify-center p-14 sm:max-w-6xl sm:p-32 md:mx-10 md:max-w-4xl md:p-36 lg:p-40 xl:p-48">
            <div className="absolute h-full w-full scale-x-[105%] scale-y-[120%] bg-[url('/assets/home/images/double-bracket.webp')] bg-contain bg-center bg-no-repeat sm:!scale-100" />
            <div className="3xl:gap-10 z-10 flex max-w-xs flex-col items-center justify-center gap-3 sm:max-w-md sm:gap-4 md:max-w-xl lg:gap-6 xl:gap-8">
              <h1 className="xs:text-2xl whitespace-nowrap text-center text-[22px] font-bold leading-none text-white sm:text-4xl md:text-5xl lg:text-6xl">
                Swipe to find your
                <br />
                next dream job!
              </h1>
              <p className="mb-1 max-w-xs text-center text-sm font-medium text-neutral-200 sm:mb-3 sm:max-w-full sm:text-base md:mb-4 md:block md:text-lg xl:mb-6 xl:text-xl">
                Let companies apply{" "}
                <span className="block sm:inline">directly to you!</span>
              </p>
              <div className="xs:gap-3 !m-0 flex gap-2 sm:gap-4">
                <Link
                  className="text-neutral-black-01 bg-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center xs:!px-3 rounded-xl !px-2 !py-2 transition-transform hover:scale-[102%] active:scale-[98%] sm:!px-5 sm:!py-3 md:!px-8 lg:!px-12 xl:!px-16"
                  target="_blank"
                  href="https://app.heydevs.io/auth/candidate/login"
                >
                  Log in
                </Link>
                <Link
                  className="border border-white text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center xs:!px-3 rounded-xl !px-2.5 !py-2 transition-transform hover:scale-[102%] active:scale-[98%] sm:!px-5 sm:!py-3 md:!px-8 lg:!px-12 xl:!px-16"
                  target="_blank"
                  href="https://app.heydevs.io/auth/candidate/register"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className=" bg-neutral-100">
        <div className="xs:px-5 container mx-auto space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
          <div style={{ opacity: "1", transform: "none" }}>
            <section className="pt-[30px] xs:pb-8 pb-6 sm:pb-10">
              <h2 className="text-lg font-bold text-neutral-800 sm:text-xl md:text-2xl lg:text-3xl">
                Work With Top Companies
              </h2>
              <div className="mt-2 py-3 sm:mt-3">
                <div className="flex flex-nowrap overflow-hidden whitespace-nowrap h-[100vh] bg-red-400">
                  <Marquees/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
