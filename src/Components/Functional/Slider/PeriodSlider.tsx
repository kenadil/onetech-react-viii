import { useContext } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";
import PeriodSelected from "./PeriodSelected";

const max_value = 12 * 5;
const min_value = 3;

const PeriodSlider = () => {
  const { duration, handleDurationChange } = useContext(LoanContext);
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
          { value: min_value, label: "3 месяцев" },
          { value: max_value, label: "5 лет" },
        ]}
      />
      <PeriodSelected selected />
    </FlexBox>
  );
};

export default PeriodSlider;
