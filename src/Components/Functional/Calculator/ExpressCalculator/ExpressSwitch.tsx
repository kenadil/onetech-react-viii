import { useContext } from "react";
import LoanContext from "../../../../utils/Context/Context";
import {
  ExpressSwitchContainer,
  IncomeSwitch,
} from "../../../../utils/Styled/main";
import { AntSwitch } from "../../../../utils/Styled/mui";

const ExpressSwitch = () => {
  const { discountCheck, handleCheckDiscount } = useContext(LoanContext);
  return (
    <ExpressSwitchContainer>
      <IncomeSwitch
        control={
          <AntSwitch checked={discountCheck} onChange={handleCheckDiscount} />
        }
        label="Я получаю зарплату по карте Forte Bank"
      />
    </ExpressSwitchContainer>
  );
};

export default ExpressSwitch;
