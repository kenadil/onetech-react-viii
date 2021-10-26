import React from "react";

interface ILoanContext {
  amount: number | string | Array<number | string>;
  duration: number | string | Array<number | string>;
  discountCheck: boolean;
  handleAmountChange?: (event: Event, newValue: number | number[]) => void;
  handleDurationChange?: (event: Event, newValue: number | number[]) => void;
  handleCheckDiscount?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const defaultValue = {
  amount: 150000,
  duration: 6,
  discountCheck: false,
};

const LoanContext = React.createContext<ILoanContext>(defaultValue);

export default LoanContext;
