import { useContext, useEffect, useState } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";

const max_value = 12 * 5;
const min_value = 3;

const PeriodSlider = () => {
  const { duration, handleDurationChange } = useContext(LoanContext);

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
    <FlexBox>
      <CalculatorSlider
        value={typeof duration === "number" ? duration : defaultValue.amount}
        min={min_value}
        max={max_value}
        aria-label="Small steps"
        step={3}
        onChange={handleDurationChange}
        valueLabelDisplay="auto"
        marks={[
          { value: 8.25, label: "3 месяцев" },
          { value: 57.5, label: "5 лет" },
        ]}
      />
      <p className="slider-selection">{`${
        years > 0 ? `${years} ${yearValue}` : ""
      } ${months > 0 ? `${months} месяцев` : ""} `}</p>
    </FlexBox>
  );
};

export default PeriodSlider;
