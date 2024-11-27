import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex justify-center item-center mx-auto w-full top-[1038px] left-[100px] tablet:py-[80px]  tablet:px-[64px] tablet:gap-[64px] tablet:mt-[10px] tablet:h-[228px] tablet:w-[1280px] tablet:bg-mywhite mobile:w-[428px] mobile:h-[239.34px] mobile:py-[48px] mobile:gap-[24px] mobile:px-[24px] mobile:bg-white mobile:flex-col tablet:flex-row">
      <h5
        className="tablet:flex mobile:hidden justify-center tablet:text-left tablet:w-[320px] tablet:h-[68px]  font-sans tablet:text-[24px]  font-bold tablet:leading-[33.6px] "
        style={{
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Trusted by 2000+ companies worldwide.
      </h5>
      <h5
        className="mobile:flex tablet:hidden justify-center mobile:text-left mobile:w-[327px] mobile:h-[54px] mobile:text-[18px] mobile:leading-[27px] font-bold font-sans"
        style={{
          textUnderlinePosition: "from-font",
          textDecorationSkipInk: "none",
        }}
      >
        Trusted by the world&apos;s best companies [social proof to build
        credibility]
      </h5>

      <div className="w-[880px] h-[56px] py-[8.74px] gap-[19.12px] tablet:flex mobile:hidden flex   ">
        <Image
          src={"/Airbnb Logo1.png"}
          alt="logo ipsum"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />

        <Image
          src={"/Airbnb Logo2.png"}
          alt="logo"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />

        <Image
          src={"/Airbnb Logo3.png"}
          alt="logo ipsum"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />

        <Image
          src={"/Airbnb Logo4.png"}
          alt="logo ipsum"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />

        <Image
          src={"/Airbnb Logo5.png"}
          alt="logo ipsum"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />

        <Image
          src={"/Airbnb Logo6.png"}
          alt="logo ipsum"
          width={123.8}
          height={38.52}
          className="w-[123.8px] h-[38.52px] object-contain"
        />
      </div>

      {/*mobile*/}
      <div className="w-[400px] py-[16px] flex flex-wrap gap-[16px] items-center justify-center mobile:flex tablet:hidden mx-auto pr-9">
        <Image
          src={"/Airbnb Logo1.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />

        <Image
          src={"/Airbnb Logo2.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />
        <Image
          src={"/Airbnb Logo3.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />
        <Image
          src={"/Airbnb Logo4.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />
        <Image
          src={"/Airbnb Logo5.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />
        <Image
          src={"/Airbnb Logo6.png"}
          alt="logo ipsum"
          width={107.15}
          height={33.34}
          className="w-[107.15px] h-[33.34px] object-contain"
        />
      </div>
    </div>
  );
};

export default Logo;
