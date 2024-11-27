import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar1 = () => {
  return (
    <div className="laptop:block hidden top-[100px] left-[100px] pr-[64px] pl-[62px] items-center justify-center mobile:bg-mywhite tablet:bg-mywhite laptop:bg-mywhite desktop:bg-mywhite h-[54px] mx-auto" style={{ boxShadow: "0px -1px 0px 0px #000000 inset" }}>
        <div className="container bg-mywhite w-[1154px] h-[54px] flex mx-auto items-center top-[12px] bottom-[12px] gap-[32px] "style={{ boxShadow: "0px -1px 0px 0px #000000 inset" }}>
            <div className="w-[440px] h-[30px] justify-between flex items-center ">
                <span className=" h-[21px] font-sans text-sm  leading-[21px] text-myblack flex"style={{
                 textUnderlinePosition: 'from-font',
                 textDecorationSkipInk: 'none',
                 }}>Phone Number: 956 742 455 678<span className="w-[30px] h-0 border-[1px] rotate-[90deg] opacity-[0px] gap-[0px] border-mygray mt-3"></span><span className="w-[149px] h-[21px] font-sans text-sm leading-[21px] text-left"style={{
                    textUnderlinePosition: 'from-font',
                    textDecorationSkipInk: 'none',
                    }}>Email:info@ddsgnr.com</span>                
                 </span>                
                 <div >                    
                    </div> 
            </div>

            <div className="w-[736px] h-[24px] flex items-center gap-[16px]  bg-mywhite ">
            <div className="w-[132px] h-[24px] flex items-center gap-[12px] bg-mywhite ml-auto">
    <Link
      href="/"
      className="flex items-center justify-center w-[24px] h-[24px] p-[3px] rounded"
    >
      <Image
        src="/Facebook.png"
        alt="Facebook"
        width={18}
        height={18}
        priority
        quality={100}
        className="w-full h-full top-[3px] left-[7px] object-contain object-center"
      />
    </Link>
    <Link
      href="/"
      className="flex items-center justify-center w-[24px] h-[24px] p-[3px] rounded"
    >
      <Image
        src="/Instagram.png"
        alt="Instagram"
        width={18}
        height={18}
        priority
        quality={100}
        className="w-[18px] h-[18px] top-[3px] left-[3px] object-contain object-center"
      />
    </Link>
    <Link
      href="/"
      className="flex items-center justify-center w-[24px] h-[24px] p-[3px] rounded"
    >
      <Image
        src="/Twitter.png"
        alt="Twitter"
        width={18}
        height={18}
        priority
        quality={100}
        className="w-[18px] h-[15.3] top-[4.5px] left-[3px] object-contain object-center"
      />
    </Link>
    <Link
      href="/"
      className="flex items-center justify-center w-[24px] h-[24px] p-[3px] rounded"
    >
      <Image
        src="/Linkedin.png"
        alt="Linkedin"
        width={18}
        height={18}
        priority
        quality={100}
        className="w-[18px] h-[18px] top-[3px] left-[3px] object-contain object-center"
      />
    </Link>
  </div>

            </div>
        </div>
        

        

    </div>
  )
}

export default Navbar1




