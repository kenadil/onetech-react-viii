import React from "react"; // requires a loader
import CarouselSlide from "../../CarouselSlide/CarouselSlide";
import { PageLink } from "../../../utils/Styled/main";
import FunctionalCarousel from "./FunctionalCarousel";

const BannerCarousel = () => {
  const BannerOne = (
    <>
      <span>
        <PageLink>Forte</PageLink> - bank
      </span>
      <h3>До 3 000 000 ₸</h3>
      <p>Покупки без процентов</p>
      <button>Подробнее</button>
    </>
  );
  const BannerTwo = (
    <>
      <span>
        <PageLink>Forte</PageLink> - bank
      </span>

      <h3>Выигрывайте iPhone 12</h3>
      <p>за 1 000 ₸ каждый месяц</p>
      <button>Подробнее</button>
    </>
  );
  const BannerThree = (
    <>
      <span>
        <PageLink>Forte</PageLink> - bank
      </span>

      <h3>Хм</h3>
      <p></p>
      <button>мда</button>
    </>
  );
  return (
    <FunctionalCarousel
      showThumbs={false}
      showStatus={false}
      dynamicHeight
      infiniteLoop
    >
      <CarouselSlide backgroundUrl="/images/banner/banner1.png">
        {BannerOne}
      </CarouselSlide>
      <CarouselSlide backgroundUrl="/images/banner/banner2.png">
        {BannerTwo}
      </CarouselSlide>
      <CarouselSlide backgroundUrl="https://medialeaks.ru/wp-content/uploads/2021/08/imgonline-com-ua-compressed-dwxkaeg19bswpzm-600x337.jpg">
        {BannerThree}
      </CarouselSlide>
    </FunctionalCarousel>
  );
};

export default BannerCarousel;
