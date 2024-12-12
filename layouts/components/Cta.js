import config from "../../config/config.json";
import { markdownify } from "../../lib/utils/textConverter";
import Link from "next/link";
import Circle from "./Circle";
import ImageFallback from "./ImageFallback";

function Cta() {
  const { title, content, button, enable } = config.call_to_action;
  if (!enable) return;

  return (
    <section className="cta section pt-0 bg-gradient-to-t from-[#0F2121] to-[#1A3A3A]">
      <div className="container-xl">
        <div className="section relative px-4 text-center">
          <div className="animate">
            <h2 className="section-title text-[#D19F68]">
              Enroll in the course now
            </h2>{" "}
            {/* Updated text color */}
            <p className="mt-10 text-[#D19F68] text-lg font-bold">
              Take the first step toward financial independence. Our courses
              cover everything from budgeting and saving to investing and wealth
              management.
            </p>{" "}
            {/* Updated text color */}
            <Link
              href="/register"
              className="btn btn-primary mt-10 bg-[#674F04] text-[20px] p-2"
            >
              ENROLL NOW
            </Link>
          </div>
          <div className="bg-theme animated-bg absolute top-0 left-0 w-full after:hidden">
            <ImageFallback
              src="/images/wave.svg"
              fill={true}
              sizes="100vw"
              alt="bg wave"
            />
            <Circle
              className="left-[10%] top-12"
              width={32}
              height={32}
              fill={false}
            />
            <Circle className="left-[3%] bottom-[13%]" width={85} height={85} />
            <Circle
              className="left-[15%] bottom-[35%]"
              width={47}
              height={47}
              fill={false}
            />

            <Circle className="right-[12%] top-[12%]" width={20} height={20} />
            <Circle
              className="right-[2%] bottom-[30%]"
              width={73}
              height={73}
              fill={false}
            />
            <Circle
              className="right-[19%] bottom-[16%]"
              width={37}
              height={37}
              fill={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
