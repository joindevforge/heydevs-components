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
  "Secure personal information",
];

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
                    return <Acordian key={index} index={index} item={item} />;
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
                {data2.map((item, index) => {
                  return <Acordian key={index} index={index} item={item} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-2 relative pb-10 pt-16 sm:pb-20 md:pb-32 lg:pt-32 overflow-hidden">
        <div className="xs:px-5 container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px] mx-auto">
          <div className="space-y-10 sm:space-y-16">
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-end">
                <h2 className="text-center text-[42px] font-bold leading-[42px] text-neutral-100 sm:text-5xl xl:text-6xl">
                  Simple Steps To Start
                </h2>
                <Link
                  className="text-neutral-black-01 bg-white rounded-md px-5 py-3 text-sm font-medium inline-flex justify-center group/button-sign-up flex items-center gap-2 !px-4 !py-3.5 !font-bold !text-neutral-800"
                  target="_blank"
                  href="https://app.heydevs.io/auth/candidate/register"
                >
                  Sign up now{/* */}{" "}
                  <svg
                    fill="none"
                    height={18}
                    viewBox="0 0 18 18"
                    width={18}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4.5 w-4.5 transition-transform group-hover/button-sign-up:translate-x-1"
                  >
                    <path
                      d="M10.8226 14.1151C10.6801 14.1151 10.5376 14.0626 10.4251 13.9501C10.2076 13.7326 10.2076 13.3726 10.4251 13.1551L14.5801 9.00009L10.4251 4.84509C10.2076 4.62759 10.2076 4.26759 10.4251 4.05009C10.6426 3.83259 11.0026 3.83259 11.2201 4.05009L15.7726 8.60259C15.9901 8.82009 15.9901 9.18009 15.7726 9.39759L11.2201 13.9501C11.1076 14.0626 10.9651 14.1151 10.8226 14.1151Z"
                      fill="currentColor"
                    />
                    <path
                      d="M15.2475 9.5625H2.625C2.3175 9.5625 2.0625 9.3075 2.0625 9C2.0625 8.6925 2.3175 8.4375 2.625 8.4375H15.2475C15.555 8.4375 15.81 8.6925 15.81 9C15.81 9.3075 15.555 9.5625 15.2475 9.5625Z"
                      fill="currentColor"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div style={{ opacity: 1, transform: "none" }}>
              <div className="-mx-4 overflow-x-auto px-4 pb-4 ">
                <div className="grid h-fit w-full min-w-[620px] grid-cols-4 gap-3 md:gap-4 xl:gap-6">
                  <div className="flex h-full w-full flex-col gap-y-2 lg:gap-y-6">
                    <div className="relative flex w-full flex-1 items-end justify-end overflow-hidden rounded-3xl bg-white">
                      <div className="font-sembolid absolute left-[12%] top-[6%] text-4xl md:text-5xl lg:text-6xl">
                        01
                      </div>
                      <img
                        alt="step-1"
                        loading="lazy"
                        width={238}
                        height={503}
                        decoding="async"
                        data-nimg={1}
                        className="absolute left-[30%] top-[30%] w-[80%]"
                        style={{ color: "transparent" }}
                        src="/assets/home/images/step-1.webp"
                      />
                    </div>
                    <div className="font-medium text-white md:text-lg lg:text-2xl xl:text-3xl">
                      Create account &amp; complete profile
                    </div>
                  </div>
                  <div className="relative col-span-2 h-full w-full overflow-hidden">
                    <svg
                      width={565}
                      height={586}
                      viewBox="0 0 565 586"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full"
                    >
                      <g clipPath="url(#clip0_3134_34460)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M215 0H0V586H565V152C565 134.327 550.673 120 533 120H339C322.984 120 310 107.016 310 91L309.984 90.986C309.449 73.7821 295.334 60 278 60H265.627C253.131 60 243 49.8694 243 37.3726V29.5C243 13.724 230.616 0.840293 215.039 0.0394783L215 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_3134_34460">
                          <rect width={565} height={586} rx={24} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <img
                      alt="step-2"
                      loading="lazy"
                      width={324}
                      height={658}
                      decoding="async"
                      data-nimg={1}
                      className="absolute left-[6%] top-[30%] w-[60%] lg:w-[60%]"
                      style={{ color: "transparent" }}
                      src="/assets/home/images/step-2.webp"
                    />
                    <div className="font-sembolid absolute left-[6%] top-[6%] text-4xl md:text-5xl lg:text-6xl">
                      02
                    </div>
                    <div className="3xl:text-[35px] 3xl:top-3 absolute right-0 top-0 text-lg font-medium text-white sm:text-lg md:top-1 md:text-[21px] lg:text-[28px] xl:top-2 xl:text-3xl">
                      Set your profile to
                    </div>
                    <div className="3xl:top-18 3xl:text-[32px] xl:top-13 absolute right-0 top-8 text-[17px] font-medium text-white md:top-10 md:text-[19px] lg:top-14 lg:text-[26px]">
                      “Open to work”
                    </div>
                  </div>
                  <div className="flex flex-col justify-end gap-2 lg:gap-6">
                    <div className="relative flex aspect-[284/316] w-full items-end justify-end overflow-hidden rounded-3xl bg-white">
                      <img
                        alt="step-3"
                        loading="lazy"
                        width={191}
                        height={392}
                        decoding="async"
                        data-nimg={1}
                        className="absolute left-1/2 top-[35%] aspect-[191/392] w-[80%] -translate-x-1/2"
                        style={{ color: "transparent" }}
                        src="/assets/home/images/step-3.webp"
                      />
                      <div className="min-h-[90%] max-w-[90%] flex-1">
                        <div className="font-sembolid text-3xl lg:text-4xl">
                          03
                        </div>
                      </div>
                    </div>
                    <div className="font-medium text-white md:text-lg lg:text-2xl xl:text-3xl">
                      Receive job invites from companies
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gradient-3 md:pb-30 relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-52 md:pt-60 lg:pt-72 xl:pb-36">
        <img
          alt="robot-hand"
          loading="lazy"
          width={806}
          height={602}
          decoding="async"
          data-nimg={1}
          className="xs:w-1/2 xs:top-[12%] absolute -right-[5%] top-[10%] -z-10 w-2/3 sm:top-[20%] sm:w-[45%] md:top-[29%] md:w-[36%] lg:top-[32%] lg:w-[32%] xl:top-[26%] xl:w-[36%]"
          style={{ color: "transparent" }}
          src="/assets/home/images/robot-hand.webp"
        />
        <div className="xs:px-5 mx-auto container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
          <div className="lg:space-y-7.5 px-7.5 mx-auto aspect-[1536/650] w-full space-y-4 rounded-xl bg-cover bg-no-repeat py-8 sm:space-y-5 sm:px-16 sm:py-16 md:max-w-3xl md:space-y-5 md:px-20 md:py-20 lg:max-w-4xl lg:rounded-3xl lg:py-24 xl:py-36">
            <div style={{ opacity: 1, transform: "none" }}>
              <h1 className="mr-auto w-fit max-w-xs text-left text-3xl font-bold text-neutral-800 sm:ml-auto sm:mr-0 sm:max-w-lg sm:text-right sm:text-5xl md:text-6xl lg:max-w-2xl lg:text-7xl xl:max-w-2xl xl:text-7xl">
                Find Your Perfect Tech Stack
              </h1>
            </div>
            <div
              className="flex items-center justify-end gap-4 lg:gap-6"
              style={{ opacity: 1, transform: "none" }}
            >
              <button
                color="primary"
                type="button"
                className="border border-primary-7000 text-primary-7000  rounded-full  text-sm font-bold sm:text-lg md:text-xl  xs:!h-12 xs:!w-12 aspect-square !h-12 !w-12 !p-2 sm:!p-3 "
              >
                <div className="flex aspect-square w-full h-full  items-center justify-center">
                  <svg
                    width={32}
                    height={19}
                    viewBox="0 0 32 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-primary-500 aspect-[32/19] w-4 sm:w-6 md:w-8"
                  >
                    <g clipPath="url(#clip0_2402_15047)">
                      <g clipPath="url(#clip1_2402_15047)">
                        <path
                          d="M23.6799 1.31976L23.6606 1.2937L23.628 1.2937L21.765 1.2937L21.6331 1.2937L21.7137 1.39797L27.1678 8.45047L3.10765 8.45046L3.04297 8.45046L3.04297 8.51515L3.04297 9.77554L3.04297 9.84022L3.10765 9.84022L27.1673 9.84023L21.7139 16.8433L21.6326 16.9477L21.765 16.9477L23.628 16.9477L23.6605 16.9477L23.6799 16.9218L29.4776 9.18413L29.5066 9.14548L29.4777 9.10672L23.6799 1.31976Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.29372"
                        />
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2402_15047">
                        <rect width="71.4611" height="18.2677" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_2402_15047">
                        <rect
                          width="27.168"
                          height="18.112"
                          fill="white"
                          transform="translate(3.04297 0.47876)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </button>
              <p className="text-base text-neutral-700 md:max-w-xl md:text-lg lg:text-xl xl:text-[21px]">
                Say goodbye to sifting through irrelevant job listings. With
                HeyDevs, you&apos;ll receive job offers for positions that match
                your preferred tech stack and desired salary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="xs:px-5 container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
  <div className="grid grid-cols-2 gap-8 py-24 sm:py-28">
    <div style={{ opacity: 1, transform: "none" }}>
      <img
        alt="enter"
        loading="lazy"
        width={444}
        height={410}
        decoding="async"
        data-nimg={1}
        className="my-auto ml-auto hidden md:block"
        style={{ color: "transparent" }}
        src="/assets/home/images/enter-image.webp"
      />
    </div>
    <div className="col-span-2 md:col-span-1">
      <div className="space-y-4 text-5xl font-bold sm:text-6xl lg:text-7xl">
        <div style={{ opacity: 1, transform: "none" }}>
          <div>
            <span>Not</span> <span className="text-primary-7000">Looking?</span>
          </div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div>No Problem!</div>
        </div>
      </div>
      <div style={{ opacity: 1, transform: "none" }}>
        <div className="mt-5 text-lg text-neutral-600 sm:mt-8 lg:mt-10 xl:mt-12">
          Put your profile on &quot;hold&quot; and receive job offers only when you&apos;re
          &quot;open-to-work&quot;. Your profile remains hidden from your employer,
          ensuring privacy whether you’re looking for work or not.
        </div>
      </div>
      <div style={{ opacity: 1, transform: "none" }}>
        <a
          className="bg-primary-7000 text-white rounded-xl sm:rounded-2xl px-5 py-3 text-sm font-medium inline-flex justify-center mt-7.5 hover:bg-primary-7000 active:bg-primary-800 flex items-center gap-2 !px-5 !py-3.5 !text-sm !font-bold transition-colors sm:mt-6"
          target="_blank"
          href="https://app.heydevs.io/auth/candidate/register"
        >
          Claim Your Profile{/* */}{" "}
          <svg
            fill="none"
            height={18}
            viewBox="0 0 18 18"
            width={18}
            xmlns="http://www.w3.org/2000/svg"
            className="h-4.5 w-4.5"
          >
            <path
              d="m3.75 13.125 10.5-10.5M3.75 5.422v7.703h7.703"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth="1.5"
            />
            <path
              d="M2.625 16.5h12.75"
              opacity="0.4"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
              strokeWidth="1.5"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

    </>
  );
}
