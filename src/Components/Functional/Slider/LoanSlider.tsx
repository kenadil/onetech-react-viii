import { useContext } from "react";
import LoanContext, { defaultValue } from "../../../utils/Context/Context";
import { CalculatorSlider, FlexBox } from "../../../utils/Styled/main";

const LoanSlider = () => {
  const { amount, handleAmountChange } = useContext(LoanContext);
  const valuable = "₸";
  return (
    <FlexBox>
      <CalculatorSlider
        value={typeof amount === "number" ? amount : defaultValue.amount}
        min={10000}
        max={1000000}
        aria-label="Small steps"
        step={10000}
        onChange={handleAmountChange}
        valueLabelDisplay="auto"
        marks={[
          { value: 60000, label: "10 000 ₸" },
          { value: 925000, label: "1 000 000 ₸" },
        ]}
      />
      <p className="slider-selection">{`${amount
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ${valuable}`}</p>
    </FlexBox>
  );
};

export default LoanSlider;
