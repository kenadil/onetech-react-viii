import {
  Condition,
  ConditionsInfo,
  Container,
  PlainText,
  FlexBox,
  Title,
} from "../../utils/Styled/main";

const Eyecatcher = () => {
  const data = [
    { iconUrl: "/images/icons/charity.svg", text: "До 7 000 000 ₸" },
    { iconUrl: "/images/icons/calendar.svg", text: "До 5 лет" },
    { iconUrl: "/images/icons/procents.svg", text: "От 7% годовых" },
  ];
  return (
    <ConditionsInfo>
      <Container>
        <div className="inner">
          <Title fontSize="1.5rem">Получить кредит на выгодных условиях</Title>
          <FlexBox className="jscc">
            {data.map((d) => (
              <Condition background={d.iconUrl}>{d.text}</Condition>
            ))}
          </FlexBox>

          <PlainText color="#737373" padding="0 65px" fontSize=".875rem">
            Рассчитаем займ с минимальной ставкой в тот же день и сразу сообщим
            о решении
          </PlainText>
        </div>
      </Container>
    </ConditionsInfo>
  );
};

export default Eyecatcher;
