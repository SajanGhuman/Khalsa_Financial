"use client";

import Circle from "../../layouts/components/Circle";
import ImageFallback from "../../layouts/components/ImageFallback";
import Notice from "../../layouts/shortcodes/Notice";
import { gsap } from "../../lib/gsap";
import { markdownify } from "../../lib/utils/textConverter";
import Link from "next/link";
import { useEffect } from "react";

const HomeBanner = ({ banner: bannerData, brands }) => {
  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerBg = document.querySelector(".banner-bg");
      const bannerContent = document.querySelector(".banner-content");
      const header = document.querySelector(".header");
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
          ">-.5",
        )
        // Animation for the table banner
        .fromTo(
          ".banner-table .text-center, .banner-table .btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
          ">-0.3",
        );

      // Parallax banner
      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top ${header.clientHeight}`,
          scrub: true,
        },
      });

      const position = (banner.offsetHeight - bannerBg.offsetHeight) * 0.4;
      parallaxTl
        .fromTo(bannerBg, { y: 0 }, { y: -position })
        .fromTo(bannerContent, { y: 0 }, { y: position }, "<")
        .fromTo(".banner-bg .circle", { y: 0 }, { y: position }, "<");
    });
    ("");
    return () => ctx2.revert();
  }, []);

  return (
    <section className="section banner pb-0 mb-[0px] pt-0 mt-0">
      <div className="container-xl">
        <div className="relative">
          <div className="bg-theme banner-bg min-w-[100vw] min-h-[600px] absolute left-1/2 top-0 transform -translate-x-1/2"></div>
          <div className="row overflow-hidden rounded-2xl">
            <div className="col-12">
              <div className="banner-content col-12 h-[0px] pb-[100px] mb-0 pt-[520px] text-center flex justify-center items-end">
                <div className="flex justify-center items-center gap-[400px]">

                  {/*Table*/}
                  <div>
                    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden banner-table">
                      <div className="flex items-center p-4 space-x-6 bg-gray-100 rounded-t-xl">
                        <div className="avatar">
                          <div className="mask mask-squircle w-16 h-16">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Trainer Avatar"
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold">
                            Avadhut Sathe
                          </h2>
                          <p className="text-sm text-gray-500">Trainer</p>
                        </div>
                      </div>
                      <hr className="border-gray-300" />

                      <div className="flex justify-between items-center p-4 space-x-4">
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Status
                          </div>
                          <div className="bg-green-500 text-white py-1 px-3 rounded-full text-xs font-semibold">
                            Online
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Date
                          </div>
                          <div className="text-gray-600">27 Oct</div>
                        </div>
                        <div className="text-center">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Language / Time
                          </div>
                          <div className="text-gray-600">
                            Hindi | 6:00 PM – 9:00 PM
                          </div>
                        </div>
                        <div>
                          <button className="btn btn-primary rounded-full px-4 py-2">
                            Register Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* text with image*/}
                  <div className="flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      {markdownify(
                        "STOCK MARKET",
                        "h1",
                        "banner-title opacity-0 text-center mb-0 pb-0",
                      )}
                      {markdownify(
                        "EYE OPENER",
                        "h2",
                        "banner-title opacity-0 text-center mt-0 pt-0 relative top-[-15px]",
                      )}
                      {markdownify(
                        "Wealth Creation Through Equity Investing/Trading",
                        "p",
                        "banner-title opacity-0 text-center relative top-[-10px]",
                      )}
                    </div>
                    <div className="flex flex-col items-center justify-center">
                      <ImageFallback
                        className="banner-img"
                        src={bannerData.image}
                        width={150}
                        height={150}
                        priority={true}
                        alt="headshot_me"
                      />
                      {markdownify(
                        "Jasmeet Singh",
                        "h4",
                        "banner-title opacity-0 text-center",
                      )}
                      {markdownify(
                        "(Financial Trader, Trainer and Mentor)",
                        "p",
                        "banner-title opacity-0 text-center",
                      )}
                    </div>
                  </div>
                </div>

                {/*

                {/*
                 */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
