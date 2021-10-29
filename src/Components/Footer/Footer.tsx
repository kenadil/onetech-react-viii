import "font-awesome/css/font-awesome.min.css";
import {
  Container,
  FlexBox,
  PageFooter,
  PageLink,
} from "../../utils/Styled/main";
import FooterItem from "./FooterItem";

export type FooterItemProps = {
  name: string;
  links: string[];
  bigIndex?: number;
};

const Footer = () => {
  const bankLinks: FooterItemProps = {
    name: "Банк",
    links: [
      "Кредиты",
      "Карты",
      "Депозиты",
      "Переводы",
      "Мобильное приложение",
      "Тарифы",
      "Сейфовые ячейки",
    ],
  };
  const aboutUs: FooterItemProps = {
    name: "О нас",
    links: [
      "Информация",
      "Руководство",
      "Отчетность",
      "Документы",
      "Контакты",
      "Отделения и банкоматы",
      "Отделения в период карантина",
      "Вакансии",
    ],
  };
  const news: FooterItemProps = {
    name: "Новости",
    links: ["Новости", "Пресс-релизы", "press@forte.bank"],
    bigIndex: 2,
  };
  const other: FooterItemProps = {
    name: "Дополнительно",
    links: [
      "Premier",
      "International Relations",
      "Реализация имущества",
      "175-летие Абая",
      "Apple Pay",
      "Samsung Pay",
      "ForteForex",
      "Специальные возможности",
    ],
  };
  return (
    <PageFooter>
      <Container>
        <div className="inner">
          <div className="footer-upper">
            <FlexBox className="jscsp">
              <FooterItem name={bankLinks.name} links={bankLinks.links} />
              <FooterItem name={aboutUs.name} links={aboutUs.links} />
              <FooterItem
                name={news.name}
                links={news.links}
                bigIndex={news.bigIndex}
              />
              <FooterItem name={other.name} links={other.links} />
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
