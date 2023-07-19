import Marquees from '@/components/Marquees'
import Link from 'next/link'
import React from 'react'

function company() {
  return (
  <>
  {/* hero section */}
  <section className="relative flex aspect-[393/586] max-h-screen w-full overflow-hidden object-cover md:aspect-[393/386] lg:aspect-[1920/1247]">
  <img
    alt="Hero-image-background"
    fetchpriority="high"
    decoding="async"
    data-nimg="fill"
    className="absolute aspect-[1920/2894] max-h-screen w-full object-cover object-center sm:aspect-[1920/1247]"
    src="/assets/companies/hero-background.webp"
    style={{
      position: "absolute",
      height: "100%",
      width: "100%",
      inset: 0,
      color: "transparent"
    }}
  />
  <div className="xs:px-5 mx-auto container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px] relative flex w-full flex-1 flex-col justify-center">
    <img
      alt="Hero-image-bracket"
      loading="lazy"
      width={1366}
      height={827}
      decoding="async"
      data-nimg={1}
      className="3xl:w-[45%] absolute bottom-[5%] right-0 w-[60%] -translate-y-1/4 object-cover object-center sm:w-[55%] lg:w-[43%]"
      src="/assets/companies/hero-bracket.webp"
      style={{ color: "transparent" }}
    />
    <div className="z-10 -translate-y-1/4">
      <h1 className="xs:text-3xl 3xl:text-7xl text-2xl font-semibold !leading-[1.25] text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl">
        Hire top tech
        <br />
        talent with ease
      </h1>
      <p className="mt-3 text-sm text-neutral-200 sm:mt-4 sm:text-base md:text-lg lg:mt-5 lg:w-[55%] lg:text-xl xl:text-2xl">
        The first active sourcing job platform for the APAC region.
      </p>
      <div className="xs:gap-3 mt-4 flex gap-2 sm:mt-6 sm:gap-4 md:mt-8 lg:mt-10 xl:mt-12">
        <Link
          className="text-neutral-black-01 bg-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center xs:!px-3 rounded-xl !px-2 !py-2 transition-transform hover:scale-[102%] active:scale-[98%] sm:!px-5 sm:!py-3 md:!px-8 lg:!px-12 xl:!px-16"
          target="_blank"
          href="https://app.heydevs.io/auth/company/login"
        >
          Log in
        </Link>
        <Link
          className="border border-white text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center xs:!px-3 rounded-xl !px-2.5 !py-2 transition-transform hover:scale-[102%] active:scale-[98%] sm:!px-5 sm:!py-3 md:!px-8 lg:!px-12 xl:!px-16"
          target="_blank"
          href="https://app.heydevs.io/auth/company/register"
        >
          Try for free
        </Link>
      </div>
    </div>
  </div>
</section>
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
      <div className="pb-18 bg-gradient-6 pt-10 sm:pb-20 sm:pt-12 md:pb-24 md:pt-16 lg:pb-28 lg:pt-20 xl:pb-32 xl:pt-24">
  <div className="xs:px-5 container mx-auto space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
    <div>
      <h2 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
        Active &amp; Relevant Tech Talent
      </h2>
      <div className="my-7.5 h-[1px] w-full bg-neutral-400 sm:my-8 md:my-12 lg:my-14 xl:my-16" />
      <div className="h-fit overflow-x-auto overflow-y-hidden">
        <div className="grid h-fit min-w-[934px] grid-cols-3 gap-5 lg:gap-6">
          <div className="bg-gradient-7 aspect-[298/308] h-full max-h-[350px] w-full rounded-2xl px-4 py-5 sm:px-5 md:max-h-[420px] md:px-6 md:py-6 lg:aspect-[382/465] lg:max-h-[500px]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-semibold capitalize !leading-tight text-white xl:text-4xl">
                Verified Tech Talent
              </h3>
              <div className="rounded-full border border-white bg-white/30 p-2 lg:p-3 xl:p-[15px]">
                <div className="aspect-square w-fit">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M16.9996 6.13866L16.9676 6.13387L16.9445 6.15692L15.6271 7.47432L15.5339 7.56754L15.6646 7.58427L24.5081 8.71454L7.495 25.7276L7.44927 25.7734L7.49501 25.8191L8.38624 26.7103L8.43198 26.7561L8.47771 26.7103L25.4904 9.69762L26.5862 18.5057L26.6026 18.6369L26.6961 18.5433L28.0135 17.2259L28.0365 17.203L28.0319 17.171L26.6601 7.60005L26.6533 7.55222L26.6055 7.54521L16.9996 6.13866Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.29372"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-5 h-[1px] w-full bg-neutral-300 lg:mb-6" />
            <p className="text-base !leading-relaxed text-white sm:h-full sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl">
              Using HeyDevs just like you have a team of professional
              IT-Sourcer, calling everyday and verifying tech talent for your
              company.
            </p>
          </div>
          <div className="bg-gradient-7 aspect-[298/308] h-full max-h-[350px] w-full rounded-2xl px-4 py-5 sm:px-5 md:max-h-[420px] md:px-6 md:py-6 lg:aspect-[382/465] lg:max-h-[500px]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-semibold capitalize !leading-tight text-white xl:text-4xl">
                Up-To-Date<div className="invisible">break</div>
              </h3>
              <div className="rounded-full border border-white bg-white/30 p-2 lg:p-3 xl:p-[15px]">
                <div className="aspect-square w-fit">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M16.9996 6.13866L16.9676 6.13387L16.9445 6.15692L15.6271 7.47432L15.5339 7.56754L15.6646 7.58427L24.5081 8.71454L7.495 25.7276L7.44927 25.7734L7.49501 25.8191L8.38624 26.7103L8.43198 26.7561L8.47771 26.7103L25.4904 9.69762L26.5862 18.5057L26.6026 18.6369L26.6961 18.5433L28.0135 17.2259L28.0365 17.203L28.0319 17.171L26.6601 7.60005L26.6533 7.55222L26.6055 7.54521L16.9996 6.13866Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.29372"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-5 h-[1px] w-full bg-neutral-300 lg:mb-6" />
            <p className="text-base !leading-relaxed text-white sm:h-full sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl">
              We update candidate statuses every week! Adding fresh candidates
              on the database.
            </p>
          </div>
          <div className="bg-gradient-7 aspect-[298/308] h-full max-h-[350px] w-full rounded-2xl px-4 py-5 sm:px-5 md:max-h-[420px] md:px-6 md:py-6 lg:aspect-[382/465] lg:max-h-[500px]">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-3xl font-semibold capitalize !leading-tight text-white xl:text-4xl">
                1 Month Window
              </h3>
              <div className="rounded-full border border-white bg-white/30 p-2 lg:p-3 xl:p-[15px]">
                <div className="aspect-square w-fit">
                  <svg
                    width={34}
                    height={34}
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M16.9996 6.13866L16.9676 6.13387L16.9445 6.15692L15.6271 7.47432L15.5339 7.56754L15.6646 7.58427L24.5081 8.71454L7.495 25.7276L7.44927 25.7734L7.49501 25.8191L8.38624 26.7103L8.43198 26.7561L8.47771 26.7103L25.4904 9.69762L26.5862 18.5057L26.6026 18.6369L26.6961 18.5433L28.0135 17.2259L28.0365 17.203L28.0319 17.171L26.6601 7.60005L26.6533 7.55222L26.6055 7.54521L16.9996 6.13866Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1.29372"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="mb-5 mt-5 h-[1px] w-full bg-neutral-300 lg:mb-6" />
            <p className="text-base !leading-relaxed text-white sm:h-full sm:text-lg md:text-xl lg:text-[22px] xl:text-2xl">
              Candidate “open-to-work” status will be deactivated every 30 days,
              ensuring only active and relevant profiles appear.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* new section */}
<div className="xs:px-5 container mx-auto space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px]">
  <section className="grid grid-cols-1 gap-y-4 py-10 sm:gap-y-6 sm:py-12 md:grid-cols-3 md:gap-y-8 md:py-16 lg:gap-y-10 lg:py-20 xl:gap-y-12 xl:py-24">
    <div className="relative aspect-square h-full w-full max-w-full text-4xl font-bold text-black sm:text-6xl md:text-3xl lg:text-4xl 2xl:text-5xl">
      <img
        alt="grid-background"
        className="aspect-square w-full"
        src="https://res.cloudinary.com/huong/image/upload/v1684492067/grid-background_eyoy10.svg"
      />
      <div className="reveal absolute left-4 top-1/2 -translate-y-1/2 uppercase">
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="w-fit bg-white">Streamlined</div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="mt-1.75 w-fit bg-white lg:mt-5">Hiring</div>
        </div>
        <div style={{ opacity: 1, transform: "none" }}>
          <div className="mt-1 w-fit bg-white lg:mt-3">Process</div>
        </div>
      </div>
    </div>
    <div className="-mt-4 sm:-mt-8 md:col-span-2 md:mt-0">
      <img
        className="aspect-[1012/414] w-full"
        src="https://res.cloudinary.com/huong/image/upload/v1684481487/Group_37183_yloksf.jpg"
        alt=""
      />
      <div className="flex items-center justify-end gap-3">
        <a
          target="_blank"
          className="group/contact flex items-center justify-end gap-3"
          href="https://app.heydevs.io/auth/company/register"
        >
          <div className="group-hover/contact:text-primary-700 text-lg font-medium text-black transition-colors md:text-xl lg:text-2xl xl:text-3xl">
            Contact Us
          </div>
          <div className="aspect-square w-[50px] bg-black md:w-[60px] lg:w-[70px] xl:w-[80px] 2xl:w-[105px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white">
              <svg
                className="transition-all group-hover/contact:translate-x-2"
                width={32}
                height={19}
                viewBox="0 0 32 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_1469_198)">
                  <g clipPath="url(#clip1_1469_198)">
                    <path
                      d="M24.2151 1.95965L24.1958 1.93359H24.1632H22.3001H22.1683L22.2489 2.03785L27.7029 9.09035H3.64281H3.57812V9.15504V10.4154V10.4801H3.64281H27.7024L22.249 17.4832L22.1678 17.5876H22.3001H24.1632H24.1957L24.2151 17.5617L30.0127 9.82402L30.0417 9.78536L30.0129 9.7466L24.2151 1.95965Z"
                      fill="#35353A"
                      stroke="#35353A"
                      strokeWidth="1.29372"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_1469_198">
                    <rect
                      width="31.4611"
                      height="18.2677"
                      fill="white"
                      transform="translate(0.535156 0.639648)"
                    />
                  </clipPath>
                  <clipPath id="clip1_1469_198">
                    <rect
                      width="27.168"
                      height="18.112"
                      fill="white"
                      transform="translate(3.57812 1.11841)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
    <div style={{ opacity: 1, transform: "none" }}>
      <div className="bg-[url('/assets/companies/process-1-background.webp')] bg-cover bg-no-repeat px-3 py-2.5 text-lg font-bold text-[#F6F8FA] md:text-xl lg:text-2xl">
        Step 01
      </div>
      <div className="mt-3 text-2xl font-bold text-black sm:mt-4 lg:mt-5 lg:text-3xl">
        Open an account
      </div>
      <div className="mt-2 text-base text-neutral-800 sm:mt-3 sm:max-w-[85%] sm:text-lg lg:mt-4 lg:text-xl">
        Create your own personalized company profile in just a few minutes.
      </div>
    </div>
    <div className="mt-6 md:mt-16" style={{ opacity: 1, transform: "none" }}>
      <div className="bg-[url('/assets/companies/process-2-background.webp')] bg-cover bg-no-repeat px-3 py-2.5 text-lg font-bold text-[#F6F8FA] md:text-xl lg:text-2xl">
        Step 02
      </div>
      <div className="mt-3 text-2xl font-bold text-black sm:mt-4 lg:mt-5 lg:text-3xl">
        Match with talent
      </div>
      <div className="mt-2 text-base text-neutral-800 sm:mt-3 sm:max-w-[85%] sm:text-lg lg:mt-4 lg:text-xl">
        Filter talent matching your requirements, or receive recommendations
        based on your needs.
      </div>
    </div>
    <div className="mt-6 md:mt-32" style={{ opacity: 1, transform: "none" }}>
      <div className="bg-[url('/assets/companies/process-3-background.webp')] bg-cover bg-no-repeat px-3 py-2.5 text-lg font-bold text-[#F6F8FA] md:text-xl lg:text-2xl">
        Step 03
      </div>
      <div className="mt-3 text-2xl font-bold text-black sm:mt-4 lg:mt-5 lg:text-3xl">
        Hire talent
      </div>
      <div className="mt-2 text-base text-neutral-800 sm:mt-3 sm:max-w-[98%] sm:text-lg lg:mt-4 lg:text-xl">
        Interview and track the hiring process completely on site - hire the
        best fit for your company!
      </div>
    </div>
  </section>
</div>

  </>
  )
}

export default company