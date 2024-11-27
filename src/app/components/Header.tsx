import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div>
      <header className=" w-full h-[800px] laptop:w-full mobile:w-[428px] mobile:h-[780px] tablet:w-[1280px] items-center mobile:hidden tablet:flex tablet:mt-0 justify-center mx-auto top-[141px] gap-0 bg-white opacity-100 px-0">
        <div className="w-[640px] h-[300px] text-left bg-white  px-[80px] pr-[60px] gap-[24px] flex flex-col ">
          <div
            className="w-full max-w-[500px] h-auto flex flex-col gap-[24px] opacity-100"
            style={{ minHeight: "212px" }}
          >
            <h1
              className="w-[500px] h-[134px] font-sans text-[56px] font-bold leading-[67.2px] text-left"
              style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              Learn new skills online with ease
            </h1>
            <p
              className="w-[500px] h-[54px] font-sans text-[18px] font-normal leading-[27px] text-left"
              style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}
            >
              Discover a wide range of courses covering a variety of subjects,
              taught by expert instructors.
            </p>
          </div>

          <div className="w-[358px] h-[64px] pt-[16px] gap-[16px] flex">
            <button className="w-[178px] h-[48px] px-[24px] py-[12px] gap-[8px] border-[1px] border-solid border-black rounded-[5px] bg-myblack text-white">
              <Link
                href={"/start"}
                className="w-[130px] h-[24px] text-[16px] font-sans font-normal leading-[24px] text-left text-white flex justify-center"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Start learning now
              </Link>
            </button>
            <button className="w-[164px] h-[48px] px-[12px] py-[12px] gap-[8px] border-[1px] border-solid border-black rounded-[5px] hover:bg-gray-200 flex items-center justify-center">
              <Link
                href={"/"}
                className="w-[116px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left text-black flex justify-center"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Explore Courses
              </Link>
            </button>
          </div>
        </div>

        <div className="tablet:w-[640px] tablet:h-[800px]">
          <Image
            src={"/Image.png"}
            alt="Image"
            width={640}
            height={900}
            className=" object-cover object-center w-full h-full "
          />
        </div>
      </header>

      {/*mobile*/}

      <header className=" mobile:flex tablet:hidden mobile:w-full h-[780px] justify-center items-center mx-auto top-[141px] px-0">
        <div className="flex flex-col items-center w-full">
          <div className="w-full h-[374px] px-6 py-16 gap-6 bg-white">
            <div className="w-[384px] h-[174px] gap-6">
              <h3
                className="w-[380px] h-[96px] text-[40px] font-sans font-bold leading-[48px] text-left text-myblack"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Learn New Skills Online With Ease
              </h3>
              <p
                className="w-[380px] h-[54px] text-[18px] font-sans font-normal leading-[27px] text-left mt-7"
                style={{
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Discover a wide range of courses covering a variety of subjects,
                taught by expert instructors.
              </p>

              <div className="w-[358px] h-[64px] pt-[16px] gap-[16px] opacity-100 flex">
                <button className="w-[178px] h-[48px] px-[12px] py-[12px] border border-black rounded-[5px] bg-myblack text-white hover:bg-mygray active:bg-mygray gap-[8px] flex items-center justify-center mt-7 mb-7">
                  <Link
                    href={"/start"}
                    className="w-[130px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left"
                    style={{
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    Start learning now
                  </Link>
                </button>

                <button className="w-[164px] h-[48px] px-[12px] py-[12px] border border-black rounded-[5px] bg-white text-black hover:bg-gray-100 active:bg-gray-200 flex items-center justify-center gap-[8px] mt-7 mb-7">
                  <Link
                    href="/secondary"
                    className="w-[116px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left"
                    style={{
                      textUnderlinePosition: "from-font",
                      textDecorationSkipInk: "none",
                    }}
                  >
                    Explore Courses
                  </Link>
                </button>
              </div>
            </div>
          </div>

          <div className="w-full h-[390px] bg-white">
            <Image
              src="/image2.png"
              alt="Image"
              width={428}
              height={390}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
