import {
  Container,
  FlexBox,
  Help,
  InfoCard,
  Title,
} from "../../utils/Styled/main";

const TextCards = () => {
  return (
    <Help>
      <Container>
        <div className="inner">
          <FlexBox className="jscsp">
            <InfoCard>
              <img src="/images/icons/help.svg" alt="help" />
              <Title fontSize="1.125rem">
                Как проверить, наложен ли на счет арест/ПТП?
              </Title>
              <p>
                Информацию о том, наложен ли арест на ваш счёт вы можете узнать:
                - на сайте Министерства юстиции РК в реестре должников по
                исполнительным производствам; - в личном кабинете на портале
                электронного правительства e-gov.kz.
              </p>
            </InfoCard>
            <InfoCard>
              <img src="/images/icons/help.svg" alt="help" />
              <Title fontSize="1.125rem">
                Где посмотреть выписку по карте?
              </Title>
              <p>
                Информацию о том, наложен ли арест на ваш счёт вы можете узнать:
                - на сайте Министерства юстиции РК в реестре должников по
                исполнительным производствам; - в личном кабинете на портале
                электронного правительства e-gov.kz.
              </p>
            </InfoCard>
            <InfoCard>
              <img src="/images/icons/help.svg" alt="help" />
              <Title fontSize="1.125rem">Что такое CVC2/CVV2?</Title>
              <p>
                CVC2/CVV2 — это трехзначный код, указанный на оборотной стороне
                карты, на панели для подписи.
              </p>
            </InfoCard>
          </FlexBox>
        </div>
      </Container>
    </Help>
  );
};

export default TextCards;
