import { useContext } from "react";
import LoanContext from "../../../utils/Context/Context";
import { useWindowSize } from "../../../utils/Hooks/useWindowsSize";
import {
  IncomeSwitch,
  SwitchContainerMobile,
} from "../../../utils/Styled/main";
import { AntSwitch } from "../../../utils/Styled/mui";

const breakLine = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

const Result = () => {
  const size = useWindowSize();
  const { amount, duration } = useContext(LoanContext);

  const { discountCheck, handleCheckDiscount } = useContext(LoanContext);
  const resultAmount =
    typeof amount === "number" && typeof duration === "number"
      ? Math.round(amount / duration + (amount / duration) * 0.02)
      : 0;

  return (
    <div className="inner">
      <div className="month-pay">
        <p className="description">Ежемесячный платеж</p>
        <p className="result">
          {resultAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸
          {size.width && size.width < 640 && resultAmount >= 1000000
            ? breakLine
            : ""}
        </p>
      </div>
      <div className="reward-pay">
        <p className="description">Ставка вознаграждения</p>
        <p className="result">
          {!discountCheck ? "16.99% " : "9.99%"}
          {size.width && size.width < 640 && resultAmount >= 1000000
            ? breakLine
            : ""}
        </p>
      </div>
      <SwitchContainerMobile>
        <IncomeSwitch
          control={
            <AntSwitch checked={discountCheck} onChange={handleCheckDiscount} />
          }
          label="Я получаю зарплату по карте Forte Bank"
        />
        <p className="calculator-label">
          Для точного расчета необходимо оставить заявку
        </p>
      </SwitchContainerMobile>
      <button type="submit">Оформить кредит</button>
    </div>
  );
};

export default Result;
