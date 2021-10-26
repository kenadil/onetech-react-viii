import {
  Container,
  CurrencyExchange,
  FlexBox,
  Title,
} from "../../utils/Styled/main";
import CurrencyTable from "../Functional/CurrencyTable/CurrencyTable";

const Exchange = () => {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yy = today.getFullYear().toLocaleString().substring(3, 5);
  return (
    <CurrencyExchange>
      <Container>
        <div className="inner">
          <Title>Курсы безналичной конвертации валют</Title>
          <div className="currency-description">
            Курс актуален на {dd + "." + mm + "." + yy}
          </div>
          <FlexBox className="jscsp">
            <CurrencyTable />
          </FlexBox>
        </div>
      </Container>
    </CurrencyExchange>
  );
};

export default Exchange;
