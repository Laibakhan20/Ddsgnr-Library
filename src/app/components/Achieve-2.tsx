import React from 'react'

const Achieved = () => {
  return (
    <div
    className="tablet:flex mobile:hidden w-full tablet:w-[1280px] tablet:h-[488px] tablet:py-[112px] tablet:px-[64px] tablet:gap-[80px] 
mobile:w-[428px] mobile:h-[451px] mobile:py-[48px] mobile:px-[24px] mobile:gap-[48px] 
mx-auto bg-white"
  >
    <div className="tablet:w-[1152px] tablet:h-[264px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[355px] mobile:gap-[24px] mx-auto bg-white items-center justify-center ">
      <div className="tablet:w-[1152px] tablet:h-[136px] tablet:gap-[16px] mobile:w-[380px] mobile:h-[147px] mobile:gap-[16px] mx-auto bg-white">
        <h2
          className="tablet:w-[1152px] tablet:h-[58px] tablet:text-[48px] tablet:leading-[57.6px]tablet:font-bold tablet:text-center mobile:w-[380px] mobile:h-[42px] mobile:text-[32px] mobile:leading-[41.6px] mobile:font-bold mobile:text-center font-sans pt-1"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Our Achivements
        </h2>
        <p
          className="tablet:flex mobile:hidden tablet:w-[1152px] tablet:h-[54px] tablet:text-[18px] tablet:leading-[27px]tablet:font-normal tablet:text-center  font-sans pt-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis
          viverra ornare, eros dolor interdum nulla, ut commodo diam libero
          vitae erat.{" "}
        </p>
        <p
          className="tablet:hidden mobile:flex mobile:w-[362px] mobile:h-[81px] mobile:text-[18px] mobile:leading-[27px] mobile:font-normal mobile:text-center font-sans pt-4"
          style={{
            textUnderlinePosition: "from-font",
            textDecorationSkipInk: "none",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique.{" "}
        </p>
      </div>

      <div className=" tablet:w-[1152px] tablet:h-[96px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[176px] mobile:gap-[24px] bg-white mt-6 mx-auto flex justify-center items-center mobile:flex-col tablet:flex-row">
        {/*columns 1*/}
        <div className="bg-white tablet:w-[616px] tablet:h-[96px] tablet:py-[8px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[76px] mobile:py-[8px] mobile::gap-[16px] flex-row flex justify-between">
          <div className="tablet:w-full tablet:max-w-[296px] tablet:h-[80px] tablet:gap-[8px] mobile:w-[182px] mobile:h-[60px] mobile:gap-[8px] bg-white">
            {/*for tablet*/}
            <h3
              className="hidden tablet:block w-[91px] h-[48px] font-sans font-bold text-[40px] leading-[48px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              +200
            </h3>
            <p
              className="hidden tablet:block w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Courses
            </p>
            {/*for mobile*/}
            <h6
              className="tablet:hidden w-[46px] h-[28px] font-sans font-bold text-[20px] leading-[28px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              +200
            </h6>
            <p
              className="tablet:hidden w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Courses
            </p>
          </div>

          <div className="tablet:w-full tablet:max-w-[296px] tablet:h-[80px] tablet:gap-[8px] mobile:w-[182px] mobile:h-[60px] mobile:gap-[8px] bg-white">
            {/*for tablet*/}
            <h3
              className="hidden tablet:block w-[91px] h-[48px] font-sans font-bold text-[40px] leading-[48px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              50K
            </h3>
            <p
              className="hidden tablet:block w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Mentors
            </p>
            {/*for mobile*/}
            <h6
              className="tablet:hidden w-[46px] h-[28px] font-sans font-bold text-[20px] leading-[28px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              50K
            </h6>
            <p
              className="tablet:hidden w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Mentors
            </p>
          </div>
        </div>

        {/*columns 2*/}
        <div className="bg-white tablet:w-[616px] tablet:h-[96px] tablet:py-[8px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[76px] mobile:py-[8px] mobile::gap-[16px] flex-row flex justify-between">
          <div className="tablet:w-full tablet:max-w-[296px] tablet:h-[80px] tablet:gap-[8px] mobile:w-[182px] mobile:h-[60px] mobile:gap-[8px] bg-white">
            {/*for tablet*/}
            <h3
              className="hidden tablet:block w-[91px] h-[48px] font-sans font-bold text-[40px] leading-[48px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              370k
            </h3>
            <p
              className="hidden tablet:block w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Students
            </p>
            {/*for mobile*/}
            <h6
              className="tablet:hidden w-[46px] h-[28px] font-sans font-bold text-[20px] leading-[28px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              370k
            </h6>
            <p
              className="tablet:hidden w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Students
            </p>
          </div>
          <div className="tablet:w-full tablet:max-w-[296px] tablet:h-[80px] tablet:gap-[8px] mobile:w-[182px] mobile:h-[60px] mobile:gap-[8px] bg-white">
            {/*for tablet*/}
            <h3
              className="hidden tablet:block w-[91px] h-[48px] font-sans font-bold text-[40px] leading-[48px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              100+
            </h3>
            <p
              className="hidden tablet:block w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Recognition
            </p>
            {/*for mobile*/}
            <h6
              className="tablet:hidden w-[46px] h-[28px] font-sans font-bold text-[20px] leading-[28px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              100+
            </h6>
            <p
              className="tablet:hidden w-[59px] h-[24px] font-sans font-normal text-[16px] leading-[24px] text-left mx-auto"
              style={{
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
              }}
            >
              Recognition
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>



    
  )
}

export default Achieved