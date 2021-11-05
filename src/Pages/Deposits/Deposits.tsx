import Advantages from "../../Components/Advantages/Advantages";
import Express from "../../Components/Express/Express";
import Eyecatcher from "../../Components/Eyecatcher/Eyecatcher";
import BannerCarousel from "../../Components/Functional/Carousel/BannerCarousel";
import Routing from "../../Components/Functional/Routing/Routing";
import Header from "../../Components/Header/Header";
import {
  Content,
  Banner,
  BannerDescription,
  FlexBox,
  PageLink,
  VisualImage,
} from "../../utils/Styled/main";
import { BannerList } from "../../utils/types/PaddingProps";

const Deposits = () => {
  const history = (
    <>
      <PageLink>Forte</PageLink> - <PageLink>Банк</PageLink> -{" "}
      <PageLink>Кредиты</PageLink> - Экспресс-кредит
    </>
  );
  const bannerList: BannerList = {
    banners: [
      {
        url: undefined,
        children: (
          <FlexBox className="jscsp">
            <div>
              <span>{history}</span>
              <h3>До 3 000 000 ₸</h3>
              <BannerDescription>Покупки без процентов</BannerDescription>
              <button>Получить кредит</button>
            </div>
            <VisualImage src="/images/banner/visual3.png" alt="visual" />
          </FlexBox>
        ),
      },
    ],
  };
  return (
    <Content>
      <Header />
      <Routing activeIndex={0} />
      <Banner>
        <BannerCarousel banners={bannerList.banners} />
      </Banner>
      <Eyecatcher />
      <Advantages />
      <Express />
    </Content>
  );
};

export default Deposits;
