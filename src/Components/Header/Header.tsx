import { Container, FlexBox, PageHeader } from "../../utils/Styled/main";
import GeoSelector from "../Functional/GeoSelector/GeoSelector";
import LanguageSelector from "../Functional/LanguageSelector/LanguageSelector";
import SocialButton from "../Functional/SocialButton/SocialButton";
import NavBar from "../Functional/NavBar/NavBar";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <PageHeader>
      <Container>
        <FlexBox className="jscsp content-container">
          <FlexBox className="jscsp selection">
            <Logo src="/images/logo/Vector.svg" />
            <LanguageSelector />
            <GeoSelector />
          </FlexBox>
          <NavBar />
          <FlexBox className="jscfe">
            <SocialButton text="7575" url={"/images/contact/contact.png"} />
            <SocialButton text="Войти" url={"/images/profile/profile.png"} />
          </FlexBox>
        </FlexBox>
      </Container>
    </PageHeader>
  );
};

export default Header;
