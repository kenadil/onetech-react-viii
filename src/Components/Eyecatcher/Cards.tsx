import {
  EyecatcherCards,
  Title,
  Container,
  FlexBox,
  Card,
  PlainText,
} from "../../utils/Styled/main";

const Cards = () => {
  return (
    <EyecatcherCards>
      <Container>
        <Title>Кредит выдаём гражданам Казахстана</Title>
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
      </Container>
    </EyecatcherCards>
  );
};

export default Cards;
