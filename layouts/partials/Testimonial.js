"use client";

import ImageFallback from "../../layouts/components/ImageFallback";
import { markdownify } from "../../lib/utils/textConverter";
import { useRef } from "react";
import { TbQuote } from "react-icons/tb";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  const testimonialPaginationRef = useRef(null);

  return (
    <></>
    //<section className="section pt-0">
    //  <div className="container">
    //    <div className="animate text-center">
    //      <p>Don’t Take Our Word For It</p>
    //      {markdownify(
    //        'title',
    //        "h2",
    //        "mt-4 section-title text-custom-blue-dark",
    //      )}
    //    </div>
    //    <div className="animate row mt-10 items-center justify-center text-custom-blue-dark">
    //      <div className="xl:col-11">
    //        <div className="row items-center justify-center">
    //          <div className="hidden lg:col-3 xl:col-4 lg:block">
    //            <ImageFallback
    //              src="/images/testimonials-01.png"
    //              width={455}
    //              height={522}
    //              alt="testimonials"
    //              className="rounded-lg border border-custom-blue-dark"
    //            />
    //          </div>
    //          <div className="md:col-7 lg:col-6 xl:col-4">
    //            <Swiper
    //              modules={[Pagination, Autoplay]}
    //              pagination={{
    //                el: testimonialPaginationRef.current,
    //                type: "bullets",
    //                dynamicBullets: true,
    //                clickable: true,
    //              }}
    //              autoplay={{ delay: 3000 }}
    //              onBeforeInit={(swiper) => {
    //                swiper.params.pagination.el =
    //                  testimonialPaginationRef.current;
    //              }}
    //              className="testimonial-slider mx-auto max-w-[420px] cursor-pointer lg:max-w-[480px]"
    //            >
    //              {testimonial.list.map((item, index) => (
    //                <SwiperSlide
    //                  className="text-center"
    //                  key={"testimonial-" + index}
    //                >
    //                  <div className="px-8 py-6 sm:py-12 md:px-10 lg:px-20 xl:px-12 bg-gradient-to-t from-[#0F2121] to-[#1A3A3A] min-h-[400px] shadow-md">
    //                    <TbQuote className="mx-auto rotate-180 text-5xl text-[#D19F6B] sm:text-6xl lg:text-8xl" />
    //                    {markdownify(
    //                      item.content,
    //                      "p",
    //                      "text-[17px] lg:text-lg text-[#D19F6B] mt-4 md:mt-5 xl:mt-8",
    //                    )}
    //                  </div>
    //                  <div className="mt-7 inline-block rounded-md p-7 shadow-lg md:mt-5 lg:mt-8 xl:mt-5">
    //                    <ImageFallback
    //                      className="mx-auto rounded-full border border-custom-blue-dark"
    //                      src={item.avatar}
    //                      width={90}
    //                      height={90}
    //                      priority={true}
    //                      alt={item.author}
    //                    />
    //                    <h6 className="text-custom-blue-dark">{item.author}</h6>
    //                    <p className="text-custom-blue-light">
    //                      {item.profession}
    //                    </p>
    //                  </div>
    //                </SwiperSlide>
    //              ))}
    //            </Swiper>
    //            <div className="relative h-8">
    //              <div
    //                className="pagination absolute left-1/2 -translate-x-1/2 text-custom-blue"
    //                ref={testimonialPaginationRef}
    //              ></div>
    //            </div>
    //          </div>
    //          <div className="hidden lg:col-3 xl:col-4 lg:block">
    //            <ImageFallback
    //              src="/images/testimonials-02.png"
    //              width={455}
    //              height={522}
    //              alt="testimonials"
    //              className="rounded-lg border border-custom-blue-dark"
    //            />
    //          </div>
    //        </div>
    //      </div>
    //    </div>
    //  </div>
    //</section>
  );
};

export default Testimonial;
