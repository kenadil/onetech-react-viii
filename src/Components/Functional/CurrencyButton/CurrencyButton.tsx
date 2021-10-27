type CurrencyButtonType = {
  handleClick: () => void;
};

const CurrencyButton = ({ handleClick }: CurrencyButtonType) => {
  return (
    <div className="convert-button">
      <button onClick={handleClick} />
    </div>
  );
};

export default CurrencyButton;
