import { useState } from "react";
import { useWindowSize } from "../../utils/Hooks/useWindowsSize";
import { ConditionsContainer, Container, Title } from "../../utils/Styled/main";
import ConditionsChanger from "../Functional/Conditions/Conditions";
import ConditionsCards from "./Cards/ConditionsCards";

const DepositConditions = () => {
  const [active, setActive] = useState<number>(0);
  const handleChange = (index: number) => setActive(index);
  const conditions = [
    "Условия",
    "Документы",
    "Возможности",
    "Важно",
    "Типовые условия",
  ];
  const { width } = useWindowSize();
  return (
    <ConditionsContainer>
      <Container>
        <ConditionsChanger
          activeIndex={active}
          handleChange={handleChange}
          conditions={conditions}
        />
        <Title
          fontSize={width && width > 480 ? "1.875rem" : "1.5rem"}
          padding="48px 0 24px"
        >
          Получить кредит на выгодных условиях
        </Title>
        <ConditionsCards />
      </Container>
    </ConditionsContainer>
  );
};

export default DepositConditions;
