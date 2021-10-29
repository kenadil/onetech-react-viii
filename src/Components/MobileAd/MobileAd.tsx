import {
  Container,
  FlexBox,
  PageLink,
  PhoneAd,
  Title,
} from "../../utils/Styled/main";

const MobileAd = () => {
  return (
    <PhoneAd>
      <Container>
        <div className="inner">
          <FlexBox className="jscsp">
            <div className="phone-ad-text">
              <div className="phone-ad-header">
                <Title fontSize="1.25rem">
                  Попробуйте мобильное приложение Forte
                </Title>
                <ul>
                  <li>Оплата платежей</li>
                  <li>Денежные переводы</li>
                  <li>Управление лимитами</li>
                </ul>
              </div>
              <div className="jsccp apps-container">
                <PageLink>
                  <img src="/images/icons/appstore.png" alt="appstore" />
                </PageLink>
                <PageLink>
                  <img src="/images/icons/googleplay.png" alt="appstore" />
                </PageLink>
              </div>
            </div>
            <div className="phone-ad-image">
              <img src="/images/icons/iphone.png" alt="phone.png" />
            </div>
          </FlexBox>
        </div>
      </Container>
    </PhoneAd>
  );
};

export default MobileAd;
