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
      .then(
        (data) => setCurrency(data[currencyType].toFixed(2))
        // setCurrency(Number(450.23923).toFixed(2))
      )
      .catch(() => setCurrency(Number(0)));
  }, [currencyType]);

  const sell = Number(
    parseFloat(currency) + parseFloat(currency) * 0.019
  ).toFixed(2);
  console.log(sell);
  return (
    <TableRow key={name} className={`currency-row ${isGray ? "gray-row" : ""}`}>
      <TableCell className="currency-icon" scope="row">
        <img src={icon} alt="currency-icon" />
      </TableCell>
      <TableCell className="currency-name" component="th" scope="row">
        {name}
      </TableCell>
      <TableCell className="currency-buy" align="right">
        {currency}
      </TableCell>
      <TableCell className="currency-sell" align="right">
        {sell}
      </TableCell>
    </TableRow>
  );
};

export default CurrencyRow;
