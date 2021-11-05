import { Collapse } from "@mui/material";
import { useState } from "react";
import { PlainText } from "../../../utils/Styled/main";

type CollapsibleProps = {
  q: string;
  a: string;
  icon: string;
};

const Collapsible = ({ q, a, icon }: CollapsibleProps) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => setChecked((prev) => !prev);
  return (
    <div onClick={handleClick}>
      <PlainText
        fontWeight={"500"}
        padding={"25px 20px"}
        activated={checked}
        icon={icon}
      >
        {q}
      </PlainText>
      <Collapse in={checked}>{a}</Collapse>
    </div>
  );
};

export default Collapsible;
