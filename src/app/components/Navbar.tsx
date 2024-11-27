"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



const Navbar = () => {
  return (
    <div className="z-50 relative laptop:bg-mywhite laptop:mt-3 flex mx-auto items-center justify-center h-[72px]  border-b border-mygray mobile:border-myblack mobile:bg-mobilewhite pr-[64px] pl-[64px] tablet:w-[1280px]  laptop:w-full mobile:w-[428px] mobile:px-[24px]">

        <div className="tablet:w-[1152px] tablet:h-[44px] mobile:w-[380px] mobile:h-[48px] flex justify-between items-center gap-0">
            
            {/* ///////////////////////////////// logo /////////////////////////////////////////////*/}
            <div className="w-[130.6px] h-[41px] py-[6px] items-center gap-[10.5px]">
                <Image 
                src={"/Ddsgnr Library.png"} 
                alt="Ddsgnr Library" 
                height={30} width={130} 
                className="w-[130.6px] h-[30.38px] gap-[8.02px] object-contain object-center"  />
            </div>

            {/* /////////////////////////////// menu ////////////////////////////////////////////////*/}
            <div className="laptop:flex hidden w-[910px] h-[44px] gap-[32px] bg-mobilewhite items-center ">
                {/* Column 1 */}
               <div className="w-[687px] h-[44px] gap-[32px] flex justify-start">

               <div className="w-[64px] h-[44px] p-[10px_0_0_0] gap-[10px] border-b-[1px] border-solid border-myblack opacity-100 ">
                <Link href="/" className="w-[44px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>Home
                </Link>
               </div>
               
               <div className="w-[79px] h-[44px]  gap-[10px] pt-[10px] opacity-100">
                <Link href="#courses" className="w-[93px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>
                      Courses
                </Link>
                  </div>  

                <div className="w-[81px] h-[44px]  gap-[10px] pt-[10px] opacity-100">
                <Link href="#services" className="w-[61px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>
                      Services
                </Link>

                  </div>    

                  <div className="w-[113px] h-[44px]  gap-[10px] pt-[10px] opacity-100">
                <Link href="#achievement-section" className="w-[93px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>
                      Achievement
                </Link>
                  </div> 

                  <div className="w-[86px] h-[44px]  gap-[10px] pt-[10px] opacity-100">
                <Link href="#about" className="w-[66px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>
                      About Us
                </Link>
                  </div> 

                  <div className="w-[104px] h-[44px]  gap-[10px] pt-[10px] opacity-100">
                <Link href="#testimonial" className="w-[84px] h-[24px] font-sans text-[16px] font-normal leading-[24px] text-left p-2 text-myblack"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>
                       Testimonial
                </Link>
                  </div>

               </div>

               {/* Column 2 */}
               <div className="w-[191px] h-[40px] flex items-center gap-[16px] ">
                <button className="w-[80px] h-[40px] px-[20px] py-[8px] border border-myblack rounded-[5px] bg-white text-black  hover:bg-mygray active:bg-mygray" ><Link href={"/login"} className="w-[40px] h-[24px] text-myblack font-sans text-[16px] font-normal leading-[24px]">Login</Link></button>
                
                  <button className="w-[95px] h-[40px] px-[20px] py-[8px] rounded-[5px] border border-black bg-myblack text-white hover:bg-mygray active:bg-mygray">
                    <Link href={"/signup"} className="w-[55px] h-[24px] text-white font-sans text-[16px] font-normal leading-[24px]">Signup</Link>
                  </button>
                </div>

            </div>

            {/*mobile navbar*/}
            <div className="flex flex-col items-center justify-center w-[48px] h-[48px] gap-[24px] laptop:hidden mobile:flex text-myblack">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu w-[24px] h-[24px]"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>

            </div>


        </div>

    </div>

  )
}

export default Navbar



