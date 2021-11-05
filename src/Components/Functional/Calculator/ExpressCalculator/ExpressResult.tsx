import { useContext } from "react";
import LoanContext from "../../../../utils/Context/Context";
import { useWindowSize } from "../../../../utils/Hooks/useWindowsSize";

const breakLine = "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0";

const ExpressResult = () => {
  const size = useWindowSize();
  const { amount, duration, discountCheck } = useContext(LoanContext);

  const resultAmount =
    typeof amount === "number" && typeof duration === "number"
      ? Math.round(
          amount / duration +
            (amount / duration) * (discountCheck ? 0.1499 : 0.1699 + 0.217)
        )
      : 0;

  return (
    <div className="express-result">
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
            {!discountCheck ? "16.99% " : "14.99%"}
            {size.width && size.width < 640 && resultAmount >= 1000000
              ? breakLine
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExpressResult;
