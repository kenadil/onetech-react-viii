import { useEffect, useState } from "react";
import CurrencyContext, {
  ICurrency,
} from "../../utils/Context/CurrencyContext";
import {
  Container,
  CurrencyExchange,
  FlexBox,
  Title,
} from "../../utils/Styled/main";
import CurrencyConverter from "../Functional/Converter/CurrencyConverter";
import CurrencyTable from "../Functional/CurrencyTable/CurrencyTable";

export const old_cur: any = {
  USD_KZT: 426.88,
  EUR_KZT: 495.38,
  RUB_KZT: 6.08,
  GBP_KZT: 586.08,
};

const Exchange = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yy = today.getFullYear().toLocaleString().substring(3, 5);

  const [currency, setCurrency] = useState<ICurrency[]>([]);

  const currencies = ["USD_KZT", "EUR_KZT", "RUB_KZT", "GBP_KZT"];
  useEffect(() => {
    currencies.map((cur, index) =>
      fetch(
        `https://free.currconv.com/api/v7/convert?q=${cur}&compact=ultra&apiKey=4739c64b6e5b43aa6d6a`
      )
        .then((response) => response.json())
        .then((data) => {
          let num = data[cur] | old_cur[cur];
          let curData = {
            name: cur.substring(0, 3),
            value: num,
            icon: `/images/icons/${cur}.svg`,
          };
          setCurrency((prevState) => [...prevState, curData]);
        })
        .catch((error) => console.log(error))
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <CurrencyContext.Provider value={currency}>
      <CurrencyExchange>
        <Container>
          <div className="inner">
            <Title>Курсы безналичной конвертации валют</Title>
            <div className="currency-description">
              Курс актуален на {dd + "." + mm + "." + yy}
            </div>
            <FlexBox className="jscsp">
              <CurrencyTable />
              <CurrencyConverter />
            </FlexBox>
          </div>
        </Container>
      </CurrencyExchange>
    </CurrencyContext.Provider>
  );
};

export default Exchange;
