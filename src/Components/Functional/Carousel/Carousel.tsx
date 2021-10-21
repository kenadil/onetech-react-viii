import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CarouselSlide from "../../CarouselSlide/CarouselSlide";
import { PageLink } from "../../../utils/Styled/main";

const FunctionalCarousel = () => {
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
    <Carousel showThumbs={false} showStatus={false} dynamicHeight infiniteLoop>
      <CarouselSlide
        backgroundUrl="/images/banner/banner1.png"
        content={BannerOne}
      />
      <CarouselSlide
        backgroundUrl="/images/banner/banner2.png"
        content={BannerTwo}
      />
      <CarouselSlide
        backgroundUrl="https://medialeaks.ru/wp-content/uploads/2021/08/imgonline-com-ua-compressed-dwxkaeg19bswpzm-600x337.jpg"
        content={BannerThree}
      />
    </Carousel>
  );
};

export default FunctionalCarousel;
