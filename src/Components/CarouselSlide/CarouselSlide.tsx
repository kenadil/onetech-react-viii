import { BannerSlide, Container } from "../../utils/Styled/main";

type CarouselSlideProps = {
  backgroundUrl?: string;
  content?: any;
};

const CarouselSlide = ({ backgroundUrl, content }: CarouselSlideProps) => {
  return (
    <BannerSlide background={backgroundUrl}>
      <Container>
        <div className="inner">{content}</div>
      </Container>
    </BannerSlide>
  );
};

export default CarouselSlide;
