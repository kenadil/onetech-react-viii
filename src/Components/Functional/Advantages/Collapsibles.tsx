import { CollapsiblesContainer } from "../../../utils/Styled/main";
import Collapsible from "./Collapsible";

export type CollapsiblesProps = {
  q: string;
  a: string;
};
export interface ICollapsibles {
  data: CollapsiblesProps[];
  icon: string;
  activatedIcon?: string;
}

const Collapsibles = ({ data, icon, activatedIcon }: ICollapsibles) => {
  return (
    <CollapsiblesContainer>
      {data.map((d, index) => (
        <Collapsible
          key={index}
          q={d.q}
          a={d.a}
          icon={icon}
          activatedIcon={activatedIcon}
        />
      ))}
    </CollapsiblesContainer>
  );
};

export default Collapsibles;
