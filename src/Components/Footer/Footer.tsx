import "font-awesome/css/font-awesome.min.css";
import {
  Container,
  FlexBox,
  PageFooter,
  PageLink,
  Title,
} from "../../utils/Styled/main";

const Footer = () => {
  return (
    <PageFooter>
      <Container>
        <div className="inner">
          <div className="footer-upper">
            <FlexBox className="jscsp">
              <div className="footer-item">
                <Title fontSize="1rem">Банк</Title>
                <div className="link-container">
                  <PageLink>Кредиты</PageLink>
                  <PageLink>Карты</PageLink>
                  <PageLink>Депозиты</PageLink>
                  <PageLink>Переводы</PageLink>
                  <PageLink>Мобильное приложение</PageLink>
                  <PageLink>Тарифы</PageLink>
                  <PageLink>Сейфовые ячейки</PageLink>
                </div>
              </div>
              <div className="footer-item">
                <Title fontSize="1rem">О нас</Title>
                <div className="link-container">
                  <PageLink>Информация</PageLink>
                  <PageLink>Руководство</PageLink>
                  <PageLink>Отчетность</PageLink>
                  <PageLink>Документы</PageLink>
                  <PageLink>Контакты</PageLink>
                  <PageLink>Отделения и банкоматы</PageLink>
                  <PageLink>Отделения в периода карантина</PageLink>
                  <PageLink>Вакансии</PageLink>
                </div>
              </div>
              <div className="footer-item">
                <Title fontSize="1rem">Новости</Title>
                <div className="link-container">
                  <PageLink>Новости</PageLink>
                  <PageLink>Пресс-релизы</PageLink>
                  <PageLink className="big-link">press@forte.bank</PageLink>
                </div>
              </div>
              <div className="footer-item">
                <Title fontSize="1rem">Дополнительно</Title>
                <div className="link-container">
                  <PageLink>Premier</PageLink>
                  <PageLink>International Relations</PageLink>
                  <PageLink>Реализация имущества</PageLink>
                  <PageLink>175-летие Абая</PageLink>
                  <PageLink>Apple Pay</PageLink>
                  <PageLink>Samsung Pay</PageLink>
                  <PageLink>ForteForex</PageLink>
                  <PageLink>Специальные возможности</PageLink>
                </div>
              </div>
            </FlexBox>
          </div>
          <div className="footer-lower">
            <FlexBox className="jscsp">
              <div className="lower-item">
                <FlexBox className="jscsp">
                  <div className="text">
                    <PageLink fontSize="1rem!important" className="big-link">
                      Оставить обратную связь
                    </PageLink>
                    <p>Все права защищены © forte 2020</p>
                  </div>
                  <div className="footer-icons">
                    <PageLink>
                      <img src="/images/icons/instagram.svg" alt="inst" />
                    </PageLink>
                    <PageLink>
                      <img src="/images/icons/facebook.svg" alt="facebook" />
                    </PageLink>
                    <PageLink>
                      <img src="/images/icons/youtube.svg" alt="yt" />
                    </PageLink>
                    <PageLink>
                      <img src="/images/icons/tiktok.svg" alt="tt" />
                    </PageLink>
                  </div>
                </FlexBox>
              </div>
              <div className="lower-item">
                <button>Версия для слабовидящих: </button>
              </div>
            </FlexBox>
          </div>
        </div>
      </Container>
    </PageFooter>
  );
};

export default Footer;
