"use client";

import Circle from "../../layouts/components/Circle";
import ImageFallback from "../../layouts/components/ImageFallback";
import { gsap } from "../../lib/gsap";
import { markdownify } from "../../lib/utils/textConverter";
import { useEffect } from "react";

const HomeBanner = ({ banner: bannerData }) => {
  const registrationTables = [
    {
      trainerImage: "https://img.daisyui.com/images/profile/demo/2@94.webp",
      trainerName: "Avadhut Sathe",
      trainerRole: "Trainer",
      status: "Online",
      date: "27 Oct",
      language: "English",
      time: "6:00 PM – 9:00 PM",
    },
    // Add more trainer objects if needed
  ];

  useEffect(() => {
    const ctx2 = gsap.context(() => {
      const banner = document.querySelector(".banner");
      const bannerContent = document.querySelector(".banner-content");
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
        .fromTo(
          ".banner-table .text-center, .banner-table .btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5, stagger: 0.2 },
          ">-0.3",
        );

      const parallaxTl = gsap.timeline({
        ease: "none",
        scrollTrigger: {
          trigger: banner,
          start: () => `top`,
          scrub: true,
        },
      });

      const position = banner.offsetHeight * 0.4;
      parallaxTl
        .fromTo(banner, { y: 0 }, { y: -position })
        .fromTo(bannerContent, { y: 0 }, { y: position }, "<");
    });

    return () => ctx2.revert();
  }, []);

  return (
    <section className="z-10 banner mb-[40px]">
      <div className="container-xl">
        <div className="relative">
          <div className="row rounded-2xl">
            <div className="col-12">
              <div
                className="banner-content col-12 text-center flex justify-center items-center flex-col gap-[100px] md:flex-row md:gap-[400px]"
                style={{ position: "relative", zIndex: 10 }}
              >
                {/* Card Wrapper for Mobile */}
                <div className="card w-full max-w-md p-5 rounded-lg mx-auto md:hidden bg-white shadow-lg transition-transform transform hover:scale-105">
                  <div className="flex flex-col items-center justify-center">
                    {/* Title Section */}
                    <div className="flex flex-col items-center mb-4">
                      {markdownify(
                        "STOCK MARKET",
                        "h1",
                        "banner-title text-gray-800 text-3xl font-bold text-center mb-0 pb-0",
                      )}
                      {markdownify(
                        "EYE-OPENER",
                        "h2",
                        "banner-title text-[40px] mb-2 font-cursive text-yellow-500 font-bold text-center mt-1 pb-0",
                      )}
                      {markdownify(
                        "Wealth Creation Through Equity Investing/Trading",
                        "p",
                        "banner-title text-gray-500 text-sm text-center mt-1",
                      )}
                    </div>

                    {/* Image Section */}
                    <div className="flex flex-col items-center mb-4">
                      <ImageFallback
                        className="banner-img mb-2 rounded-sm border-4 border-white transition-transform transform hover:scale-110"
                        src={bannerData.image}
                        width={150}
                        height={150}
                        priority={true}
                        alt="headshot_me"
                      />
                      {markdownify(
                        "Jasmeet Singh",
                        "h4",
                        "banner-title text-gray-800 text-lg font-semibold text-center",
                      )}
                      {markdownify(
                        "(Financial Trader, Trainer and Mentor)",
                        "p",
                        "banner-title text-gray-500 text-sm text-center",
                      )}
                    </div>

                    {/* Info Flow Section */}
                    <div className="flex flex-col items-center w-full bg-gradient-to-br from-orange-400 to-orange-500 rounded-[30px] p-6 shadow-lg">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Event Details
                      </h3>
                      <div className="flex flex-col space-y-4 w-full">
                        {/* Date */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Date
                          </div>
                          <div className="text-xl font-semibold text-gray-800">
                            {registrationTables[0].date}
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Time
                          </div>
                          <div className="text-xl font-semibold text-gray-800">
                            {registrationTables[0].time}
                          </div>
                        </div>

                        {/* Language */}
                        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
                          <div className="text-sm font-medium text-gray-700 mb-1">
                            Language
                          </div>
                          <div className="text-xl font-semibold text-gray-800">
                            {registrationTables[0].language}
                          </div>
                        </div>
                      </div>

                      {/* Register Button */}
                      <div className="mt-6">
                        <button className="btn bg-white text-orange-500 rounded-full px-8 py-2 font-semibold shadow-lg hover:bg-orange-100 transition-colors duration-300">
                          Register Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Non-Card Content for Larger Screens */}
                <div className="hidden md:flex flex-col gap-4 w-full max-w-3xl mx-auto">
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
                        "banner-title opacity-0 text-center mt-0 pt-0 relative top-[-15px] font-cursive text-yellow-500 font-bold",
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

                  {/* Registration Tables */}
                  <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto">
                    {registrationTables.map((table, index) => (
                      <div
                        key={index}
                        className="w-full bg-white shadow-lg rounded-xl overflow-hidden banner-table"
                      >
                        <div className="flex items-center p-4 space-x-6 bg-gray-100 rounded-t-xl">
                          <div className="avatar">
                            <div className="mask mask-squircle w-16 h-16 md:w-24 md:h-24">
                              <img
                                src={table.trainerImage}
                                alt={`${table.trainerName} Avatar`}
                                className="rounded-full"
                              />
                            </div>
                          </div>
                          <div>
                            <h2 className="text-lg font-semibold">
                              {table.trainerName}
                            </h2>
                            <p className="text-sm text-gray-500">
                              {table.trainerRole}
                            </p>
                          </div>
                        </div>
                        <hr className="border-gray-300" />
                        <div className="flex justify-between items-center p-4 space-x-4">
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-700 mb-1">
                              Status
                            </div>
                            <div
                              className={`bg-${table.status === "Online" ? "green" : "red"}-500 text-white py-1 px-3 rounded-full text-xs font-semibold`}
                            >
                              {table.status}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-700 mb-1">
                              Date
                            </div>
                            <div className="text-gray-600">{table.date}</div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm font-medium text-gray-700 mb-1">
                              Language / Time
                            </div>
                            <div className="text-gray-600">
                              {table.language} | {table.time}
                            </div>
                          </div>
                          <div className="text-center">
                            <button className="btn btn-primary rounded-full px-4 py-2 banner-btn">
                              Register Now
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
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
