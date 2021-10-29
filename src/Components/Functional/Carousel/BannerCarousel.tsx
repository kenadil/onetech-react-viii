import React from "react"; // requires a loader
import CarouselSlide from "../../CarouselSlide/CarouselSlide";
import {
  BannerDescription,
  FlexBox,
  PageLink,
  VisualImage,
} from "../../../utils/Styled/main";
import FunctionalCarousel from "./FunctionalCarousel";

const BannerCarousel = () => {
  const banners = [
    {
      url: "/images/banner/banner1.png",
      children: (
        <FlexBox className="jscsp">
          <div>
            <span>
              <PageLink>Forte</PageLink> - bank
            </span>
            <h3>До 3 000 000 ₸</h3>
            <BannerDescription>Покупки без процентов</BannerDescription>
            <button>Подробнее</button>
          </div>
          <VisualImage src="/images/banner/visual1.png" alt="visual" />
        </FlexBox>
      ),
    },
    {
      url: "/images/banner/banner2.png",
      children: (
        <FlexBox className="jscsp">
          <div>
            <span>
              <PageLink>Forte</PageLink> - bank
            </span>

            <h3>Выигрывайте iPhone 12</h3>
            <BannerDescription>за 1 000 ₸ каждый месяц</BannerDescription>
            <button>Подробнее</button>
          </div>
          <VisualImage src="/images/banner/visual2.png" alt="visual" />
        </FlexBox>
      ),
    },
    {
      url: "https://wallpapercave.com/wp/Wes2iOh.jpg",
      children: (
        <FlexBox className="jscsp">
          <div>
            <span>
              <PageLink>Forte</PageLink> - bank
            </span>

            <h3>Привет</h3>
            <BannerDescription>
              ты черно-белый гуль и любитель финда?
            </BannerDescription>
            <button>Подробнее</button>
          </div>
          <VisualImage src="/images/banner/visual4.png" alt="visual" />
        </FlexBox>
      ),
    },
  ];
  return (
    <FunctionalCarousel
      showThumbs={false}
      showStatus={false}
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
