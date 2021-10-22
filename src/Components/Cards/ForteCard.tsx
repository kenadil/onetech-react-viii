import { Card, PageLink } from "../../utils/Styled/main";

export type ForteCardProps = {
  name?: string;
  price?: string;
  url?: string;
};

const ForteCard = ({ name, price, url }: ForteCardProps) => {
  return (
    <Card className="card">
      <img src={url} alt={url} />
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
