import React, { useContext } from "react";
import LoanContext from "../../../../utils/Context/Context";
import { useWindowSize } from "../../../../utils/Hooks/useWindowsSize";
import {
  ExpressInputContainer,
  InlineBlockContainer,
  InputGridContainer,
} from "../../../../utils/Styled/main";
const max = 10000000;
const min = 10000;
const ExpressInput = () => {
  const { amount, handleAmountChange } = useContext(LoanContext);
  const handleFirstValueChange = (e: any) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (handleAmountChange) {
      if (onlyNums.length < 10) {
        const comparedNums =
          parseInt(onlyNums) >= max ? max : parseInt(onlyNums);
        handleAmountChange(e, comparedNums || 0);
      } else if (onlyNums.length === 10) {
        const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
        handleAmountChange(e, parseInt(number) || 0);
      }
    }
  };
  const handleBlurChange = (e: any) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (handleAmountChange) {
      const number = parseInt(onlyNums);
      handleAmountChange(e, number < min ? min : number);
    }
  };
  const handleButtonIncrease = (e: React.MouseEvent<HTMLElement>) => {
    e.persist();
    if (handleAmountChange) {
      const result = typeof amount === "number" ? amount + min : min;
      handleAmountChange(e.nativeEvent, result >= max ? max : result);
    }
  };
  const handleButtonDecrease = (e: React.MouseEvent<HTMLElement>) => {
    e.persist();
    if (handleAmountChange) {
      const result = typeof amount === "number" ? amount - min : min;

      handleAmountChange(e.nativeEvent, result <= min ? min : result);
    }
  };
  const { width } = useWindowSize();
  return (
    <>
      {width && width > 480 ? (
        <InlineBlockContainer>
          <ExpressInputContainer
            value={`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
            onBlur={handleBlurChange}
            onChange={handleFirstValueChange}
          />
          <div className="currency-symbol">
            <span>₸</span>
          </div>
        </InlineBlockContainer>
      ) : (
        <InputGridContainer>
          <button className="decrease" onClick={handleButtonDecrease}>
            -
          </button>
          <InlineBlockContainer>
            <ExpressInputContainer
              onBlur={handleBlurChange}
              value={`${amount
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
              onChange={handleFirstValueChange}
            />
          </InlineBlockContainer>
          <button className="increase" onClick={handleButtonIncrease}>
            +
          </button>
        </InputGridContainer>
      )}
    </>
  );
};
export default ExpressInput;
