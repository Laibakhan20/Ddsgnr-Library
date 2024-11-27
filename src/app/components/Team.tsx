import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Team = () => {
  return (
    <div id="services" className="flex flex-col mx-auto justify-center items-center w-full tablet:w-[1280px] 
  tablet:py-[112px] tablet:px-[64px] tablet:gap-[80px] tablet:h-[1049px] 
  mobile:w-[428px] mobile:py-[48px] mobile:px-[24px] mobile:gap-[48px] mobile:h-auto 
  tablet:bg-white mobile:bg-white">

                       {/*////////////////////////// heading div /////////////////////*/}
        <div className="flex flex-col tablet:w-[768px] tablet:h-[109px]  mobile:w-[385px] mobile:h-[162px] gap-[24px] mx-auto bg-white">

            <h2 className="font-sans font-bold tablet:text-[48px] tablet:leading-[57.6px] tablet:text-left tablet:w-[768px] tablet:h-[58px] mobile:text-[32px] mobile:leading-[41.6px] mobile:text-center mobile:w-[385px] mobile:h-[84px] gap-0 opacity-100"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Explore Courses By Category        
              </h2>
              <p className="tablet:h-[27px] tablet:w-[768px] font-sans text-[18px] font-normal leading-[27px] tablet:text-left mobile:w-[385px] mobile:h-[54px] mobile:text-center"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
             
        </div>
                         
                         {/*////////////////////////// cards div /////////////////////*/}

        <div className="bg-white tablet:h-[636px] tablet:w-[1280px] mobile:w-[380px] mobile:h-[556px] gap-[96px] ">
            
            <div className="gap-24 flex flex-col tablet:flex-row opacity-100 tablet:w-full tablet:h-[132px] tablet:gap-[24px] mobile:w-[380px] mobile:h-[444px] mobile:gap-[24px] mobile:px-0 bg-white">

           {/*////////////////////////// cards 1 /////////////////////*/}
          <div className="flex flex-row mx-auto justify-center items-start tablet:w-full tablet:max-w-[410.67px] tablet:h-[132px] tablet:py-[16px] tablet:px-0 tablet:gap-[32px] tablet:rounded-[5px] tablet:bg-mywhite mobile:w-[380px] mobile:h-[132px] mobile:py-[16px]  mobile:pl-[16px] mobile:gap-[32px] mobile:rounded-[5px] mobile:bg-mywhite">

            <div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/pen-tool-2.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Design & Development</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div>

          </div>

            {/*////////////////////////// cards 2 /////////////////////*/}
          <div className="flex flex-row mx-auto justify-center items-start tablet:w-[410.67px] tablet:h-[132px] tablet:py-[16px] tablet:px-0 tablet:gap-[32px] tablet:rounded-[5px] tablet:bg-mywhite mobile:w-[380px] mobile:h-[132px] mobile:py-[16px] mobile:pl-[16px] mobile:gap-[32px] mobile:rounded-[5px] mobile:bg-mywhite ">
            <div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/volume-high.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Marketing</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>
           
           {/*////////////////////////// cards 3 /////////////////////*/}
          <div className="flex flex-row mx-auto justify-center items-start tablet:w-[410.67px] tablet:h-[132px] tablet:py-[16px] tablet:px-0 tablet:gap-[32px] tablet:rounded-[5px] tablet:bg-mywhite mobile:w-[380px] mobile:h-[132px] mobile:py-[16px] mobile:pl-[16px] mobile:gap-[32px] mobile:rounded-[5px] mobile:bg-mywhite "><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/group.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Development</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

            </div>

            <div className="w-full mobile:hidden tablet:flex gap-[24px]  mx-auto  h-[132px] bg-white mt-16">
               
               {/*////////////////////////// cards 4 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100 bg-mywhite"><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/microphone.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Communication</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

             {/*////////////////////////// cards 5 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100 bg-mywhite "><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/link.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Digital Marketing</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

                   {/*////////////////////////// cards 6 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100  bg-mywhite"><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/arrow-2.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Self Development</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

            </div>

            <div className="hidden tablet:flex w-full h-[132px] gap-[24px] opacity-100 bg-white mt-16">
              
              {/*////////////////////////// cards 7 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100 bg-mywhite"><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/briefcase.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Business</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>
               
               {/*////////////////////////// cards 8 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100 bg-mywhite"><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/book.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Finance</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

              {/*////////////////////////// cards 9 /////////////////////*/}
              <div className="flex flex-row mx-auto justify-center items-start w-[410.67px] h-[132px] py-[16px]  gap-[32px] rounded-[5px] opacity-100 bg-mywhite"><div className="w-[100px] h-[100px] pt-[34px] gap-[10px] bg-white">
              <Image
              src={"/book-2.png"}
              alt="tool"
              width={32}
              height={32}
              className="w-[32px] h-[32px] gap-[10px] object-contain justify-center items-center mx-auto"
              />
            </div>
            <div className="tablet:w-[246.67px] mobile:[216px] h-[57px] gap-[12px] items-center flex justify-center mt-[20px] flex-col py-[34px]">
              <p className="w-[246.67px] h-[30px] font-sans text-left text-[20px] font-semibold leading-[30px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>Consulting</p>
              <p className="w-[246.67px] h-[27px] font-sans text-left text-[18px] font-normal leading-[27px]"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>50+ Courses Available</p>
            </div></div>

            </div>

              {/*////////////////////////// button /////////////////////*/}
            <Button className="w-[155px] h-[48px] px-[24px] py-[12px] gap-[8px] rounded-tl-[5px] border border-black text-black bg-white hover:bg-gray-100 focus:ring-white/50 mt-16 flex justify-center items-center mx-auto "><Link href={"/"} className="w-[120px] h-[24px] font-sans text-black text-[16px] font-normal leading-[24px] text-left"style={{
              textUnderlinePosition: "from-font",
               textDecorationSkipInk: "none",
              }}>View All Courses</Link></Button>

        </div>
        
        </div>
        
        
  )
}

export default Team