import { useState } from "react";
import { PlainText, CollapseItem } from "../../../utils/Styled/main";

type CollapsibleProps = {
  q: string;
  a: string;
  icon: string;
  activatedIcon?: string;
};

const Collapsible = ({ q, a, icon, activatedIcon }: CollapsibleProps) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => setChecked((prev) => !prev);
  return (
    <div onClick={handleClick}>
      <PlainText
        fontWeight={"500"}
        padding={"25px 20px"}
        activated={checked}
        icon={checked && activatedIcon ? activatedIcon : icon}
      >
        <span>{q}</span>
      </PlainText>
      <CollapseItem in={checked}>{a}</CollapseItem>
    </div>
  );
};

export default Collapsible;
