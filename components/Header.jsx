import Link from "next/link";
import React, { useState, useEffect } from "react";

function Header() {
  const [active, setActive] = useState("developer");
  const handleButtonClick = (button) => {
    setActive(button);
  };

  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrolled = window.scrollY;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const percentage = (scrolled / height) * 100;
    setScrollPercentage(percentage);
  };
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleButton = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = 'auto';
    }
  }, [isDrawerOpen]);

  const header = scrollPercentage > 8 ? "white" : "transparent";

  

  return (
    <>
      <header
        className={`${
          header === "white"
            ? "bg-white fixed top-0 z-20 py-4 sm:py-6  w-full transition-colors group/header"
            : " bg-transparent fixed top-0 z-20 py-4 sm:py-6  w-full transition-colors group/header"
        }`}
      >
        <div className="xs:px-5 mx-auto container space-y-8 px-4 sm:px-6 lg:px-8 lg:!max-w-[1260px] relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button onClick={handleButton}>
              <svg
                width={40}
                height={40}
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`z-50 !m-0 cursor-pointer group-[:not(.has-scroll-over)] lg:hidden ${
                  header === "white" ? " text-black" : " text-white"
                }`}
              >
                <path
                  d="M11 20H29M11 14H29M11 26H29"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <Link href="/">
              <svg
                width={152}
                height={34}
                viewBox="0 0 152 34"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
                className={`aspect-[152/33] w-[93px] group-[:not(.has-scroll-over)] sm:w-[152px] ${
                  header === "white" ? " text-black" : " text-white"
                }`}
              >
                <path
                  d="M56.5249 17.1715C56.5249 14.6079 55.4235 13.3261 53.2208 13.3261C52.107 13.3247 51.029 13.7181 50.1785 14.4361C49.7555 14.7584 49.4005 15.161 49.134 15.6208C48.8674 16.0805 48.6945 16.5884 48.6252 17.1151V26.4082H45.4777V3.77661H48.6252L48.6047 11.9545L48.2838 14.0875L48.6355 14.2105L49.6958 12.3211C50.2122 11.7404 50.8399 11.2688 51.5417 10.9342C52.2411 10.5792 53.0139 10.3922 53.7984 10.3882C55.6127 10.3882 57.0469 10.9975 58.1013 12.216C59.1556 13.4346 59.6836 15.0864 59.6853 17.1715V26.4005H56.5249V17.1715Z"
                  fill="currentColor"
                />
                <path
                  d="M69.0331 26.6519C66.5736 26.6519 64.6481 25.9409 63.2566 24.519C61.8651 23.097 61.1685 21.0871 61.1667 18.4893C61.1667 15.9958 61.883 14.009 63.3156 12.5289C64.7482 11.0489 66.6309 10.3097 68.9638 10.3114C71.2692 10.3114 73.1083 11.0685 74.481 12.5828C75.8536 14.097 76.5383 16.0624 76.5348 18.4791C76.5348 19.0841 76.5348 19.5045 76.504 19.7378H64.4375C64.5916 21.0589 65.0785 22.0895 65.8984 22.8295C66.7621 23.5875 67.8841 23.9857 69.0331 23.9421C70.9483 23.9421 72.2799 23.1286 73.0279 21.5016L76.2088 22.0553C75.6651 23.4387 74.6973 24.6151 73.4438 25.4162C72.1266 26.2509 70.5928 26.6805 69.0331 26.6519ZM64.4684 17.3844H73.3667C73.223 16.0565 72.7566 14.9934 71.9675 14.1953C71.578 13.8 71.1106 13.4896 70.595 13.2836C70.0794 13.0775 69.5266 12.9803 68.9715 12.9981C68.4153 12.9799 67.8614 13.0753 67.3435 13.2785C66.8257 13.4817 66.3549 13.7885 65.96 14.1799C65.1727 14.9558 64.6754 16.024 64.4684 17.3844Z"
                  fill="currentColor"
                />
                <path
                  d="M78.2215 31.8698V28.9242H79.6053C79.9033 28.9392 80.2009 28.8871 80.4759 28.7717C80.751 28.6563 80.9966 28.4806 81.1945 28.2577C81.6445 27.6904 81.9809 27.042 82.1855 26.3478L82.2163 26.2247L75.9777 10.6969H79.4359L83.1226 20.8462L83.5385 22.9792H83.9082L84.2907 20.8462L87.9954 10.6892H91.4793L85.1354 26.4093C84.7082 27.5522 84.2057 28.6655 83.6309 29.742C83.1282 30.6408 82.3023 31.3153 81.3203 31.6288C80.6807 31.8091 80.0182 31.8955 79.3537 31.8852L78.2215 31.8698Z"
                  fill="currentColor"
                />
                <path
                  d="M98.5364 26.6517C96.4055 26.6517 94.7 25.9382 93.4197 24.5111C92.1395 23.0841 91.5045 21.128 91.5148 18.643C91.4942 16.1187 92.1472 14.0986 93.4736 12.5826C94.8001 11.0667 96.5904 10.3096 98.8445 10.3113C100.237 10.2775 101.589 10.7775 102.624 11.7084L103.802 13.5183L104.138 13.3953L103.694 11.2624V3.77661H106.844V26.4082H104.534L104.179 23.6446H103.853C102.707 25.6494 100.934 26.6517 98.5364 26.6517ZM94.7265 18.643C94.7265 20.2718 95.1279 21.5425 95.9306 22.4551C96.7333 23.3678 97.8321 23.8258 99.227 23.8292C100.632 23.8292 101.726 23.3592 102.508 22.4192C103.29 21.4792 103.682 20.1692 103.684 18.4892C103.684 16.8228 103.289 15.5214 102.5 14.5848C101.711 13.6482 100.62 13.1808 99.227 13.1825C98.6013 13.1589 97.9787 13.2818 97.409 13.5413C96.8393 13.8008 96.3383 14.1898 95.946 14.6771C95.133 15.6752 94.7265 16.9972 94.7265 18.643Z"
                  fill="currentColor"
                />
                <path
                  d="M116.531 26.6519C114.072 26.6519 112.145 25.9409 110.752 24.519C109.359 23.097 108.662 21.0871 108.662 18.4893C108.662 15.9958 109.379 14.009 110.814 12.5289C112.248 11.0489 114.131 10.3097 116.462 10.3114C118.764 10.3114 120.602 11.0685 121.977 12.5828C123.351 14.097 124.036 16.0624 124.03 18.4791C124.03 19.0841 124.03 19.5045 124 19.7378H111.933C112.087 21.0589 112.574 22.0895 113.394 22.8295C114.258 23.5875 115.38 23.9857 116.529 23.9421C118.444 23.9421 119.776 23.1286 120.523 21.5016L123.704 22.0553C123.161 23.4394 122.192 24.616 120.937 25.4162C119.621 26.2499 118.089 26.6795 116.531 26.6519ZM111.967 17.3844H120.862C120.719 16.0565 120.253 14.9934 119.466 14.1953C119.076 13.8004 118.608 13.4902 118.093 13.2842C117.577 13.0782 117.025 12.9808 116.47 12.9981C115.914 12.9799 115.36 13.0753 114.842 13.2785C114.324 13.4817 113.853 13.7885 113.458 14.1799C112.669 14.9558 112.172 16.024 111.967 17.3844Z"
                  fill="currentColor"
                />
                <path
                  d="M128.705 26.4093L123.476 10.6969H126.934L129.989 20.5617L130.402 22.6946H130.772L131.157 20.5617L134.238 10.6969H137.694L132.479 26.4093H128.705Z"
                  fill="currentColor"
                />
                <path
                  d="M144.944 26.6215C142.638 26.6215 140.894 26.1438 139.711 25.1884C138.529 24.2331 137.881 22.8496 137.768 21.0379L140.918 20.8534C141.081 22.8786 142.565 23.8912 145.372 23.8912C146.439 23.8912 147.289 23.6896 147.924 23.2862C148.214 23.1258 148.455 22.8909 148.622 22.606C148.79 22.321 148.878 21.9964 148.877 21.666C148.877 21.0636 148.517 20.5919 147.801 20.256C147.085 19.9202 145.881 19.651 144.191 19.4562C142.04 19.2237 140.467 18.7435 139.473 18.0154C138.478 17.2874 137.982 16.2619 137.984 14.9391C137.984 13.6898 138.562 12.6079 139.719 11.6936C140.876 10.7792 142.458 10.3212 144.466 10.3195C146.669 10.3195 148.333 10.7749 149.46 11.6859C150.586 12.5968 151.262 14.0188 151.488 15.9517L148.407 16.1671C148.335 15.0322 147.961 14.2315 147.285 13.765C146.609 13.2984 145.542 13.0634 144.084 13.06C143.131 13.06 142.384 13.2189 141.847 13.5342C141.605 13.6553 141.401 13.8416 141.258 14.0721C141.116 14.3027 141.041 14.5683 141.041 14.8391C141.033 15.1254 141.11 15.4078 141.263 15.6499C141.416 15.8921 141.639 16.0829 141.901 16.1978C142.475 16.4867 143.621 16.743 145.342 16.9669C147.738 17.2745 149.425 17.7676 150.404 18.4461C151.383 19.1246 151.878 20.2013 151.888 21.6763C151.899 22.3658 151.746 23.0481 151.442 23.6672C151.138 24.2862 150.691 24.8243 150.137 25.2371C148.97 26.1617 147.239 26.6232 144.944 26.6215Z"
                  fill="currentColor"
                />
                <path
                  d="M13.2448 16.2321H29.5021V21.3337C29.5153 22.0597 29.3449 22.7783 29.0048 23.4305C28.6913 24.0273 28.2043 24.5287 27.6001 24.8768C26.9405 25.2341 26.1875 25.4108 25.4264 25.3869H25.1737C24.4093 25.4052 23.6553 25.2185 22.9999 24.8487C22.3958 24.4961 21.9092 23.9915 21.5952 23.3922C21.261 22.7484 21.0935 22.0396 21.1061 21.3235V18.2115H13.2448V16.2321ZM23.0081 18.2115V21.122C22.9756 21.7261 23.1838 22.3199 23.5923 22.7877C23.7934 22.9961 24.0412 23.1601 24.318 23.2677C24.5947 23.3753 24.8935 23.4239 25.1927 23.41H25.3883C25.6901 23.4252 25.9916 23.3772 26.2712 23.2695C26.5508 23.1619 26.8014 22.9973 27.005 22.7877C27.4156 22.3209 27.625 21.7266 27.5919 21.122V18.2115H23.0081Z"
                  fill="currentColor"
                />
                <path
                  d="M29.774 33.4357V30.7468H34.3388C34.8534 30.7468 35.0721 30.4895 35.0721 29.9131V19.6539C35.0395 18.8984 35.29 18.1579 35.7746 17.5773C36.0257 17.309 36.3325 17.099 36.6735 16.9621C37.0145 16.8251 37.3813 16.7646 37.7482 16.7848H37.81V16.6741H37.7534C37.3854 16.6936 37.0176 16.6314 36.6765 16.4922C36.3353 16.353 36.0291 16.1401 35.7797 15.8687C35.2941 15.2888 35.0434 14.5479 35.0773 13.7922V3.52527C35.0773 2.94889 34.8508 2.69157 34.3439 2.69157H30.3366V0.00261339H35.2162C35.5876 -0.00475148 35.9566 0.0635391 36.3008 0.203328C36.645 0.343116 36.9571 0.551479 37.2181 0.815733C37.4843 1.08171 37.6934 1.39915 37.8328 1.74865C37.9721 2.09816 38.0388 2.4724 38.0287 2.84853V13.7485C38.0287 14.7777 38.5433 15.2563 39.6729 15.2563H42.7607V18.182H39.6729C38.551 18.182 38.0287 18.6606 38.0287 19.6873V30.5898C38.0388 30.9659 37.9721 31.3402 37.8328 31.6897C37.6934 32.0392 37.4843 32.3566 37.2181 32.6226C36.9571 32.8869 36.645 33.0952 36.3008 33.235C35.9566 33.3748 35.5876 33.4431 35.2162 33.4357H29.774Z"
                  fill="currentColor"
                />
                <path
                  d="M12.9861 33.4357V30.7468H8.42135C7.90672 30.7468 7.688 30.4895 7.688 29.9131V19.6539C7.7206 18.8984 7.4701 18.1579 6.98553 17.5773C6.73447 17.309 6.42764 17.099 6.08665 16.9621C5.74567 16.8251 5.37881 16.7646 5.01191 16.7848H4.95015V16.6741H5.00676C5.37475 16.6936 5.74249 16.6314 6.08367 16.4922C6.42485 16.353 6.73106 16.1401 6.98038 15.8687C7.46606 15.2888 7.7167 14.5479 7.68285 13.7922V3.52527C7.68285 2.94889 7.90929 2.69157 8.4162 2.69157H12.4235V0.00261339H7.5439C7.1725 -0.00475148 6.8035 0.0635391 6.45933 0.203328C6.11517 0.343116 5.80305 0.551479 5.54198 0.815733C5.27584 1.08171 5.0667 1.39915 4.92734 1.74865C4.78798 2.09816 4.72132 2.4724 4.73143 2.84853V13.7485C4.73143 14.7777 4.2168 15.2563 3.08719 15.2563H-0.000610352V18.182H3.08719C4.20908 18.182 4.73143 18.6606 4.73143 19.6873V30.5898C4.72132 30.9659 4.78798 31.3402 4.92734 31.6897C5.0667 32.0392 5.27584 32.3566 5.54198 32.6226C5.80305 32.8869 6.11517 33.0952 6.45933 33.235C6.8035 33.3748 7.1725 33.4431 7.5439 33.4357H12.9861Z"
                  fill="currentColor"
                />
                <path
                  d="M20.5451 11.5622C20.5462 11.4926 20.5438 11.4228 20.5378 11.3532C20.5124 11.056 20.4227 10.7667 20.2742 10.5032C20.1257 10.2396 19.9215 10.0072 19.6741 9.8202C19.0439 9.37097 18.2666 9.14188 17.476 9.17229C16.2189 9.17345 15.0054 9.60518 14.0632 10.3865C13.157 11.1437 12.5997 12.202 12.509 13.3377H14.2806C14.3579 12.845 14.5929 12.386 14.9545 12.0215C15.2532 11.7224 15.6344 11.5091 16.0536 11.404C16.0476 11.4708 16.0446 11.5385 16.0446 11.6068C16.0446 12.8497 17.0522 13.8573 18.295 13.8573C19.5379 13.8573 20.5455 12.8497 20.5455 11.6068C20.5455 11.5919 20.5454 11.577 20.5451 11.5622Z"
                  fill="currentColor"
                />
                <path
                  d="M29.5027 11.6058C29.5027 12.8487 28.4951 13.8562 27.2522 13.8562C26.0093 13.8562 25.0017 12.8487 25.0017 11.6058C25.0017 10.3629 26.0093 9.35533 27.2522 9.35533C28.4951 9.35533 29.5027 10.3629 29.5027 11.6058Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
          <div className="absolute left-1/2 top-1/2 !m-0 hidden -translate-x-1/2 -translate-y-1/2 items-center rounded-full border border-neutral-500 p-1 lg:flex">
            <Link
              className={` ${active === "developer" ? "active" : ""}   ${
                header === "white" ? " text-black" : " text-white"
              } rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 transition-colors group-[.has-scroll-over]/header:text-black`}
              href="/"
              onClick={() => handleButtonClick("developer")}
            >
              For Developers
            </Link>
            <Link
              className={`  ${
                active === "companies" ? "active" : ""
              } bg-primary-700 ${
                header === "white" ? " text-black" : " text-white"
              } rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 transition-colors`}
              href="/companies"
              onClick={() => handleButtonClick("companies")}
            >
              For Companies
            </Link>
          </div>
          <div className="!m-0 flex items-center gap-4">
            <Link
              className={` ${
                header === "white" ? " bg-primary-7000" : " bg-transparent"
              } text-white  px-5 py-3 text-sm font-medium inline-flex justify-center group-[.has-scroll-over]/header:border-primary-700 group-[.has-scroll-over]/header:active:bg-primary-800 group-[.has-scroll-over]/header:bg-primary-700 !m-0 hidden gap-1 rounded-xl border !pb-1 !pl-2 !pr-3 !pt-2.5 transition-colors lg:flex`}
              target="_blank"
              href="https://heydevs.page.link/download"
            >
              <svg
                width={24}
                height={25}
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="!m-0"
              >
                <g>
                  <path
                    d="M15.3301 6.67505C18.0301 6.90755 19.1326 8.29505 19.1326 11.3325V11.43C19.1326 14.7825 17.7901 16.125 14.4376 16.125H9.55511C6.20261 16.125 4.86011 14.7825 4.86011 11.43V11.3325C4.86011 8.31755 5.94761 6.93005 8.60261 6.68255"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 1.5V11.16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5128 9.48779L12.0003 12.0003L9.48779 9.48779"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>{" "}
              Install
            </Link>
            <div
              className={`!m-0 flex h-fit items-center gap-2 divide-x  ${
                header === "white" ? " divide-black" : " divide-white"
              } `}
            >
              <Link
                className={`text-sm ${
                  header === "white" ? " text-black" : " text-white"
                } font-medium inline-flex justify-center !m-0 h-fit rounded-none !px-3 !py-0 uppercase transition-colors   group-[.has-scroll-over]/header:!text-neutral-800`}
                href="/en/companies"
              >
                en
              </Link>
              <Link
                className=" text-sm font-medium inline-flex justify-center !m-0 h-fit rounded-none !px-3 !py-0 uppercase transition-colors group-[.has-scroll-over]/header:text-neutral-800 !text-neutral-400 hover:!text-neutral-200 group-[.has-scroll-over]/header:!text-neutral-600 group-[.has-scroll-over]/header:hover:!text-neutral-800"
                href="/vi/companies"
              >
                vi
              </Link>
            </div>
          </div>
        </div>
      </header>
      {isDrawerOpen && (
        <div className=" fixed top-0 bottom-0 w-full h-screen bg-gradient-8  z-50">
        <div className="xs:px-5 container space-y-8 px-4 sm:px-6 md:px-7 lg:px-8 lg:!max-w-[1260px] mb-8 py-[22px] sm:py-6 lg:py-8">
  <svg
    width={40}
    height={40}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="cursor-pointer scale-95"
    type="button"
    onClick={handleButton}
  >
    <g clipPath="url(#clip0_3051_35669)">
      <path
        d="M26.364 13.636L13.6361 26.3639"
        stroke="#F5F5F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.636 13.636L26.3639 26.3639"
        stroke="#F5F5F8"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_3051_35669">
        <rect width={24} height={24} fill="white" transform="translate(8 8)" />
      </clipPath>
    </defs>
  </svg>
</div>
<div className="h-full md:px-7.5 relative px-4">
  <div className="gap-[1.875rem] mx-auto flex flex-col items-center">
    <div className="flex flex-col items-center gap-5">
      <Link
        className="text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 hover:text-primary-300 !text-2xl transition-colors sm:!text-3xl"
        href="/"
        onClick={handleButton}
      >
        For Developers
      </Link>
      <Link
        className="text-white rounded-full px-5 py-3 text-sm font-medium inline-flex justify-center duration-400 hover:text-primary-300 !text-2xl transition-colors sm:!text-3xl"
        href="/companies"
        onClick={handleButton}
      >
        For Companies
      </Link>
    </div>
    <a
      className="text-white rounded-xl sm:rounded-2xl px-5 py-3 text-sm font-medium inline-flex justify-center !m-0 flex w-full gap-1 rounded-[12px] border !pb-1 !pl-2 !pr-2.5 !pt-2.5 transition-transform hover:scale-105 active:scale-95"
      target="_blank"
      rel="noopener noreferrer"
      href="https://heydevs.page.link/download"
    >
      <svg
        width={24}
        height={25}
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="!m-0"
      >
        <g>
          <path
            d="M15.3301 6.67505C18.0301 6.90755 19.1326 8.29505 19.1326 11.3325V11.43C19.1326 14.7825 17.7901 16.125 14.4376 16.125H9.55511C6.20261 16.125 4.86011 14.7825 4.86011 11.43V11.3325C4.86011 8.31755 5.94761 6.93005 8.60261 6.68255"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1.5V11.16"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.5128 9.48779L12.0003 12.0003L9.48779 9.48779"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>{" "}
      Install
    </a>
  </div>
</div>


        </div>
      )}
    </>
  );
}

export default Header;
