import { useContext } from "react";
import LoanContext from "../../../../utils/Context/Context";
import { ExpressInputContainer } from "../../../../utils/Styled/main";
const max = 10000000;
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
    console.log(onlyNums.length === 5);
  };
  return (
    <>
      <div>
        <ExpressInputContainer
          value={`${amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}`}
          onChange={handleFirstValueChange}
        ></ExpressInputContainer>
        <div className="currency-symbol">
          <span>₸</span>
        </div>
      </div>
    </>
  );
};
export default ExpressInput;
