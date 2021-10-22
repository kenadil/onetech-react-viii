import { useState } from "react";
import LoanContext from "../../utils/Context/Context";
import { Container, LoanContainer, Title } from "../../utils/Styled/main";
import Calculator from "../Calculator/Calculator";

const Loans = () => {
  const [amount, setAmount] = useState<
    number | string | Array<number | string>
  >(150000);

  const [duration, setDuration] = useState<
    number | string | Array<number | string>
  >(6);

  const handleAmountChange = (event: Event, newValue: number | number[]) => {
    setAmount(newValue);
  };

  const handleDurationChange = (event: Event, newValue: number | number[]) => {
    setDuration(newValue);
  };
  return (
    <LoanContext.Provider
      value={{ amount, duration, handleAmountChange, handleDurationChange }}
    >
      <LoanContainer>
        <Container>
          <div className="inner">
            <Title>Кредиты на любые цели</Title>
            <h4 className="loans-description">
              Предварительный расчет не является публичной офертой
            </h4>
            <Calculator />
          </div>
        </Container>
      </LoanContainer>
    </LoanContext.Provider>
  );
};

export default Loans;
