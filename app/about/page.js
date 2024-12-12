"use client";
import Banner from "../../layouts/components/Banner";
import VideoPopup from "../../layouts/components/VideoPopup";
import Circle from "../../layouts/components/Circle";
import Cta from "../../layouts/components/Cta";
import ImageFallback from "../../layouts/components/ImageFallback";
import Swiper from "swiper";
import { SwiperSlide } from "swiper/react";

const About = () => {
  return (
    <>
      <section className="section pt-0">
        <Banner title="About Us" />
        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/images/jasmeet_time.jpeg"
                  width={425}
                  height={487}
                  alt="Jasmeet Singh Khalsa"
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 lg:col-4">
              <p>Our Mission</p>
              <h2 className="section-title bar-left mt-4">
                Empowering Financial Freedom
              </h2>
              <p className="mt-10">
                At our core, we aim to educate and inspire individuals to
                achieve financial independence. Through innovative coaching and
                personalized strategies, we help you unlock your true potential.
              </p>
            </div>
          </div>
        </div>

        {/* About Us */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/images/about_image_1.png"
                  width={425}
                  height={487}
                  alt="Jasmeet Singh Khalsa"
                />
                <Circle
                  className="left-4 top-4 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  width={37}
                  height={37}
                  fill={false}
                  className="right-10 top-20 z-[-1]"
                />
                <Circle
                  className="right-12 top-1/2 -z-[1]"
                  width={24}
                  height={24}
                />
                <Circle
                  className="bottom-6 right-6 z-[-1]"
                  width={85}
                  height={85}
                />
                <Circle
                  className="left-12 top-1/2 z-[-1]"
                  width={20}
                  height={20}
                />
                <Circle
                  className="bottom-12 left-8 z-[1]"
                  width={47}
                  height={47}
                  fill={false}
                />
              </div>
            </div>
            <div className="animate md:col-6 md:order-1 lg:col-4 text-[#193737]">
              <p>WHO WE ARE</p>
              <h2 className="section-title bar-left mt-4 text-[#193737]">
                Pioneers in Financial Coaching
              </h2>
              <p className="mt-10 text-[#193737]">
                Jasmeet Singh Khalsa is a dedicated stock market coach with a
                passion for transforming lives. Our team believes in creating
                impactful learning experiences to equip you with the knowledge
                and skills for success.
              </p>
            </div>
          </div>
        </div>

        {/* Our Team
        <div className="section container">
          <div className="animate text-center">
            <p>Our Team</p>
            <h2 className="section-title mt-4">Meet Our Members</h2>
            <p className="mt-16">
              Our team comprises dedicated professionals committed to empowering
              individuals through innovative financial solutions and guidance.
            </p>
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="flex justify-center items-center">
                <div className="animate mt-10 text-center md:col-6 lg:col-4">
                  <ImageFallback
                    className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                    src="/images/about_image_1.png"
                    width={245}
                    height={245}
                    alt="Jasmeet Singh Khalsa"
                  />
                  <h4 className="mt-8">Jasmeet Singh Khalsa</h4>
                  <p className="mt-3">Financial Coach</p>
                </div>
                <div className="animate mt-10 text-center md:col-6 lg:col-4">
                  <ImageFallback
                    className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                    src="/images/about_image_1.png"
                    width={245}
                    height={245}
                    alt="Team Member"
                  />
                  <h4 className="mt-8">Rahul Sharma</h4>
                  <p className="mt-3">Investment Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        */}

        {/* CTA */}
        <Cta />
      </section>
    </>
  );
};

export default About;
