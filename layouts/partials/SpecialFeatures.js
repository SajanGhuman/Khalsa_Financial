import ImageFallback from "../../layouts/components/ImageFallback";

const SpecialFeatures = ({ speciality }) => {
  return (
    <section className="section pt-0 mt-0">
      <div className="container">
        <div className="row items-center justify-center">
          <div className="animate lg:col-6 lg:order-2">
            <ImageFallback
              className="mx-auto"
              src={speciality.primary.image}
              width={575}
              height={511}
              alt="primary speciality"
            />
          </div>
          <div className="animate lg:col-5 lg:order-1">
            <p>Why Choose Us</p>
            <h2 className="mt-4 section-title bar-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </h2>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
        <div className="row items-center">
          <div className="animate lg:col-6">
            <ImageFallback
              className="mx-auto"
              src={speciality.secondary.image}
              width={575}
              height={511}
              alt="secondary speciality"
            />
          </div>
          <div className="animate lg:col-5">
            <p>Lorem Ipsum is simply ypesetting</p>
            <h2 className="mt-4 section-title bar-left">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </h2>
            <p className="mt-10">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialFeatures;
