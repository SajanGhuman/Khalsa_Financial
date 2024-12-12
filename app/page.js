import Cta from "../layouts/components/Cta";
import GSAPWrapper from "../layouts/components/GSAPWrapper";
import Features from "../layouts/partials/Features";
import HomeBanner from "../layouts/partials/HomeBanner";
import SeoMeta from "../layouts/partials/SeoMeta";
import SpecialFeatures from "../layouts/partials/SpecialFeatures";
import Testimonial from "../layouts/partials/Testimonial";

const Home = async () => {
  return (
    <GSAPWrapper>
      <SeoMeta title="Home" />
      {/*<Candle />*/}
      <HomeBanner />
      {/*<Event_Banner />*/}
      <Features />
      {/*      <ShortIntro  />*/}
      <SpecialFeatures />
      <Testimonial />
      <Cta />
    </GSAPWrapper>
  );
};

export default Home;
