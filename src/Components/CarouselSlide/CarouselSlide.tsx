import { Slide, Container } from "../../utils/Styled/main";

type CarouselSlideProps = {
  backgroundUrl?: string;
  children?: any;
  className?: string;
};

const CarouselSlide = ({
  backgroundUrl,
  children,
  className = "",
}: CarouselSlideProps) => {
  return (
    <Slide background={backgroundUrl} className={className}>
      <Container>
        <div className="inner">{children}</div>
      </Container>
    </Slide>
  );
};

export default CarouselSlide;
