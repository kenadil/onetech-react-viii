import Cards from "../../Components/Cards/Cards";
import Exchange from "../../Components/Exchange/Exchange";
import BannerCarousel from "../../Components/Functional/Carousel/BannerCarousel";
import Routing from "../../Components/Functional/Routing/Routing";
import Header from "../../Components/Header/Header";
import Loans from "../../Components/Loans/Loans";
import MobileAd from "../../Components/MobileAd/MobileAd";
import StaticCards from "../../Components/StaticCards/StaticCards";
import TextCards from "../../Components/TextCards/TextCards";
import {
  Banner,
  BannerDescription,
  Content,
  FlexBox,
  PageLink,
  VisualImage,
} from "../../utils/Styled/main";
import { BannerList } from "../../utils/types/PaddingProps";

const Wrapper = () => {
  const history = (
    <>
      <PageLink>Forte</PageLink> - Банк
    </>
  );
  const bannerList: BannerList = {
    banners: [
      {
        url: "url(/images/banner/banner1.png)",
        children: (
          <FlexBox className="jscsp">
            <div>
              <span>{history}</span>
              <h3>До 3 000 000 ₸</h3>
              <BannerDescription>Покупки без процентов</BannerDescription>
              <button>Подробнее</button>
            </div>
            <VisualImage src="/images/banner/visual1.png" alt="visual" />
          </FlexBox>
        ),
      },
      {
        url: "url(/images/banner/banner2.png)",
        children: (
          <FlexBox className="jscsp">
            <div>
              <span>{history}</span>

              <h3>Выигрывайте iPhone 12</h3>
              <BannerDescription>за 1 000 ₸ каждый месяц</BannerDescription>
              <button>Подробнее</button>
            </div>
            <VisualImage src="/images/banner/visual2.png" alt="visual" />
          </FlexBox>
        ),
      },
      {
        url: "url(https://wallpapercave.com/wp/Wes2iOh.jpg)",
        children: (
          <FlexBox className="jscsp">
            <div>
              <span>{history}</span>

              <h3>Привет</h3>
              <BannerDescription>
                ты черно-белый гуль и любитель финда?
              </BannerDescription>
              <button>Подробнее</button>
            </div>
            <VisualImage src="/images/banner/visual4.png" alt="visual" />
          </FlexBox>
        ),
      },
    ],
  };
  return (
    <Content>
      <Header />
      <Routing />
      <Banner>
        <BannerCarousel banners={bannerList.banners} />
      </Banner>
      <Cards />
      <Loans />
      <StaticCards />
      <TextCards />
      <MobileAd />
      <Exchange />
    </Content>
  );
};

export default Wrapper;
