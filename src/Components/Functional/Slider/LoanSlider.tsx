import { useContext } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";

const max_value = 10000000;
const min_value = 10000;

const LoanSlider = () => {
  const { amount, handleAmountChange } = useContext(LoanContext);
  const valuable = "₸";
  return (
    <FlexBox>
      <CalculatorSlider
        value={typeof amount === "number" ? amount : defaultValue.amount}
        min={min_value}
        max={max_value}
        aria-label="Small steps"
        step={10000}
        onChange={handleAmountChange}
        valueLabelDisplay="auto"
        marks={[
          { value: min_value, label: "10 000 ₸" },
          { value: max_value, label: "10 000 000 ₸" },
        ]}
      />
      <p className="slider-selection selected">{`${amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${valuable}`}</p>
    </FlexBox>
  );
};

export default LoanSlider;
