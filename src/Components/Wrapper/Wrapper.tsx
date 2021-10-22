import { Banner, Content, PageWrapper } from "../../utils/Styled/main";
import Cards from "../Cards/Cards";
import BannerCarousel from "../Functional/Carousel/BannerCarousel";
import Routing from "../Functional/Routing/Routing";
import Header from "../Header/Header";

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
      </Content>
    </PageWrapper>
  );
};

export default Wrapper;
