import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="tablet:w-[1280px] tablet:h-[684px] tablet:top-[6824px] tablet:mt-36 tablet:pt-[80px] tablet:gap-[80px] bg-white w-[428px] h-[1411px] mobile:py-[48px] mobile:px-[24px] tablet:px-0 tablet:py-0 gap-[48px]">
        <div className="tablet:w-[1120px] tablet:h-[524px] tablet:gap-[80px] bg-white mx-auto w-[380px] h-[1315px] gap-[48px] flex flex-col">
            {/*newsletter*/}
            <div className="tablet:w-[1120px] tablet:h-[82px] tablet:gap-0 justify-between w-[380px] h-[261px] gap-[24px] bg-white flex tablet:flex-row mobile:flex-col">

                <div className="tablet:w-[500px] tablet:h-[51px] tablet:gap-[0px] w-[287px] h-[91px] gap-[16px] bg-white mx-auto tablet:mx-0">
                   <p className="font-sans font-semibold text-[18px] leading-[27px] tablet:w-[500px] tablet:h-[27px] w-[287px] h-[48px] mobile:text-center tablet:text-left"style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}>Subscribe to our newsletter</p>
              <p className="tablet:w-[500px] tablet:h-[24px] font-sans font-normal text-[16px] leading-[24px] mobile:w-[287px] h-[48px] mobile:text-center tablet:text-left mobile:mx-auto tablet:mx-0"style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>

                <div className="tablet:w-[400px] tablet:h-[82px] tablet:gap-[16px] w-[380px] h-[146px] gap-[16px] bg-white">
                    
                        <div className="flex items-center space-x-2 tablet:w-[400px] tablet:h-[48px] gap-[16px] justify-between mobile:w-[380px] mobile:h-[112px] mobile:flex-col tablet:flex-row">
                         <Input className="tablet:w-[265px] tablet:h-[48px] w-[380px] h-[48px] border-black gap-2 text-placeholdergray" type="email" placeholder="Enter your email" />
                        <Button className="tablet:w-[119px] tablet:h-[48px] w-[380px] h-[48px] border border-black bg-white text-black gap-2" type="submit">Subscribe</Button>
                        </div>
                        <p className="w-[400px] h-[18px] font-sans font-normal text-[12px] leading-[18px] mt-4 mobile:text-center tablet:text-left"style={{
                         textDecorationSkipInk: "none",
                         textUnderlinePosition: "from-font",
                        }}>By subscribing you agree to with our <Link href={"/"} className="font-sans underline"style= {{
                           textDecorationSkipInk: "none",
                           textUnderlinePosition: "from-font",
                       }}>Privacy Policy</Link>
                       </p>
                </div>

                </div>

            {/*links*/}
            <div className="tablet:w-[1120px] tablet:h-[225px] tablet:gap-[40px] w-[172px] h-[811px] gap-[32px] bg-white mx-auto flex tablet:flex-row mobile:flex-col">
                  
                  {/*column 1*/}
                <div className="tablet:w-[250px] h-[40px] w-[172px] gap-[0px] bg-white">
                    <Image src={"/Ddsgnr Library.png"} alt="Ddsgnr" width={130} height={40} className="w-[130.6px] h-[40px]  gap-[10.5px]" />
                </div>

                  {/*column 2*/}
                <div className="tablet:w-[250px] w-[172px] h-[225px] gap-[16px] bg-white tablet:text-left mobile:text-center">
                    <p className="tablet:w-[250px] h-[24px] w-[172px] font-sans font-semibold text-[16px] leading-6"style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}>Courses</p>              
              <div className="tablet:w-[250px] h-[185px] w-[172px] flex flex-col mt-4">
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Business</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Development</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Technology</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Design</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Programming</Link>

              </div>
                </div>

                  {/*column 3*/}
                  <div className="tablet:w-[250px] w-[172px] h-[225px] gap-[16px] bg-white tablet:text-left mobile:text-center">
                    <p className="tablet:w-[250px] h-[24px] w-[172px] font-sans font-semibold text-[16px] leading-6"style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}>Resources</p>              
              <div className="tablet:w-[250px] h-[185px] w-[172px] flex flex-col mt-4">
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Career</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Resume</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Learning</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Interview Preparation</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Jobs</Link>

              </div>
                </div>

                  {/*column 4*/}
                  <div className="tablet:w-[250px] w-[172px] h-[225px] gap-[16px] bg-white tablet:text-left mobile:text-center">
                    <p className="tablet:w-[250px] h-[24px] w-[172px] font-sans font-semibold text-[16px] leading-6"style={{
                textDecorationSkipInk: "none",
                textUnderlinePosition: "from-font",
              }}>About Us</p>              
              <div className="tablet:w-[250px] h-[185px] w-[172px] flex flex-col mt-4">
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Contact</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Help/Support</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">FAQ</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Terms and Conditions</Link>
                <Link href={"/"} className="tablet:w-[250px] mobile:[172px] h-[37px] py-[8px] font-sans font-normal text-[14px]">Partners</Link>

              </div>
                </div>


            </div>

            {/*credits*/}
            <div className="tablet:w-[1120px] tablet:h-[57px] tablet:gap-[32px] w-[380px] h-[172px] gap-[32px] bg-white">
                <div className="tablet:w-[1120px] w-[380px] h-[1px] border border-black"></div>
                <div className="tablet:w-[1120px] tablet:h-[24px] tablet:gap-[0px] justify-between w-[380px] h-[114px] mobile:gap-[24px] mt-8 flex mobile:flex-col tablet:flex-row">

                    <div className="tablet:w-[564px] tablet:h-[21px] w-[345px] h-[66px] gap-[24px] flex flex-col tablet:flex-row mx-auto tablet:mx-0">
                        <p className="tablet:w-[195px] h-[21px] font-sans font-normal text-[14px] leading-[21px] items-center mx-auto tablet:mx-0">2023 Ddsgnr. All right reserved.</p>
                        <span className="w-[345px] h-[21px]  flex ">
                            <Link href={"/"} className="w-[87px] font-sans font-normal text-[14px] leading-[21px] underline items-center">Privacy Policy</Link>
                            <Link href={"/"} className="font-sans font-normal text-[14px] leading-[21px] underline pl-6 items-center">Terms of Service</Link>
                            <Link href={"/"} className="font-sans font-normal text-[14px] leading-[21px] underline pl-6 items-center">Cookies Settings</Link>
                        </span>
                    </div>

                    <div className="w-[132px] h-[24px] gap-[12px] mx-auto tablet:mx-0 flex">
                        <Link href={"/"}><Image src={"/Facebook.png"} alt='facebook' width={24} height={24} className="w-6 h-6 object-contain object-center" /></Link>
                        <Link href={"/"}><Image src={"/Instagram.png"} alt='facebook' width={24} height={24} className="w-6 h-6 object-contain object-center" /></Link>
                        <Link href={"/"}><Image src={"/Twitter.png"} alt='facebook' width={24} height={24} className="w-6 h-6 object-contain object-center" /></Link>
                        <Link href={"/"}><Image src={"/Linkedin.png"} alt='facebook' width={24} height={24} className="w-6 h-6 object-contain object-center" /></Link>
                    </div>


                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Footer





