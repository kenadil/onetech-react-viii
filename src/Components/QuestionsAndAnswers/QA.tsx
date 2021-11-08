import { QAContainer, Container, Title } from "../../utils/Styled/main";
import Collapsibles, {
  CollapsiblesProps,
} from "../Functional/Advantages/Collapsibles";

const QA = () => {
  const icon = "/images/icons/union.svg";
  const activatedIcon = "/images/icons/line.svg";
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
    <QAContainer>
      <Container>
        <div className="inner">
          <Title>Частые вопросы про кредит</Title>
          <Collapsibles data={data} icon={icon} activatedIcon={activatedIcon} />
        </div>
      </Container>
    </QAContainer>
  );
};

export default QA;
