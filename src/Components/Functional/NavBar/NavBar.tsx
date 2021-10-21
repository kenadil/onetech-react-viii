import React, { useState } from "react";
import { PageLink } from "../../../utils/Styled/main";

const NavBar = () => {
  const menuItems = [
    "Банк",
    "Маркет",
    "Mobile",
    "Путешествия",
    "Бизнес",
    "Club",
  ];
  const [active, setActive] = useState(0);
  return (
    <nav>
      {menuItems.map((item, index) => (
        <PageLink
          onClick={() => setActive(index)}
          className={`header-link ${active === index && "active"}`}
          key={index}
        >
          {item}
        </PageLink>
      ))}
    </nav>
  );
};

export default NavBar;
