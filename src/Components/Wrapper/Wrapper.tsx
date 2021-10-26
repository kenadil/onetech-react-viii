import { Banner, Content, PageWrapper } from "../../utils/Styled/main";
import Cards from "../Cards/Cards";
import Exchange from "../Exchange/Exchange";
import BannerCarousel from "../Functional/Carousel/BannerCarousel";
import Routing from "../Functional/Routing/Routing";
import Header from "../Header/Header";
import Loans from "../Loans/Loans";
import StaticCards from "../StaticCards/StaticCards";

const Wrapper = () => {
  return (
    <PageWrapper>
      <Content>
        <Header />
        <Routing />
        <Banner>
          <BannerCarousel />
        </Banner>
        <Cards />
        <Loans />
        <StaticCards />
        <Exchange />
      </Content>
    </PageWrapper>
  );
};

export default Wrapper;
