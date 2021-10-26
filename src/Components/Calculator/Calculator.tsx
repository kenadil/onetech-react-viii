import { useContext } from "react";
import LoanContext from "../../utils/Context/Context";
import {
  CalculatorContainer,
  CalculatorForm,
  FlexBox,
  IncomeSwitch,
} from "../../utils/Styled/main";
import { AntSwitch } from "../../utils/Styled/mui";
import Result from "../Functional/Calculator/Result";
import LoanSlider from "../Functional/Slider/LoanSlider";
import PeriodSlider from "../Functional/Slider/PeriodSlider";

const Calculator = () => {
  const { discountCheck, handleCheckDiscount } = useContext(LoanContext);
  return (
    <CalculatorContainer>
      <CalculatorForm>
        <FlexBox className="jscfs">
          <div className="calculator-container">
            <div className="calculator-box">
              <h4>Сколько вам нужно?</h4>
              <LoanSlider />
            </div>
            <div className="calculator-box period">
              <h4>Срок кредитования</h4>
              <PeriodSlider />
            </div>
            <IncomeSwitch
              control={
                <AntSwitch
                  checked={discountCheck}
                  onChange={handleCheckDiscount}
                />
              }
              label="Я получаю зарплату по карте"
            />
            <p className="calculator-label">
              Для точного расчета необходимо оставить заявку
            </p>
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
