import {
  ConditionsCardBody,
  ConditionsCardHeader,
  ConditionsCardItem,
} from "../../../utils/Styled/main";
import { ConditionsCardProps } from "./ConditionsCards";
import ConditionsRow from "./ConditionsRow";

const ConditionsCard = ({ title, rows }: ConditionsCardProps) => {
  return (
    <ConditionsCardItem>
      <ConditionsCardHeader>{title}</ConditionsCardHeader>
      <ConditionsCardBody>
        {rows.map((row, index) => (
          <ConditionsRow title={row.title} text={row.text} key={index} />
        ))}
        <ConditionsRow
          title={"Комиссия за выдачу наличных:"}
          text={
            <>
              По <span>тарифам</span> платежных карточек для физических лиц
            </>
          }
        />
      </ConditionsCardBody>
    </ConditionsCardItem>
  );
};

export default ConditionsCard;
