import React from "react";
import {
  Checkline,
  CheckStatus,
  Requirement,
  Status,
} from "../../utils/Styled/style";
import { faCheck, faCircle } from "@fortawesome/free-solid-svg-icons";

type CheckFieldProps = {
  checked: boolean;
  requirement: string;
};

const CheckField = ({ checked, requirement }: CheckFieldProps) => {
  return (
    <Checkline>
      <Status>
        <CheckStatus
          icon={!checked ? faCircle : faCheck}
          style={{ fontSize: checked ? 12 : 8 }}
        />
      </Status>
      <Requirement>{requirement} </Requirement>
    </Checkline>
  );
};

export default CheckField;
