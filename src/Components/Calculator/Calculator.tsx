import { useContext } from "react";
import LoanContext from "../../utils/Context/Context";
import {
  CalculatorContainer,
  CalculatorForm,
  FlexBox,
  IncomeSwitch,
  SwitchContainer,
} from "../../utils/Styled/main";
import { AntSwitch } from "../../utils/Styled/mui";
import Result from "../Functional/Calculator/Result";
import LoanSlider from "../Functional/Slider/LoanSlider";
import PeriodSelected from "../Functional/Slider/PeriodSelected";
import PeriodSlider from "../Functional/Slider/PeriodSlider";

const Calculator = () => {
  const { discountCheck, handleCheckDiscount, amount } =
    useContext(LoanContext);
  return (
    <CalculatorContainer>
      <CalculatorForm>
        <FlexBox className="jscfs">
          <div className="calculator-container">
            <div className="calculator-box">
              <FlexBox className="jscsp rcl">
                <h4>Сколько вам нужно?</h4>
                <p className="slider-selection">{`${amount
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₸`}</p>
              </FlexBox>
              <LoanSlider />
            </div>
            <div className="calculator-box period">
              <FlexBox className="jscsp rcl">
                <h4>Срок кредитования</h4>
                <PeriodSelected />
              </FlexBox>
              <PeriodSlider />
            </div>
            <SwitchContainer>
              <IncomeSwitch
                control={
                  <AntSwitch
                    checked={discountCheck}
                    onChange={handleCheckDiscount}
                  />
                }
                label="Я получаю зарплату по карте Forte Bank"
              />
              <p className="calculator-label">
                Для точного расчета необходимо оставить заявку
              </p>
            </SwitchContainer>
          </div>
          <div className="calculator-result">
            <Result />
          </div>
        </FlexBox>
      </CalculatorForm>
    </CalculatorContainer>
  );
};

export default Calculator;
