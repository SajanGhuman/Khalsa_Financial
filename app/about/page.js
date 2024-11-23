"use client";
import Banner from "../../layouts/components/Banner";
import Circle from "../../layouts/components/Circle";
import Cta from "../../layouts/components/Cta";
import ImageFallback from "../../layouts/components/ImageFallback";

const About = () => {
  return (
    <>
      <section className="section pt-0">
        <Banner title="About Us" />
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 md:order-2 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/path/to/image.jpg"
                  width={425}
                  height={487}
                  alt=""
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
                About Us
              </h2>
              <p className="mt-10 text-[#193737]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Works */}
        <div className="section container">
          <div className="animate text-center">
            <p className="text-[#193737]">Our Works</p>
            <h2 className="section-title mt-4 text-[#193737]">What We Do</h2>
            <p className="mt-10 text-[#193737]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="row mt-10 justify-center">
            {Array.from({ length: 3 }, (_, index) => (
              <div key={"work-" + index} className="mt-10 md:col-6 lg:col-5">
                <div className="animate text-center md:px-6 xl:px-12">
                  <h3 className="h4">Work Title</h3>
                  <p className="mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission */}
        <div className="section container">
          <div className="row items-center justify-center">
            <div className="animate md:col-6 lg:col-5">
              <div className="about-image relative p-[60px]">
                <ImageFallback
                  className="animate relative w-full rounded-2xl"
                  src="/path/to/image.jpg"
                  width={425}
                  height={487}
                  alt=""
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
              <h2 className="section-title bar-left mt-4">Mission Statement</h2>
              <p className="mt-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>

        {/* Video (Commented Out) */}
        {/* <div className="container-xl relative">
          <div className="bg-theme absolute left-0 top-0 w-full">
            {/* Circle elements omitted for brevity */}
        {/* </div>
          <div className="row items-center justify-center py-[90px]">
            <div className="md:col-6 xl:col-4">
              <div className="animate p-5">
                <p>Watch Our Video</p>
                <h2 className="mt-4 section-title bar-left">Video Title</h2>
                <p className="mt-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            <div className="md:col-6 xl:col-5">
              <div className="px-4 ">
                <VideoPopup id="video_id" thumbnail="/path/to/thumbnail.jpg" width={540} height={585} />
              </div>
            </div>
          </div>
        </div> */}

        {/* Clients (Commented Out) */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>Our Clients</p>
            <h2 className="section-title mt-4">Clients We Work With</h2>
          </div>
          <div className="animate from-right col-12 mt-16">
            <Swiper
              loop={true}
              slidesPerView={3}
              breakpoints={{
                992: { slidesPerView: 5 },
              }}
              spaceBetween={20}
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
            >
              {Array.from({ length: 5 }, (_, index) => (
                <SwiperSlide
                  className="h-20 cursor-pointer px-6 py-6 grayscale transition hover:grayscale-0 lg:px-10"
                  key={"brand-" + index}
                >
                  <div className="relative h-full">
                    <ImageFallback className="object-contain" src="/path/to/brand.jpg" sizes="100vw" alt="" fill={true} priority={true} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}

        {/* Members */}
        <div className="section container">
          <div className="animate text-center">
            <p>Our Team</p>
            <h2 className="section-title mt-4">Meet Our Members</h2>
            <p className="mt-16">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="row justify-center">
            <div className="lg:col-10">
              <div className="row">
                {Array.from({ length: 3 }, (_, index) => (
                  <div
                    key={"member-" + index}
                    className="animate mt-10 text-center md:col-6 lg:col-4"
                  >
                    <ImageFallback
                      className="mx-auto rounded-full shadow-[10px_10px_0] shadow-primary/10"
                      src="/path/to/member.jpg"
                      width={245}
                      height={245}
                      alt="Member Name"
                    />
                    <h4 className="mt-8">Member Name</h4>
                    <p className="mt-3">Member Field</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office (Commented Out) */}
        {/* <div className="section container">
          <div className="animate text-center">
            <p>Our Office</p>
            <h2 className="section-title mt-4">Visit Our Office</h2>
            <p className="mt-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="mt-16">
            <Swiper loop={true} spaceBetween={20} modules={[Autoplay]} autoplay={{ delay: 3000 }}>
              {Array.from({ length: 3 }, (_, index) => (
                <SwiperSlide className="overflow-hidden" key={"office-" + index}>
                  <ImageFallback src="/path/to/office.jpg" width={1200} height={700} className="w-full" alt="" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div> */}

        {/* CTA */}
        <Cta />
      </section>
    </>
  );
};

export default About;
