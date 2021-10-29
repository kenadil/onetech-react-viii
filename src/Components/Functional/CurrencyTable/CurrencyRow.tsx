import { TableCell, TableRow } from "@mui/material";

type CurrencyRowProps = {
  name: string;
  icon?: string;
  isGray?: boolean;
  value: string | number | undefined;
};

const CurrencyRow = ({
  name,
  icon = "/images/icons/usd.svg",
  isGray = false,
  value,
}: CurrencyRowProps) => {
  const curValue =
    typeof value === "number"
      ? Math.round((value + Number.EPSILON) * 100) / 100
      : 0;
  const sell =
    Math.round((curValue + curValue * 0.019 + Number.EPSILON) * 100) / 100;

  return (
    <TableRow key={name} className={`currency-row ${isGray ? "gray-row" : ""}`}>
      <TableCell className="currency-icon" scope="row">
        <img src={icon} alt="currency-icon" />
      </TableCell>
      <TableCell className="currency-name" component="th" scope="row">
        {name}
      </TableCell>
      <TableCell className="currency-buy" align="right">
        {value}
      </TableCell>
      <TableCell className="currency-sell" align="right">
        {sell}
      </TableCell>
    </TableRow>
  );
};

export default CurrencyRow;
