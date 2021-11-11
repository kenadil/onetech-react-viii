import { useWindowSize } from "../../../../utils/Hooks/useWindowsSize";
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

const max = "10 000 000";
const min = "10 000";
const ExpressCalculator = () => {
  const size = useWindowSize();
  return (
    <ExpressCalculatorContainer>
      <FlexBox className="jscsp filled">
        <Title fontSize="1rem" fontWeight="400">
          Сумма кредита
        </Title>
        <ExpressInput />
        {size.width && size.width > 480 ? (
          ""
        ) : (
          <PlainText color="#737373" fontSize=".75rem" padding="12px 0 28px">
            {" "}
            {min} ₸ – {max} ₸{" "}
          </PlainText>
        )}
      </FlexBox>
      {size.width && size.width > 480 ? <LoanSlider /> : ""}
      <Title
        textAlign="left"
        fontSize="1rem"
        fontWeight="400"
        padding="40px 0 24px"
      >
        Срок кредита
      </Title>
      <ExpressPeriod />
      {size.width && size.width > 480 ? (
        <PlainText
          textAlign="left"
          padding="24px 0 0"
          color="#737373"
          fontSize="0.75rem"
        >
          Срок в месяцах
        </PlainText>
      ) : (
        <PlainText
          textAlign="center"
          padding="4px 0 0"
          color="#737373"
          fontSize="0.75rem"
        >
          Срок в месяцах
        </PlainText>
      )}
      <hr />
      <FlexBox className="jscsp ">
        <ExpressResult />
        <ExpressSwitch />
      </FlexBox>
      <ExpressForm />
    </ExpressCalculatorContainer>
  );
};

export default ExpressCalculator;
