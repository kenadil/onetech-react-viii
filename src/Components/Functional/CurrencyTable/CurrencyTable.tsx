import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import CurrencyRow from "./CurrencyRow";

type CurrencyRowType = {
  icon?: string;
  name: string;
  currencyType: string;
};

const CurrencyTable = () => {
  const currencyTable: CurrencyRowType[] = [
    { name: "USD", icon: "/images/icons/usd.svg", currencyType: "USD_KZT" },
    { name: "EUR", icon: "/images/icons/eur.svg", currencyType: "EUR_KZT" },
    { name: "RUB", icon: "/images/icons/rub.svg", currencyType: "RUB_KZT" },
    { name: "GBP", icon: "/images/icons/gbp.svg", currencyType: "GBP_KZT" },
  ];
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="right">&nbsp;</TableCell>
          <TableCell align="right">&nbsp;</TableCell>
          <TableCell align="right" className="table-header">
            Покупка
          </TableCell>
          <TableCell align="right" className="table-header">
            Продажа
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {currencyTable.map((row, index) => (
          <CurrencyRow
            name={row.name}
            icon={row.icon}
            isGray={index % 2 === 0}
            currencyType={row.currencyType}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default CurrencyTable;
