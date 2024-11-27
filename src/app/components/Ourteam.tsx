import Image from "next/image";
import React from "react";

const Ourteam = () => {
  return (
    <div id="about" className="flex flex-col tablet:w-[1280px] tablet:h-[895px] tablet:top-[4991px] tablet:px-0 tablet:gap-[80px] mobile:w-[428px] mobile:h-[1075px] mobile:p-[48px_24px] mobile:gap-[48px] bg-mywhite mx-auto justify-center items-center">
      <div className="tablet:w-[768px] tablet:h-[109px] gap-[16px] mobile:w-[363px] mobile:h-[120px] mx-auto">
        <h2 className="tablet:flex mobile:hidden w-[768px] h-[58px] font-sans text-[48px] leading-[57.6px] font-bold text-center mx-auto justify-center items-center">
          Our team
        </h2>
        <h2 className="tablet:hidden mobile:flex w-[363px] h-[42px] font-sans text-[32px] leading-[41.6px] font-bold text-center mx-auto justify-center items-center">
          Our team
        </h2>
        <p className="tablet:w-[768px] tablet:h-[27px] leading-[27px] text-center tablet:text-[18px] font-sans font-normal mt-6 w-[363px] h-[54px] text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </p>
      </div>

      <div className="flex flex-col mobile:w-[380px] mobile:h-[723px] mobile:gap-[96px] tablet:w-[1280px] tablet:h-[482px] tablet:gap-[96px] bg-mywhite mx-auto justify-center items-center">
        {/*row 1*/}
        <div className="tablet:flex-row mobile:flex-col flex tablet:w-[1280px] tablet:h-[209px] gap-[48px] h-[723px] w-[380px] bg-mywhite">
          {/*card 1*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px] mobile:w-[394.67px] mobile:h-[209px] mobile:gap-[24px]  ">
            <Image
              src={"/team1.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                James Nduku
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                Marketing Coordinator
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex">
              <Image
                src={"/Linkedin.png"}
                alt="linkedin"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Twitter.png"}
                alt="twitter"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Dribble.png"}
                alt="dribble"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
            </span>
          </div>

          {/*card 2*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px] mobile:w-[394.67px] mobile:h-[209px] mobile:gap-[24px]  ">
            <Image
              src={"/team2.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                Joseph Munyambu
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                Nursing Assistant
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex">
              <Image
                src={"/Linkedin.png"}
                alt="linkedin"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Twitter.png"}
                alt="twitter"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Dribble.png"}
                alt="dribble"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
            </span>
          </div>

          {/*card 3*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px] mobile:w-[394.67px] mobile:h-[209px] mobile:gap-[24px]  ">
            <Image
              src={"/team3.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                Joseph Ngumbau
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                Medical Assistant
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex">
              <Image
                src={"/Linkedin.png"}
                alt="linkedin"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Twitter.png"}
                alt="twitter"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
              <Image
                src={"/Dribble.png"}
                alt="dribble"
                height={24}
                width={24}
                className="w-[24px] h-[24px]"
              />
            </span>
          </div>
        </div>

        {/*row 2*/}
        <div className="tablet:flex mobile:hidden w-[1280px] h-[209px] gap-[48px]">
          {/*card 4*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px]  ">
            <Image
              src={"/team4.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                Erick Kipkemboi
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                Web Designer
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex"></span>
          </div>

          {/*card 5*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px] ">
            <Image
              src={"/team5.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                Stephen Kerubo
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                President of Sales
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex"></span>
          </div>

          {/*card 6*/}
          <div className="flex flex-col tablet:w-full tablet:max-w-[394.67px] tablet:h-[209px] tablet:gap-[24px]  ">
            <Image
              src={"/team6.png"}
              alt="james nduku"
              width={80}
              height={80}
              className="h-[80px] w-[80px] object-contain object-center mx-auto"
            />
            <span className="w-[394.67px] h-[57px] gap-[16px]">
              <p className="w-[394.67px] h-[30px] font-semibold text-[20px] leading-[30px] font-sans text-center">
                John Leboo
              </p>
              <p className="w-[394.67px] h-[27px] font-normal text-[18px] leading-[27px] font-sans text-center">
                Dog Trainer
              </p>
            </span>
            <span className="w-[100px] h-[24px] gap-[14px] mx-auto flex"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourteam;
