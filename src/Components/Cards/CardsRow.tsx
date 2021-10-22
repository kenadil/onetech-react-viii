import { FlexBox } from "../../utils/Styled/main";
import ForteCard, { ForteCardProps } from "./ForteCard";

type CardsRowProps = {
  cards: ForteCardProps[];
};

const CardsRow = ({ cards }: CardsRowProps) => {
  return (
    <FlexBox className="jscsp">
      {cards.map((card, index) => (
        <ForteCard
          url={card.url}
          name={card.name}
          price={card.price}
          key={index}
        />
      ))}
    </FlexBox>
  );
};

export default CardsRow;
