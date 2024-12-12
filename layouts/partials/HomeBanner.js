"use client";

import Image from "next/image";
import ImageFallback from "../../layouts/components/ImageFallback";
import { gsap } from "../../lib/gsap";
import { useEffect } from "react";

const HomeBanner = () => {
  const banners = [
    {
      title: "KHALSA FINANCIAL",
      subtitle: "DARE TO DREAM",
      description: "Wealth Creation Through Equity Investing/Trading",
      trainer: {
        name: "Jasmeet Singh",
        role: "(Financial Trader, Trainer and Mentor)",
        image: "/images/headshot_me.png",
      },
    },
    {
      title: "KHALSA FINANCIAL",
      subtitle: "DARE TO DREAM",
      description: "Wealth Creation Through Equity Investing/Trading",
      trainer: {
        name: "Jasmeet Singh",
        role: "(Financial Trader, Trainer and Mentor)",
        image: "/images/headshot_me.png",
      },
    },
  ];

  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        ".banner-title",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5 },
      )
        .fromTo(
          ".banner-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.4",
        )
        .fromTo(
          ".banner-img",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          ">-0.5",
        )
        .fromTo(
          ".banner-table .text-center, .banner-table .btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
          ">-0.3",
        );
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="z-10 banner mb-[40px] bg-gradient-to-t from-[#0F2121] to-[#1A3A3A]">
      <img
        src="/images/candle.jpg"
        className="absolute min-h-screen w-full object-cover opacity-5 filter grayscale"
      />
      <div className="container-xl">
        <div className="relative">
          <div className="row rounded-2xl">
            <div className="col-12">
              <div
                className="banner-content col-12 flex flex-col justify-center items-center gap-[50px] py-[100px]"
                style={{ position: "relative", zIndex: 10 }}
              >
                <div className="text-center flex flex-col justify-center items-center">
                  <Image
                    src="/images/logo_green.png"
                    height={100}
                    width={100}
                  />
                  <h1 className="banner-title text-[#D19F6B]">
                    KHALSA FINANCIAL
                  </h1>
                  <h2 className="banner-title text-[#D19F6B] text-[30px] mb-2 font-bold text-center mt-1 pb-0">
                    DARE TO DREAM
                  </h2>
                </div>
                <div className="card min-w-full max-w-md p-5 rounded-lg mx-auto flex lg:flex-row justify-center items-center border-solid border-[3px] border-[#D19F6B]">
                  <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    <div className="banner-title flex text-center items-center justify-center max-w-[700px] text-sm md:text-lg lg:text-2xl">
                      Welcome to Khalsa Financial, where we empower individuals
                      to take control of their financial future. With Khalsa
                      Financial, dare to dream of a future where financial
                      independence is no longer just a goal—it’s your reality.{" "}
                    </div>
                    <div className="flex flex-col justify-center items-center">
                      <ImageFallback
                        className="banner-img mb-2 rounded-sm transition-transform transform hover:scale-110"
                        src="/images/landing_image_9.png"
                        width={200}
                        height={200}
                        priority={true}
                        alt="headshot_me"
                      />
                      <p>
                        <b>JASMEET SINGH KHALSA</b>
                        {/*<b>Your trusted guide in financial empowerment</b>*/}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
