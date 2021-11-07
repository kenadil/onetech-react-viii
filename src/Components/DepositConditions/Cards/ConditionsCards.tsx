import { FlexBox, Title } from "../../../utils/Styled/main";
import ConditionsCard from "./ConditionsCard";

type ConditionsCardRow = {
  title: string;
  text: string;
};

export type ConditionsCardProps = {
  title: React.ReactNode;
  rows: ConditionsCardRow[];
};

const ConditionsCards = () => {
  const cards: ConditionsCardProps[] = [
    {
      title: (
        <Title fontSize="1.25rem">
          Минимальная ставка по кредиту <br />с комиссиями
        </Title>
      ),
      rows: [
        {
          title: "Сумма",
          text: "от 100 000 до 7 000 000 тенге",
        },
        { title: "Ставки вознаграждения:", text: "от 7% (ГЭСВ от 7,3%)" },
        { title: "Срок:", text: "до 5 лет" },
        {
          title: "Комиссия за организацию займа:",
          text: "от 2,25%",
        },
      ],
    },
    {
      title: (
        <Title fontSize="1.25rem">
          Стандартная ставка по кредиту <br />
          без комиссий
        </Title>
      ),
      rows: [
        {
          title: "Сумма",
          text: "от 100 000 до 7 000 000 тенге",
        },
        { title: "Ставки вознаграждения:", text: "от 21,99% (ГЭСВ от 24,4%)" },
        { title: "Срок:", text: "до 5 лет" },
        {
          title: "Комиссия за организацию займа:",
          text: "от 0%",
        },
      ],
    },
  ];
  return (
    <FlexBox className="jscsp">
      {cards.map((card, index) => (
        <ConditionsCard title={card.title} rows={card.rows} key={index} />
      ))}
    </FlexBox>
  );
};

export default ConditionsCards;
