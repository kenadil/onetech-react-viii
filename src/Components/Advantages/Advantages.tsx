import { AdvantagesContainer, Title, Container } from "../../utils/Styled/main";
import Collapsibles, {
  CollapsiblesProps,
} from "../Functional/Advantages/Collapsibles";

const Advantages = () => {
  const icon = "/images/icons/arrow.svg";
  const data: CollapsiblesProps[] = [
    {
      q: "Без залога и на любые цели",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Доставка денег и документов домой",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Погашение без походов в отделение",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
  ];
  return (
    <AdvantagesContainer>
      <Container>
        <div className="inner">
          <Title fontSize="1.5rem">Преимущества экспресс-кредита</Title>
          <Collapsibles data={data} icon={icon} />
        </div>
      </Container>
    </AdvantagesContainer>
  );
};

export default Advantages;
