import { CollapsiblesContainer } from "../../../utils/Styled/main";
import Collapsible from "./Collapsible";

const Collapsibles = () => {
  const icon = "/images/icons/arrow.svg";
  const data = [
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
    <CollapsiblesContainer>
      {data.map((d) => (
        <Collapsible q={d.q} a={d.a} icon={icon} />
      ))}
    </CollapsiblesContainer>
  );
};

export default Collapsibles;
