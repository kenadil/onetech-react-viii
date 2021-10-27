type CurrencySelectorType = {
  handleChange: (name: string) => void;
  currencies: CurrencyType[];
  activeCurrency: string;
};

type CurrencyType = {
  name: string;
  icon: string;
};

const CurrencySelector = ({
  handleChange,
  currencies,
  activeCurrency,
}: CurrencySelectorType) => {
  return (
    <div className="currency-buttons">
      {currencies.map((c, index) => (
        <img
          className={activeCurrency === c.name ? "selected" : ""}
          src={`/images/icons/${c.icon}`}
          onClick={() => handleChange(c.name)}
          key={index}
          alt="currency-icon"
        />
      ))}
    </div>
  );
};

export default CurrencySelector;
