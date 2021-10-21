import { Banner, Content, PageWrapper } from "../../utils/Styled/main";
import FunctionalCarousel from "../Functional/Carousel/Carousel";
import Header from "../Header/Header";

const Wrapper = () => {
  return (
    <PageWrapper>
      <Content>
        <Header />
        <Banner>
          <FunctionalCarousel />
        </Banner>
      </Content>
    </PageWrapper>
  );
};

export default Wrapper;
