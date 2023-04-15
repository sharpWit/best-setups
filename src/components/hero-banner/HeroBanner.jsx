import { register } from "swiper/element/bundle";
import SwiperBanner from "../slider/SwiperBanner";

register();

export const HeroBanner = () => {
  return (
    <div>
      {/* slider */}
      <SwiperBanner />
      {/* slider ends */}
    </div>
  );
};
