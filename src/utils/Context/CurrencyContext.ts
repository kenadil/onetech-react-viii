import React from "react";

export interface ICurrency {
  name: string;
  value: number | undefined;
  icon?: string;
  index: number;
}

const CurrencyContext = React.createContext<ICurrency[]>([
  {
    name: "USD_KZT",
    value: 0,
    index: 0,
  },
]);

export default CurrencyContext;
