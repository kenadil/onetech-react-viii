import {
  Container,
  FlexBox,
  InfoCard,
  LargeGapText,
  Services,
  Title,
} from "../../utils/Styled/main";

const StaticCards = () => {
  return (
    <Services>
      <Container>
        <div className="inner">
          <FlexBox className="jscsp main-flex">
            <InfoCard>
              <FlexBox className="jscsp">
                <div className="text">
                  <Title fontSize="1.5rem">
                    Перевод с карты на любую карту мира
                  </Title>
                  <LargeGapText></LargeGapText>
                  <div className="btn-container white-btn">
                    <button>Подробнее</button>
                  </div>
                </div>
                <div className="image">
                  <img src="/images/exchanges/exchanges.png" alt="" />
                </div>
              </FlexBox>
            </InfoCard>
            <InfoCard className="purchases">
              <div className="text">
                <Title fontSize="1.5rem">
                  Оплата платежей <br /> online
                </Title>
                <p>
                  Оплата штрафов, коммунальных <br /> услуг, услуг сотовых
                  операторов и <br /> многое другое
                </p>
                <div className="btn-container black-btn">
                  <button>Произвести платеж</button>
                </div>
              </div>
            </InfoCard>
          </FlexBox>
        </div>
      </Container>
    </Services>
  );
};

export default StaticCards;
