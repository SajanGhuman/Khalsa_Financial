import ImageFallback from "../../layouts/components/ImageFallback";

const SpecialFeatures = () => {
  return (
    <section className="section pt-0 mt-0">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={""}
              width={575}
              height={511}
              alt="‎"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p className="text-primary font-bold">Why Choose Us</p>
            <h2 className="mt-4 section-title bar-left">
              At Khalsa Financial, we believe in empowering you with the tools,
              knowledge, and confidence to achieve financial independence.
            </h2>
            <p className="mt-10 text-[#674F04]">
              Our personalized approach ensures that every plan aligns with your
              unique goals. We prioritize transparency, trust, and measurable
              results in our journey with you.
            </p>
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src={""}
              width={575}
              height={511}
              alt="‎"
            />
          </div>
          <div className="animate lg:col-5">
            <p className="text-primary font-bold">Comprehensive Solutions</p>
            <h2 className="mt-4 section-title bar-left">
              Tailored Strategies for Every Stage of Life
            </h2>
            <p className="mt-10 text-[#674F04]">
              We offer a wide range of financial solutions, including retirement
              planning, investment strategies, debt management, and business
              funding. No matter where you are in life, we help you build a
              secure and prosperous future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
