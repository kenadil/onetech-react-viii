import { TableCell, TableRow } from "@mui/material";
import { useState, useEffect } from "react";

type CurrencyRowProps = {
  currencyType: string;
  name: string;
  icon?: string;
  isGray?: boolean;
};

const CurrencyRow = ({
  name,
  currencyType,
  icon = "/images/icons/usd.svg",
  isGray = false,
}: CurrencyRowProps) => {
  const [currency, setCurrency] = useState<any>(0);
  useEffect(() => {
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${currencyType}&compact=ultra&apiKey=4739c64b6e5b43aa6d6a`
    )
      .then((response) => response.json())
      .then((data) => setCurrency(data[currencyType].toFixed(2)))
      .catch(() => setCurrency(Number(0)));
  });
  return (
    <TableRow key={name} className={`currency-row ${isGray ? "gray-row" : ""}`}>
      <TableCell className="currency-icon" scope="row">
        <img src={icon} alt="currency-icon" />
      </TableCell>
      <TableCell className="currency-name" component="th" scope="row">
        {name}
      </TableCell>
      <TableCell className="currency-buy" align="right">
        {currency?.toFixed(2)}
      </TableCell>
      <TableCell className="currency-sell" align="right">
        {(currency + currency * 0.019)?.toFixed(2)}
      </TableCell>
    </TableRow>
  );
};

export default CurrencyRow;
