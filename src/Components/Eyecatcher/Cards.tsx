import { Carousel } from "react-responsive-carousel";
import { useWindowSize } from "../../utils/Hooks/useWindowsSize";
import {
  EyecatcherCards,
  Title,
  Container,
  FlexBox,
  Card,
  PlainText,
} from "../../utils/Styled/main";

const Cards = () => {
  const { width } = useWindowSize();
  return (
    <EyecatcherCards>
      <Container>
        <Title fontSize={width && width > 480 ? "1.875rem" : "1.5rem"}>
          Кредит выдаём гражданам Казахстана
        </Title>
        {width && width > 480 ? (
          <FlexBox className="jscsp">
            <Card>
              <PlainText fontWeight="500">Пол</PlainText>
              <PlainText color="#737373">Мужчины/Женщины</PlainText>
            </Card>
            <Card>
              <PlainText fontWeight="500">Стаж работы</PlainText>
              <PlainText color="#737373">От 6 месяцев</PlainText>
            </Card>
            <Card>
              <PlainText fontWeight="500">Возраст</PlainText>
              <PlainText color="#737373">От 21 года до 63 лет</PlainText>
            </Card>
          </FlexBox>
        ) : (
          <Carousel showArrows={false} showStatus={false} showThumbs={false}>
            <Card>
              <PlainText fontWeight="500">Пол</PlainText>
              <PlainText color="#737373">Мужчины/Женщины</PlainText>
            </Card>
            <Card>
              <PlainText fontWeight="500">Стаж работы</PlainText>
              <PlainText color="#737373">От 6 месяцев</PlainText>
            </Card>
            <Card>
              <PlainText fontWeight="500">Возраст</PlainText>
              <PlainText color="#737373">От 21 года до 63 лет</PlainText>
            </Card>
          </Carousel>
        )}
      </Container>
    </EyecatcherCards>
  );
};

export default Cards;
