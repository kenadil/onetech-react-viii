import { TextField } from "@mui/material";
import { useState } from "react";
import { Converter, ConverterInput, Title } from "../../../utils/Styled/main";
import CurrencyButton from "../CurrencyButton/CurrencyButton";
import CurrencySelector from "../CurrencySelector/CurrencySelector";

const CurrencyConverter = () => {
  const currencies = [
    {
      name: "USD",
      icon: "USD_KZT.svg",
    },
    {
      name: "EUR",
      icon: "EUR_KZT.svg",
    },
    {
      name: "RUB",
      icon: "RUB_KZT.svg",
    },
    {
      name: "GBP",
      icon: "GBP_KZT.svg",
    },
    {
      name: "KZT",
      icon: "KZT.svg",
    },
  ];
  const [firstCurrency, setFirstCurrency] = useState("KZT");
  const [secondCurrency, setSecondCurrency] = useState("USD");
  const handleFirstCurrencyChange = (name: string) => setFirstCurrency(name);
  const handleSecondCurrencyChange = (name: string) => setSecondCurrency(name);

  const [firstValue, setFirstValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);
  const handleFirstValueChange = (e: any) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    if (onlyNums.length < 10) {
      setFirstValue(parseInt(onlyNums) || 0);
    } else if (onlyNums.length === 10) {
      const number = onlyNums.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
      setFirstValue(parseInt(number) || 0);
    }
  };

  const handleConvert = () => {
    const query = firstCurrency + "_" + secondCurrency;
    console.log(query);
    fetch(
      `https://free.currconv.com/api/v7/convert?q=${query}&compact=ultra&apiKey=4739c64b6e5b43aa6d6a`
    )
      .then((response) => response.json())
      .then((data) =>
        setSecondValue(
          Math.round((data[query] * firstValue + Number.EPSILON) * 100) / 100
        )
      )
      .catch((error) => console.log(error));
  };
  return (
    <Converter>
      <Title fontSize="1.25rem">Конвертация валюты</Title>
      <ConverterInput>
        <TextField
          value={firstValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
          onChange={handleFirstValueChange}
          id="standard-basic"
          variant="standard"
          inputProps={{ inputMode: "numeric", pattern: "[1-9]*" }}
        />
        <CurrencySelector
          handleChange={handleFirstCurrencyChange}
          currencies={currencies}
          activeCurrency={firstCurrency}
        />
      </ConverterInput>
      <ConverterInput>
        <TextField
          id="standard-basic"
          variant="standard"
          value={secondValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
        />
        <CurrencySelector
          handleChange={handleSecondCurrencyChange}
          currencies={currencies}
          activeCurrency={secondCurrency}
        />
      </ConverterInput>
      <CurrencyButton handleClick={handleConvert} />
    </Converter>
  );
};

export default CurrencyConverter;
