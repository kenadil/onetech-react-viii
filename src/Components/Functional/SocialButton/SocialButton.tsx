import React from "react";
import { PageLink } from "../../../utils/Styled/main";

type SocialButtonProps = {
  url: string;
  text: string;
};

const SocialButton = ({ url, text }: SocialButtonProps) => {
  return (
    <PageLink className="header-social">
      <img src={url} alt={url} />
      <span>{text}</span>
    </PageLink>
  );
};

export default SocialButton;
