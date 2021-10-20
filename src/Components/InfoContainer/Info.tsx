import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { InfoBorder, InfoFlex, Text } from "../../utils/Styled/style";

type InfoProps = {
  text: any;
};

const Info = ({ text }: InfoProps) => {
  return (
    <InfoBorder>
      <InfoFlex>
        <FontAwesomeIcon size="lg" icon={faExclamationCircle} />
        <Text
          textAlign="left"
          fontSize=".833rem"
          fontWeight="normal"
          color="gray"
        >
          {text}
        </Text>
      </InfoFlex>
    </InfoBorder>
  );
};

export default Info;
