import React, { useState, useEffect } from "react";
import { gsap } from "../lib/gsap";
import ImageFallback from "../layouts/components/ImageFallback";

const EventsTable = () => {
  const trainers = [
    {
      trainer: "Avadhut Sathe",
      mode: "online",
      date: "9 Nov",
      language: "English",
      time: "6:00 PM – 9:00 PM",
      logo_url: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = document.querySelectorAll(".trainer-item");
      gsap.fromTo(
        items,
        { y: 20, opacity: 1 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.2,
          ease: "power1.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full max-w-4xl">
      {isMobile ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl p-6 max-w-full flex flex-col justify-between transition-transform transform hover:-translate-y-1 hover:shadow-xl border border-gray-200"
            >
              <div className="flex items-center justify-center gap-4 mb-4 text-gray-700 text-xs">
                <p className="bg-blue-100 text-blue-700 px-2 py-1 rounded-md">
                  {trainer.date}
                </p>
                <p className="bg-black text-green-700 px-2 py-1 rounded-md">
                  {trainer.mode}
                </p>
              </div>
              <div className="space-y-1 mb-4 bg-gray-500 p-4 rounded-md">
                <p className="text-lg font-bold text-gray-900">
                  {trainer.language}
                </p>
                <p className="text-md text-gray-600">{trainer.time}</p>
              </div>
              <div className="text-sm font-medium text-gray-800 mb-6 bg-gray-50 p-4 rounded-md">
                {trainer.trainer}
              </div>
              <a
                href={"hi"}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                type="button"
              >
                Register Now
              </a>
            </div>
          ))}
        </div>
      ) : (
        <table className="w-full min-w-max table-auto rounded-lg shadow-lg bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border-y border-gray-200 bg-gray-50 p-3 text-sm font-medium text-gray-900">
                Trainer
              </th>
              <th className="border-y border-gray-200 bg-gray-50 p-3 text-sm font-medium text-gray-900">
                Status
              </th>
              <th className="border-y border-gray-200 bg-gray-50 p-3 text-sm font-medium text-gray-900">
                Date
              </th>
              <th className="border-y border-gray-200 bg-gray-50 p-3 text-sm font-medium text-gray-900">
                Language/Time
              </th>
              <th className="border-y border-gray-200 bg-gray-50 p-3"></th>
            </tr>
          </thead>
          <tbody>
            {trainers.map((trainer, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition trainer-item"
              >
                <td className="p-3 border-b border-gray-200 flex items-center gap-2">
                  <ImageFallback
                    className="w-12 h-12 rounded-full object-cover"
                    src={trainer.logo_url}
                    alt={`${trainer.trainer} Logo`}
                    width={48}
                    height={48}
                    priority={true}
                  />
                  <p className="text-sm font-bold text-gray-900">hi</p>
                </td>
                <td className="p-3 border-b border-gray-200 text-sm font-medium text-green-800 bg-green-100 rounded-md">
                  {trainer.mode}
                </td>
                <td className="p-3 border-b border-gray-200 text-sm text-gray-900">
                  {trainer.date}
                </td>
                <td className="p-3 border-b border-gray-200 text-sm text-gray-900 bg-blue-100 rounded-md">
                  {trainer.language} - {trainer.time}
                </td>
                <td className="p-3 border-b border-gray-200">
                  <button
                    className="w-full h-9 rounded-lg text-xs font-medium bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 transition"
                    type="button"
                  >
                    Register Now
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EventsTable;
