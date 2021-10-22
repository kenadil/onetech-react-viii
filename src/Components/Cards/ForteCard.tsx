import { useState } from "react";
import { Card, PageLink } from "../../utils/Styled/main";

export type ForteCardProps = {
  name?: string;
  price?: string;
  url?: string;
};

const ForteCard = ({ name, price, url }: ForteCardProps) => {
  const [isOVer, setIsOVer] = useState(false);
  return (
    <Card
      className="card"
      onMouseOver={() => setIsOVer(true)}
      onMouseLeave={() => setIsOVer(false)}
    >
      <div className={`shine-container ${isOVer ? "over" : ""}`}>
        <img src={url} alt={url} />
      </div>
      <div className="forte card-container">
        <h4 className="card-title">{name}</h4>
        <p className="card-price">Выпуск карты бесплатно</p>
        <p className="card-info">
          Снятие до {price} в месяц <br /> в банкоматах Казахстана бесплатно
        </p>
        <p className="card-info">CashBack до 15%</p>
        <PageLink className="card-link">
          <button className="card-button">Заказать карту</button>
        </PageLink>
      </div>
    </Card>
  );
};

export default ForteCard;
