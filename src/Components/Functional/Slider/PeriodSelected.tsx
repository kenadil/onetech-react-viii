import { useContext, useEffect, useState } from "react";
import LoanContext from "../../../utils/Context/Context";

type PeriodSelectedProps = {
  selected?: boolean;
};

const PeriodSelected = ({ selected = false }: PeriodSelectedProps) => {
  const { duration } = useContext(LoanContext);

  let years: number = Math.floor(
      typeof duration === "number" ? duration / 12 : 0
    ),
    months = typeof duration === "number" ? duration % 12 : 0;
  const [yearValue, setYearValue] = useState("");
  useEffect(() => {
    const years: number = Math.floor(
      typeof duration === "number" ? duration / 12 : 0
    );
    if (years >= 5) {
      setYearValue("лет");
    } else {
      const tempYears = years % 10;
      if (tempYears === 1) {
        setYearValue("год");
      } else if (tempYears >= 2 && tempYears <= 4) {
        setYearValue("года");
      } else {
        setYearValue("лет");
      }
    }
  }, [duration]);
  return (
    <p className={`slider-selection ${selected ? "selected" : ""}`}>{`${
      years > 0 ? `${years} ${yearValue}` : ""
    } ${months > 0 ? `${months} месяцев` : ""} `}</p>
  );
};

export default PeriodSelected;
