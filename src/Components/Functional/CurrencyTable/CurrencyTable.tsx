import {
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import { useContext } from "react";
import CurrencyContext from "../../../utils/Context/CurrencyContext";
import CurrencyRow from "./CurrencyRow";

const CurrencyTable = () => {
  const currency = useContext(CurrencyContext);
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
        {currency.map((row, index) => (
          <CurrencyRow
            name={row.name}
            icon={row.icon}
            isGray={index % 2 === 0}
            value={row.value}
            key={index}
          />
        ))}
      </TableBody>
    </Table>
  );
};

export default CurrencyTable;
