import { useState } from "react";
import LoanContext from "../../utils/Context/Context";
import { Container, ExpressContainer, Title } from "../../utils/Styled/main";
import ExpressCalculator from "../Functional/Calculator/ExpressCalculator/ExpressCalculator";

const Express = () => {
  const [amount, setAmount] = useState<
    number | string | Array<number | string>
  >(1500000);

  const [duration, setDuration] = useState<
    number | string | Array<number | string>
  >(6);

  const [discountCheck, setDiscountCheck] = useState<boolean>(false);

  const handleAmountChange = (event: Event, newValue: number | number[]) => {
    setAmount(newValue);
  };

  const handleDurationChange = (
    event: Event | React.MouseEvent<HTMLButtonElement, MouseEvent> | undefined,
    newValue: number | number[]
  ) => {
    setDuration(newValue);
  };

  const handleCheckDiscount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountCheck(event.target.checked);
  };
  return (
    <LoanContext.Provider
      value={{
        amount,
        duration,
        discountCheck,
        handleAmountChange,
        handleDurationChange,
        handleCheckDiscount,
      }}
    >
      <ExpressContainer>
        <Container>
          <div className="inner">
            <Title fontSize="1.5rem" padding="0 0 25px">
              Рассчитать Экспресс-кредит
            </Title>
            <ExpressCalculator />
          </div>
        </Container>
      </ExpressContainer>
    </LoanContext.Provider>
  );
};

export default Express;
