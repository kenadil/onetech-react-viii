import { useContext } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";

const max_value = 36;
const min_value = 3;

const PeriodSlider = () => {
  const { duration, handleDurationChange } = useContext(LoanContext);
  const valuable = "месяцев";
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
          { value: 5.25, label: "3 месяцев" },
          { value: 33.5, label: "36 месяцев" },
        ]}
      />
      <p className="slider-selection">{`${duration} ${valuable}`}</p>
    </FlexBox>
  );
};

export default PeriodSlider;
