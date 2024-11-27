import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div id="courses" className="flex justify-center items-center mx-auto flex-col tablet:w-[1280px] tablet:h-[1742px] tablet:top-[3326px] tablet:gap-[64px] mobile:w-[428px] mobile:h-[2135px] tablet:px-0 mobile:p-[48px_24px] mobile:gap-[48px] bg-white ">
      {/*////////////// heading ///////////////////////////////////////////*/}

      <div
        className="flex flex-col tablet:w-[768px] tablet:h-[118px] tablet:gap-[16px]
            mobile:w-[249px] mobile:max-w-[249px] mobile:h-[93px] mobile:gap-[16px] bg-white justify-center items-center mx-auto"
      >
        {/*laptop*/}
        <h1
          className="tablet:flex mobile:hidden tablet:w-[768px] tablet:h-[67px] tablet:text-[56px] tablet:font-bold tablet:leading-[67.2px] tablet:text-center mx-auto font-sans pl-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Courses
        </h1>
        {/*mobile*/}
        <h4
          className="tablet:hidden mobile:flex mobile:w-[119px] mobile:h-[42px] mobile:text-[32px] mobile:font-bold mobile:leading-[41.6px] mobile:text-center font-sans"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Courses
        </h4>

        <p
          className="tablet:w-[768px] tablet:h-[27px] tablet:text-[18px] tablet:font-normal tablet:leading-[27px] tablet:text-center mobile:w-[249px] mobile:h-[27px] mobile:text-[18px] mobile:font-normal mobile:leading-[27px] mobile:text-center font-sans"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Your Ultimate Guide to learning
        </p>
      </div>

      {/* ////////////// blogs ////////////////////////////////////////////// */}

      <div className="flex flex-col tablet:w-[1280px] tablet:max-w-[1280px] tablet:h-[1340px] tablet:gap-[64px] mobile:w-full mobile:max-w-[380px] mobile:h-[1898px] mobile:gap-[64px] bg-white mx-auto">
        {/*categories/////////////////////*/}
        <div className="tablet:w-[336px] tablet:h-[40px] mobile:w-[336px] mobile:h-[40px] bg-white mx-auto">
          <Button className="w-[87px] h-[40px] px-4 py-2 gap-2 border-0 rounded-none border-b border-mygray bg-white mx-auto">
            <p
              className="w-[55px] h-[24px] text-[16px] font-normal leading-[24px] text-left font-sans text-black"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Popular
            </p>
          </Button>
          <Button className="w-[140px] h-[40px] px-4 py-2 gap-2 border-0 bg-white mx-auto">
            <p
              className="w-[108px] h-[24px] text-[16px] font-normal leading-[24px] text-left font-sans text-black"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Recommended
            </p>
          </Button>
          <Button className="w-[109px] h-[40px] px-4 py-2 gap-2 border-0 bg-white mx-auto">
            <p
              className="w-[77px] h-[24px] text-[16px] font-normal leading-[24px] text-left font-sans text-black"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Best Price
            </p>
          </Button>
        </div>

        {/*row1////////////////////////////////*/}
        <div className="tablet:w-[1280px] tablet:h-[534px] tablet:gap-[32px] mobile:w-full mobile:h-[1690px] mobile:gap-[32px] bg-white mx-auto tablet:grid tablet:grid-cols-3">
          {/*card 1//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[558px] mobile:gap-[24px]">
            <Image
              src={"/blog1.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px] mobile:w-[380px] object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px] mobile:w-[380px] mobile:h-[234px] mobile:p-[0px_16px_24px_16px] bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px mobile:w-[348px] flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Design
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] mobile:w-[191px] mobile:h-[34px] mobile:text-left mobile:text-2xl mobile:font-bold mobile:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                UX/UI Design 201
              </h5>
              <p
                className=" mobile:w-[326px] mobile:h-[72px] mobile:text-left mobile:text-base mobile:font-normal mobile:leading-[24px] tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px] mobile:w-[350px] mobile:h-[40px] mobile:gap-[16px] bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] mobile:w-[117px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px] mobile:w-[77px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*card 2//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[558px] mobile:gap-[24px]">
            <Image
              src={"/blog2.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px] mobile:w-[380px] object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px] mobile:w-[380px] mobile:h-[234px] mobile:p-[0px_16px_24px_16px] bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px mobile:w-[348px] flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Programmimg
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] mobile:w-[382px] mobile:h-[34px] mobile:text-left mobile:text-2xl mobile:font-bold mobile:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Introduction to Python
              </h5>
              <p
                className=" mobile:w-[326px] mobile:h-[72px] mobile:text-left mobile:text-base mobile:font-normal mobile:leading-[24px] tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px] mobile:w-[350px] mobile:h-[40px] mobile:gap-[16px] bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] mobile:w-[117px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px] mobile:w-[77px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*card 3//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[558px] mobile:gap-[24px]">
            <Image
              src={"/blog3.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px] mobile:w-[380px] object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px] mobile:w-[380px] mobile:h-[234px] mobile:p-[0px_16px_24px_16px] bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px mobile:w-[348px] flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Business
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] mobile:w-[382px] mobile:h-[34px] mobile:text-left mobile:text-2xl mobile:font-bold mobile:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Data Analysis for Beginners
              </h5>
              <p
                className=" mobile:w-[326px] mobile:h-[72px] mobile:text-left mobile:text-base mobile:font-normal mobile:leading-[24px] tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px] mobile:w-[350px] mobile:h-[40px] mobile:gap-[16px] bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] mobile:w-[117px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px] mobile:w-[77px] mobile:h-[40px] mobile:p-[8px_20px] mobile:gap-[8px] rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*row 1 end*/}
        </div>

        {/*row2//////////////////////////////////////*/}
        <div className="tablet:grid mobile:hidden tablet:w-[1280px] tablet:h-[534px] tablet:gap-[32px] bg-white mx-auto tablet:grid-cols-3">
          {/*card 4//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] ">
            <Image
              src={"/blog4.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px]  object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px] bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px  flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Art
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Art Specialization
              </h5>
              <p
                className="tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px] bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px]  rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px]  rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*card 5//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] ">
            <Image
              src={"/blog5.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px] object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px]  bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px  flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Law
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Rule of Law
              </h5>
              <p
                className=" tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px]  bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px]  rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px] rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*card 6//////////////*/}
          <div className="flex flex-col gap-6 bg-mywhite rounded-[5px] tablet:w-[416px] tablet:h-[534px] tablet:gap-[24px] ">
            <Image
              src={"/blog6.png"}
              alt="image"
              width={416}
              height={300}
              className="tablet:w-[416px] tablet:h-[300px] object-contain object-center rounded-[5px]"
            />
            {/*content*/}
            <div className="flex flex-col gap-[15px] tablet:w-[416px] tablet:h-[210px] tablet:p-[0px_16px_24px_16px] bg-mywhite">
              <div className="table:w-[382px] h-[24px] gap-8px  flex">
                <p
                  className="w-[326px] h-[21px] font-semibold font-sans text-[14px] leading-[21px] m-1"
                  style={{
                    textUnderlinePosition: "from-font",
                    textDecorationSkipInk: "none",
                  }}
                >
                  Tech
                </p>
                <div className="w-[48px] h-[24px] gap-[4px] flex">
                  <Image
                    src={"/star 1.png"}
                    alt="image"
                    width={24}
                    height={24}
                    className="w-[24px] h-[24px] object-contain object-center rounded-[1px]"
                  />
                  <p className="w-[20px] h-[24px] text-right font-semibold font-sans text-[14px] leading-[21px] m-1">
                    5.0
                  </p>
                </div>
              </div>

              <h5
                className="tablet:w-[382px] tablet:h-[34px] tablet:text-left tablet:text-2xl tablet:font-bold tablet:leading-[33.6px] font-sans "
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Introduction to webflow
              </h5>
              <p
                className=" tablet:w-[382px] tablet:h-[48px] tablet:text-left tablet:text-base tablet:font-normal tablet:leading-[24px] font-sans pb-5"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>

              {/*bottom*/}
              <div className="tablet:w-[382px] tablet:h-[40px] tablet:gap-[16px] bg-mywhite flex">
                <Button
                  variant="secondary"
                  size="sm"
                  className="
                            tablet:w-[117px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] rounded-[5px] border border-black tablet:opacity-100"
                >
                  <Link
                    href={"/"}
                    className="w-[77px] h-[24px] text-[16px] leading-[24px] font-sans text-black font-normal "
                  >
                    Enroll Now
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="tablet:w-[77px] tablet:h-[40px] tablet:p-[8px_20px] tablet:gap-[8px] tablet:rounded-tl-[5px] rounded-[5px] "
                >
                  <p className="w-[37px] h-[24px] leading-[24px] text-[16px] font-sans font-medium text-black">
                    $400
                  </p>
                </Button>
              </div>
            </div>
          </div>

          {/*row 2 end*/}
        </div>

        <Button variant="secondary"size="sm"className="w-[152px] h-[40px] tablet:p-[8px_16px] tablet:gap-[8px] rounded-[5px] tablet:border-[1px] tablet:border-solid tablet:border-black mobile:p-[8px_16px] mobile:gap-[8px] mobile:border-[1px] mobile:border-solid mobile:border-black mx-auto bg-white"><Link href={"/"} className="w-[120px] h-[24px] font-sans text-[16px] leading-[24px] text-black text-normal">View All Courses</Link></Button>

      </div>
    </div>
  );
};

export default Blog;
