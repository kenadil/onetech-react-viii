import { Container } from "@mui/material";
import { AdvantagesContainer, Title } from "../../utils/Styled/main";
import Collapsibles from "../Functional/Advantages/Collapsibles";

const Advantages = () => {
  return (
    <AdvantagesContainer>
      <Container>
        <div className="inner">
          <Title fontSize="1.5rem">Преимущества экспресс-кредита</Title>
          <Collapsibles />
        </div>
      </Container>
    </AdvantagesContainer>
  );
};

export default Advantages;
