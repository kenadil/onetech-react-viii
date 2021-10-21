import { Banner, Content, PageWrapper } from "../../utils/Styled/main";
import FunctionalCarousel from "../Functional/Carousel/Carousel";
import Routing from "../Functional/Routing/Routing";
import Header from "../Header/Header";

const Wrapper = () => {
  return (
    <PageWrapper>
      <Content>
        <Header />
        <Routing />
        <Banner>
          <FunctionalCarousel />
        </Banner>
      </Content>
    </PageWrapper>
  );
};

export default Wrapper;
