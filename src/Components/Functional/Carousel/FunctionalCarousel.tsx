import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const FunctionalCarousel = ({
  showThumbs,
  showStatus,
  dynamicHeight,
  infiniteLoop,
  showArrows = true,
  children,
}: any) => {
  return (
    <Carousel
      showThumbs={showThumbs}
      showStatus={showStatus}
      dynamicHeight={dynamicHeight}
      showArrows={showArrows}
      infiniteLoop={infiniteLoop}
    >
      {children}
    </Carousel>
  );
};

export default FunctionalCarousel;
