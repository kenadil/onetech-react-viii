import { CardContainer, Container, Title } from "../../utils/Styled/main";
import CardCarousel from "../Functional/Carousel/CardCarousel.tsx/CardCarousel";

const Cards = () => {
  return (
    <CardContainer>
      <div className="inner">
        <Container>
          <Title>Forte карты</Title>
        </Container>
        <CardCarousel />
      </div>
    </CardContainer>
  );
};

export default Cards;
