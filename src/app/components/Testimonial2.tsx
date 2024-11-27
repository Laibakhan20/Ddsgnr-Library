import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  return (
    <div
      id="testimonial"
      className="flex  tablet:w-[1280px] tablet:h-[830.89px] tablet:top-[5886px] tablet:p-[112px_64px] tablet:gap-[80px] mobile:w-[428px] mobile:h-[681.89px] mobile:p-[48px_24px] mobile:gap-[48px] tablet:bg-mywhite bg-white mx-auto flex-col"
    >
      {/*heading*/}
      <div className="tablet:w-[560px] tablet:h-[109px] gap-6 mobile:[361px] mobile:h-[120px]">
        <h2 className="tablet:flex mobile:hidden w-[560px] h-[58px] font-sans font-bold text-5xl leading-[57.6px]">
          Customer testimonials
        </h2>
        <h4 className="mobile:flex tablet:hidden w-[315px] h-[42px] font-bold text-[32px] leading-[41.6px] text-center mx-auto ">
          What Our Student Say
        </h4>
        <p className="tablet:w-[560px] tablet:h-[27px] w-[361px] h-[54px] mobile:text-center tablet:text-left leading-7 font-sans font-normal text-[18px] pt-6 mobile:mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* tablet content div*/}
      <div className="tablet:flex mobile:hidden flex-col items-center justify-center w-full tablet:w-[1152px] gap-12 mx-auto mobile:w-[380px] mobile:h-[417.89px] tablet:h-[417.89px] ">
        {/* Testimonial Section */}
        <div className="flex flex-col w-full h-auto tablet:h-[417.89px] mobile:h-[417.89px] gap-12">
          {/* Carousel */}
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent className="flex gap-[32px]">
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="tablet:flex tablet:justify-between mobile:w-[380px] mobile:flex mobile:justify-center mobile:h-[321.89px] tablet:w-[1152px] tablet:[321.89px]"
                >
                  {/*card 1*/}
                  <Card className="tablet:w-[362.67px] tablet:h-[321.89px] border-t border-black gap-[24px] rounded-none bg-mywhite">
                    <CardContent className="p-8 flex flex-col gap-[24px]">
                      <span className="w-[116px] h-[18.89px] gap-[4px] flex">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                      </span>
                      <div className="w-[298.67] h-[215px] gap-[24px]">
                        <p
                          className="w-[298.67px] h-[135px] text-[18px] leading-[27px] font-sans text-left"
                          style={{
                            textDecorationSkipInk: "none",
                            textUnderlinePosition: "from-font",
                          }}
                        >
                          &quot;Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse varius enim in eros
                          elementum tristique. Duis cursus, mi quis viverra
                          ornare.&quot;
                        </p>
                        <div className="w-[215px] h-[56px] gap-[20px] flex mt-6">
                          <Image
                            src={"/team3.png"}
                            alt="image"
                            height={56}
                            width={56}
                            className="w-[56px] h-[56px] object-contain object-center rounded-full "
                          />
                          <span className="w-[139px] h-[48px]">
                            <p className="w-[99px] h-[24px] font-semibold text-[16px] leading-[24px] font-sans">
                              James Nduku
                            </p>
                            <p className="w-[139px] h-[24px] leading-[24px] text-[16px] font-sans font-normal">
                              Software Developer
                            </p>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {/*card 2*/}
                  <Card className="tablet:w-[362.67px] tablet:h-[321.89px] border-t border-black gap-[24px] rounded-none bg-mywhite">
                    <CardContent className="p-8 flex flex-col gap-[24px]">
                      <span className="w-[116px] h-[18.89px] gap-[4px] flex">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                      </span>
                      <div className="w-[298.67] h-[215px] gap-[24px]">
                        <p
                          className="w-[298.67px] h-[135px] text-[18px] leading-[27px] font-sans text-left"
                          style={{
                            textDecorationSkipInk: "none",
                            textUnderlinePosition: "from-font",
                          }}
                        >
                          &quot;Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse varius enim in eros
                          elementum tristique. Duis cursus, mi quis viverra
                          ornare.&quot;
                        </p>
                        <div className="w-[215px] h-[56px] gap-[20px] flex mt-6">
                          <Image
                            src={"/team1.png"}
                            alt="image"
                            height={56}
                            width={56}
                            className="w-[56px] h-[56px] object-contain object-center rounded-full "
                          />
                          <span className="w-[139px] h-[48px]">
                            <p className="w-[117px] h-[24px] font-semibold text-[16px] leading-[24px] font-sans">
                              Erick Kipkemboi
                            </p>
                            <p className="w-[139px] h-[24px] leading-[24px] text-[16px] font-sans font-normal">
                              Scrum Master
                            </p>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  {/*card 3*/}
                  <Card className="tablet:w-[362.67px] tablet:h-[321.89px] border-t border-black gap-[24px] rounded-none bg-mywhite">
                    <CardContent className="p-8 flex flex-col gap-[24px]">
                      <span className="w-[116px] h-[18.89px] gap-[4px] flex">
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                        <svg
                          viewBox="0 0 1024 1024"
                          fill="currentColor"
                          height="1em"
                          width="1em"
                        >
                          <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                        </svg>
                      </span>
                      <div className="w-[298.67] h-[215px] gap-[24px]">
                        <p
                          className="w-[298.67px] h-[135px] text-[18px] leading-[27px] font-sans text-left"
                          style={{
                            textDecorationSkipInk: "none",
                            textUnderlinePosition: "from-font",
                          }}
                        >
                          &quot;Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Suspendisse varius enim in eros
                          elementum tristique. Duis cursus, mi quis viverra
                          ornare.&quot;
                        </p>
                        <div className="w-[215px] h-[56px] gap-[20px] flex mt-6">
                          <Image
                            src={"/team6.png"}
                            alt="image"
                            height={56}
                            width={56}
                            className="w-[56px] h-[56px] object-contain object-center rounded-full "
                          />
                          <span className="w-[139px] h-[48px]">
                            <p className="w-[115px] h-[24px] font-semibold text-[16px] leading-[24px] font-sans">
                              Stephen Kerubo
                            </p>
                            <p className="w-[139px] h-[24px] leading-[24px] text-[16px] font-sans font-normal">
                              UI/UX Designer
                            </p>
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/*bottom*/}
        <div className="flex items-center justify-between w-[1152px] h-[48px]">
          <div className="w-[72px] h-[8px] flex">
            <Image
              src={"/Slider Dots.png"}
              alt="slider"
              width={72}
              height={8}
            />
          </div>

          <Carousel>
            <div className="h-[48px] w-[111px] gap-4 flex">
              <Button className="w-[48px] h-[48px] gap-2 border border-black rounded-full flex items-center justify-center text-base font-semibold text-black bg-mywhite">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#000000"
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </Button>
              <Button className="w-[48px] h-[48px] gap-2 border border-black rounded-full flex items-center justify-center text-base font-semibold text-black bg-mywhite">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#000000"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </Button>
            </div>
          </Carousel>
        </div>
      </div>

      {/*mobile content div*/}
      <div className="mobile:flex tablet:hidden w-[380px] h-[417.89px] gap-[48px] white flex-col">
        <Card className="w-[380px] h-[321.89px] border-t border-black gap-[32px] rounded-none bg-white">
          <CardContent className="p-8 flex flex-col gap-[24px]">
            <span className="w-[116px] h-[18.89px] gap-[4px] flex">
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
              </svg>
            </span>
            <div className="w-[316px] h-[215px] gap-[24px]">
              <p
                className="w-[316px] h-[135px] text-[18px] leading-[27px] font-sans text-left"
                style={{
                  textDecorationSkipInk: "none",
                  textUnderlinePosition: "from-font",
                }}
              >
                &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare.&quot;
              </p>
              <div className="w-[215px] h-[56px] gap-[20px] flex mt-6">
                <Image
                  src={"/team3.png"}
                  alt="image"
                  height={56}
                  width={56}
                  className="w-[56px] h-[56px] object-contain object-center rounded-full "
                />
                <span className="w-[139px] h-[48px]">
                  <p className="w-[96px] h-[24px] font-semibold text-[16px] leading-[24px] font-sans">
                    Wade Warren
                  </p>
                  <p className="w-[178px] h-[24px] leading-[24px] text-[16px] font-sans font-normal">
                    Position, Company name
                  </p>
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* bottom */}
        <div className="w-[380px] h-[48px] justify-between flex items-center white">
          <div className="w-[72px] h-[8px] flex">
            <Image
              src={"/Slider Dots.png"}
              alt="slider"
              width={72}
              height={8}
            />
          </div>

          <Carousel>
            <div className="h-[48px] w-[111px] gap-4 flex">
              <Button className="w-[48px] h-[48px] gap-2 border border-black rounded-full flex items-center justify-center text-base font-semibold text-black bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#000000"
                    d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
                  />
                </svg>
              </Button>
              <Button className="w-[48px] h-[48px] gap-2 border border-black rounded-full flex items-center justify-center text-base font-semibold text-black bg-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path
                    fill="#000000"
                    d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                  />
                </svg>
              </Button>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
