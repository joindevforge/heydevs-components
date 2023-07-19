import React, { useState } from 'react';

const data1 = [
  {
    id: 1,
    title: "<80%",
    desc: "Reduction in hiring costs",
  },
  {
    id: 2,
    title: "500+",
    desc: "Weekly new “open to work” talents",
  },
  {
    id: 3,
    title: "10x",
    desc: "More efficient hirings",
  },
  {
    id: 4,
    title: "200+",
    desc: "Clients",
  },
];

function CompetitiveEge() {
  const [activeImage, setActiveImage] = useState(1);
  const [isActive,setIsActive] = useState(false)

  const handleHover = (partNumber) => {
    setActiveImage(partNumber);
       setIsActive(true)
  };

  const handleMouseLeave = () => {
    setIsActive(false)
  };

  return (
    <div className="xs:px-5 container space-y-8 px-4 sm:px-6 mx-auto md:px-7 lg:px-8 py-14 sm:py-16 md:py-20 lg:py-24 lg:!max-w-[1260px]">
      <section className="">
        <div style={{ opacity: 1, transform: "none" }}>
          <h2 className="text-center text-3xl font-bold !leading-normal text-neutral-800 sm:hidden sm:text-4xl lg:text-5xl">
            Get A <br />
            Competitive Edge
          </h2>
          <h2 className="hidden text-center text-3xl font-bold !leading-normal text-neutral-800 sm:block sm:text-4xl lg:text-5xl">
            Get A Competitive Edge
          </h2>
        </div>
        <div className="mt-5 grid grid-cols-1 gap-5 sm:mt-8 md:mt-12 lg:mt-16 lg:grid-cols-[380px_1fr] lg:gap-6 xl:mt-20 xl:grid-cols-[484px_1fr]">
          <div style={{ opacity: 1, transform: "none" }}>
            <div className="h-full overflow-hidden rounded-[10px]">
              <img
                alt="Weekly new “open to work” talents"
                loading="lazy"
                width={1292}
                height={1328}
                decoding="async"
                data-nimg={1}
                className="animate-image-open h-full rounded-[10px] bg-neutral-200 object-cover object-center max-lg:aspect-square max-sm:w-full"
                src={`/assets/companies/${activeImage}.webp`}
                style={{ color: "transparent" }}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {data1.map((part) => (
              <div
                style={{ opacity: 1, transform: "none" }}
                key={part.id}
                onMouseEnter={() => handleHover(part.id)}

onMouseLeave={handleMouseLeave}
              >
                <div className="relative h-full py-4 sm:aspect-square  sm:py-6 cursor-pointer">
                  <div className={`
                    ${isActive && activeImage === part.id ? " max-h-full bg-gradient-5 text-white  activee  " : "max-h-[4px] "}
                    rounded-[10px] absolute inset-x-0 top-0 -z-10 h-full  w-full bg-neutral-400 transition-all duration-500`} />
                  <div
                    className={` ${isActive && activeImage === part.id ? "text-white pl-4":"text-black"}  flex h-full flex-col justify-between gap-3 transition-all duration-500 `}
                  >
                    <div className="space-y-1">
                      <h4 className="text-3xl font-semibold md:text-4xl  lg:text-5xl 2xl:text-6xl">
                        {part.title}
                      </h4>
                      <p className="3xl:text-3xl mt-1 w-[80%] text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                        {part.desc}
                      </p>
                    </div>
                    <div className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl">
                      [{part.id}]
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CompetitiveEge;
