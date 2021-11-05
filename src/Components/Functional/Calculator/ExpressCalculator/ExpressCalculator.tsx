import {
  ExpressCalculatorContainer,
  FlexBox,
  PlainText,
  Title,
} from "../../../../utils/Styled/main";
import ExpressForm from "../../ExpressForm/ExpressForm";
import ExpressPeriod from "../../ExpressPeriod/ExpressPeriod";
import LoanSlider from "../../Slider/LoanSlider";
import ExpressInput from "./ExpressInput";
import ExpressResult from "./ExpressResult";
import ExpressSwitch from "./ExpressSwitch";

const ExpressCalculator = () => {
  return (
    <ExpressCalculatorContainer>
      <FlexBox className="jscsp">
        <Title fontSize="1rem" fontWeight="400">
          Сумма кредита
        </Title>
        <ExpressInput />
      </FlexBox>
      <LoanSlider />
      <Title
        textAlign="left"
        fontSize="1rem"
        fontWeight="400"
        padding="40px 0 24px"
      >
        Срок кредита
      </Title>
      <ExpressPeriod />
      <PlainText
        textAlign="left"
        padding="24px 0 0"
        color="#737373"
        fontSize="0.75rem"
      >
        Срок в месяцах
      </PlainText>
      <hr />
      <FlexBox className="jscsp">
        <ExpressResult />
        <ExpressSwitch />
      </FlexBox>
      <ExpressForm />
    </ExpressCalculatorContainer>
  );
};

export default ExpressCalculator;
