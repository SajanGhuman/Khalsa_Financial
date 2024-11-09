"use client";
import { useEffect, useState } from "react";

const Candle = () => {
  const [isFixed, setIsFixed] = useState(false);

  // Handle scroll events
  const handleScroll = () => {
    setIsFixed(window.scrollY > 100);
  };

  // Attach and detach scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Updated data for larger candles
  const candles = [
    { id: 1, height: 200, width: 60 },
    { id: 2, height: 230, width: 72 },
    { id: 3, height: 240, width: 52 },
    { id: 4, height: 260, width: 68 },
    { id: 5, height: 220, width: 76 },
    { id: 6, height: 210, width: 70 },
    { id: 7, height: 220, width: 62 },
    { id: 8, height: 245, width: 66 },
    { id: 9, height: 255, width: 74 },
    { id: 10, height: 150, width: 72 },
  ];

  return (
    <div
      className={`fixed left-1/2 z-[-1000px] transform -translate-x-1/2 transition-all duration-1000 ${
        isFixed ? "top-0" : "top-[200px]"
      }`}
      style={{ height: "100vh", overflow: "hidden" }} // Full screen height
    >
      <div className="relative flex items-end justify-center h-full space-x-4">
        {candles.map((candle) => {
          // Decrease height by half when fixed
          const adjustedHeight = isFixed ? candle.height * 0.5 : candle.height;

          return (
            <div
              key={candle.id}
              className="relative flex flex-col items-center"
            >
              {/* Candle Body */}
              <div
                className="rounded-md transition-all duration-1000 ease-in-out"
                style={{
                  height: `${adjustedHeight}px`, // Adjusted height
                  width: `${candle.width}px`,
                  opacity: 0.9,
                  background: "linear-gradient(to top, #5b9bd5, #2C5ACC)", // Gradient colors
                }}
              ></div>
              {/* Wick */}
              <div
                className="absolute left-1/2 transform -translate-x-1/2 rotate-180 transition-all duration-1000 ease-in-out"
                style={{
                  height: `${adjustedHeight * 0.8}px`, // Wick height set to 80% of candle height
                  width: "4px",
                  backgroundColor: "rgba(2, 38, 71, 0.7)",
                  bottom: `${adjustedHeight * 0.5}px`, // Adjusted position closer to the candle
                }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Candle;

