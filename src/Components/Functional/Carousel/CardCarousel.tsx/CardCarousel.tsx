import React from "react";
import { useWindowSize } from "../../../../utils/Hooks/useWindowsSize";
import CardsRow from "../../../Cards/CardsRow";
import CarouselSlide from "../../../CarouselSlide/CarouselSlide";
import FunctionalCarousel from "../FunctionalCarousel";

const CardCarousel = () => {
  const size = useWindowSize();
  const cards = [
    { url: "/images/cards/classic.png", name: "Classic", price: "300 000 ₸" },

    { url: "/images/cards/gold.png", name: "Gold", price: "500 000 ₸" },

    {
      url: "/images/cards/platinum.png",
      name: "Platinum",
      price: "3 000 000 ₸",
    },
  ];
  return (
    <FunctionalCarousel
      showThumbs={false}
      showStatus={false}
      showArrows={false}
      dynamicHeight
      infiniteLoop
    >
      <CarouselSlide className="card-carousel">
        {
          <CardsRow
            cards={size.width && size.width > 640 ? cards : [cards[0]]}
          />
        }
      </CarouselSlide>
      <CarouselSlide className="card-carousel">
        {
          <CardsRow
            cards={size.width && size.width > 640 ? cards : [cards[1]]}
          />
        }
      </CarouselSlide>
      <CarouselSlide className="card-carousel">
        {
          <CardsRow
            cards={size.width && size.width > 640 ? cards : [cards[2]]}
          />
        }
      </CarouselSlide>
    </FunctionalCarousel>
  );
};

export default CardCarousel;
