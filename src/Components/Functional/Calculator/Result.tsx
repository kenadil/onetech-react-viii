import { useContext } from "react";
import LoanContext from "../../../utils/Context/Context";

const Result = () => {
  const { amount, duration } = useContext(LoanContext);

  return (
    <div className="inner">
      <div className="month-pay">
        <p className="description">Ежемесячный платеж</p>
        <p className="result">
          {typeof amount === "number" &&
            typeof duration === "number" &&
            Math.round(amount / duration + (amount / duration) * 0.02)
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
          ₸
        </p>
      </div>
      <div className="reward-pay">
        <p className="description">Ставка вознаграждения</p>
        <p className="result">16.99%</p>
      </div>
      <button type="submit">Оформить кредит</button>
    </div>
  );
};

export default Result;
