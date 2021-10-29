import { useState } from "react";
import { useWindowSize } from "../../utils/Hooks/useWindowsSize";
import { PageLink, Title } from "../../utils/Styled/main";
import { FooterItemProps } from "./Footer";

const FooterItem = ({ name, links, bigIndex }: FooterItemProps) => {
  const size = useWindowSize();
  const [expanded, setExpanded] = useState<boolean>(false);
  return (
    <div
      className={`footer-item ${
        size.width && size.width < 480 && expanded ? "" : "hidden"
      }`}
    >
      <Title onClick={() => setExpanded(!expanded)} fontSize="1rem">
        {name}
      </Title>
      <div className={`link-container`}>
        {links.map((l, index) => (
          <PageLink
            className={bigIndex && bigIndex === index ? "big-link" : ""}
            key={index}
          >
            {l}
          </PageLink>
        ))}
      </div>
    </div>
  );
};

export default FooterItem;
