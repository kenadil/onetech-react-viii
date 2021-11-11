import {
  QAContainer,
  Container,
  Title,
  PlainText,
} from "../../utils/Styled/main";
import Collapsibles, {
  CollapsiblesProps,
} from "../Functional/Advantages/Collapsibles";

const QA = () => {
  const icon = "/images/icons/union.svg";
  const activatedIcon = "/images/icons/line.svg";
  const data: CollapsiblesProps[] = [
    {
      q: "Переоформить кредит на другого человека?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Что необходимо для выпуска карты?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Отказаться от кредита?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Получить отсрочку по кредиту?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Получить отсрочку по кредиту?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Узнать номер кредитного договора?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Узнать о поступлении платежа по кредиту?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Заплатить за кредит другого человека?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
    {
      q: "Погасить досрочно без штрафов и комиссий?",
      a: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum non iure itaque assumenda perspiiatis sunt dicta suscipit quibusdam magniquas sint, vel culpa pariatur incidunt quo hic, sed ut officiis!",
    },
  ];
  return (
    <QAContainer>
      <Container>
        <div className="inner">
          <Title>Частые вопросы про кредит</Title>
          <Collapsibles data={data} icon={icon} activatedIcon={activatedIcon} />
          <PlainText fontSize="0.75rem" padding="32px 0 0">
            Если не нашли ответа на свой вопрос, позвоните на <span>7575</span>{" "}
            или или напишите на электронный адрес{" "}
            <span>callcenter@forte.bank</span>
          </PlainText>
        </div>
      </Container>
    </QAContainer>
  );
};

export default QA;
