import Acordian from "@/components/Acordian";
import Marquees from "@/components/Marquees";
import Link from "next/link";

const data1 = [
  "Never apply for a job again",
  "One profile for you career",
  "Swipe when you are okay with work",
  "Personailized opportunity",
  "Connect with empoloyers",
];


const data2 = [
  "Experience matter",
  "Anonymous profile",
  "Atypical job aquistion",
  "Secure personal information"
]

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
                <div className="flex flex-nowrap overflow-hidden whitespace-nowrap">
                  <Marquees />
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
      <div
        data-orientation="horizontal"
        role="separator"
        className="bg-neutral-200 data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px] !m-0"
      />
      <div className="xs:px-5 container mx-auto px-4 sm:px-6 md:px-7 lg:px-8 sm:space-y-30 space-y-8 py-14 sm:py-16 md:py-20 lg:py-24 lg:!max-w-[1260px]">
        <div>
          <div
            className="mb-7.5 xs:mb-8 sm:mb-12 md:mb-14 xl:mb-16"
            style={{ opacity: 1, transform: "none" }}
          >
            <video
              loop
              playsInline
              autoPlay
              muted
              src="/assets/home/videos/showoff-feature-a.mov"
              className="w-full rounded-lg md:hidden"
            />
            <video
              loop
              playsInline
              autoPlay
              muted
              src="/assets/home/videos/showoff-feature-a-long.mov"
              className="hidden w-full rounded-lg md:block"
            />
          </div>
          <div className="gap-7.5 flex flex-col md:flex-row md:gap-8">
            <div className="flex-1">
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="w-full text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl lg:leading-[60px]">
                  An Innovative Way To Get A Job!
                </h2>
                <h3 className="mt-2 text-sm text-neutral-800 sm:text-base">
                  Let companies apply directly to you with job opportunities!
                </h3>
                <Link
                  className=" bg-[#7000FF]  text-white rounded-xl sm:rounded-2xl px-5 py-3 text-sm font-medium inline-flex justify-center mt-5 !py-3.5 px-4 !text-sm !font-bold transition-transform hover:scale-[102%] active:scale-[98%] sm:mt-6 lg:mt-7 xl:mt-8"
                  target="_blank"
                  href="https://app.heydevs.io/auth/candidate/register"
                >
                  Create Profile
                </Link>
              </div>
            </div>
            <div className="flex flex-1">
              <div className="!m-0 flex-1" data-orientation="vertical">
                <div style={{ opacity: "1", transform: "none" }}>
                  {data1.map((item, index) => {
                    return (
                      <Acordian key={index} index={index} item={item}/>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-orientation="horizontal"
        role="separator"
        className="bg-neutral-200 data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px] !m-0"
      />
      <div className="xs:px-5 container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 sm:space-y-30  py-14 sm:py-16 md:py-20 lg:py-24 lg:!max-w-[1260px] mx-auto">
        <div>
          <div className="gap-7.5 flex flex-col md:flex-row md:gap-8">
            {/* first start */}
            <div className="flex-1">
              <div style={{ opacity: 1, transform: "none" }}>
                <h2 className="w-full text-3xl font-bold text-neutral-800 md:text-4xl lg:text-5xl lg:leading-[60px]">
                  Unbiased Hiring Experience
                </h2>
                <h3 className="mt-2 text-sm text-neutral-800 sm:text-base">
                  We actively hide any biased information - get opportunities
                  based solely on your talents and abilities.
                </h3>
              </div>
              <div style={{ opacity: 1, transform: "none" }}>
                <video
                  loop
                  playsInline
                  autoPlay
                  muted
                  src="/assets/home/videos/showoff-feature-b.mp4"
                  className="mt-12 w-full rounded-lg sm:mt-16 md:mt-20 md:hidden lg:mt-24 lg:order-last"
                />
                <video
                  loop
                  playsInline
                  autoPlay
                  muted
                  src="/assets/home/videos/showoff-feature-b-long.mov"
                  className="mt-12 hidden w-full rounded-lg sm:mt-16 md:mt-20 md:block lg:mt-24 lg:order-last"
                />
              </div>
            </div>
            {/* first end  */}
            <div className="flex flex-1 xl:pb-18 items-end md:pb-6 lg:pb-10">
                    <div className="!m-0 flex-1">
                    {
                      data2.map((item,index)=>{
                        return(
                          <Acordian key={index} index={index} item={item}/>
                        )
                      })
                    }
                    </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
