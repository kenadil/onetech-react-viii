import React, { useContext } from "react";
import LoanContext from "../../../utils/Context/Context";
import { PeriodButtons } from "../../../utils/Styled/main";

const ExpressPeriod = () => {
  const { duration, handleDurationChange } = useContext(LoanContext);
  const months = [6, 12, 18, 24, 36, 48, 60];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const el = e.target as HTMLTextAreaElement;
    handleDurationChange &&
      handleDurationChange(e, parseInt(el.innerHTML as string));
  };

  return (
    <PeriodButtons>
      {months.map((month, index) => (
        <button
          className={`${duration === month ? "active" : ""}`}
          value={month}
          key={index}
          onClick={handleClick}
        >
          {month}
        </button>
      ))}
    </PeriodButtons>
  );
};

export default ExpressPeriod;
