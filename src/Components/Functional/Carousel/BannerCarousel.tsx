import React from "react"; // requires a loader
import CarouselSlide from "../../CarouselSlide/CarouselSlide";
import FunctionalCarousel from "./FunctionalCarousel";
import { BannerList } from "../../../utils/types/PaddingProps";

const BannerCarousel = ({ banners }: BannerList) => {
  console.log(banners.length);

  return (
    <FunctionalCarousel
      showThumbs={false}
      showStatus={false}
      showIndicators={banners.length > 1}
      dynamicHeight
      infiniteLoop
    >
      {banners.map((b, index) => (
        <CarouselSlide key={index} backgroundUrl={b.url}>
          {b.children}
        </CarouselSlide>
      ))}
    </FunctionalCarousel>
  );
};

export default BannerCarousel;
