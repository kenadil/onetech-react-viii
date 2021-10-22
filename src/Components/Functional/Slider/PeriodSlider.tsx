import { useContext } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";

const PeriodSlider = () => {
  const { duration, handleDurationChange } = useContext(LoanContext);
  const valuable = "месяцев";
  return (
    <FlexBox>
      <CalculatorSlider
        value={typeof duration === "number" ? duration : defaultValue.amount}
        min={3}
        max={36}
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
