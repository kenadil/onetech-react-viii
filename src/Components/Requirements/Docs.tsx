import {
  Container,
  DocsRequirement,
  Requirements,
  Title,
  PlainText,
} from "../../utils/Styled/main";

const Docs = () => {
  return (
    <Requirements>
      <Container>
        <div className="inner">
          <Title fontSize="1.5rem" padding="0 0 16px">
            Документы для получения кредита
          </Title>
          <DocsRequirement background={"/images/icons/identification.svg"}>
            Удостоверение личности
          </DocsRequirement>
          <DocsRequirement background={"/images/icons/questionnaire.svg"}>
            Заполнить анкету
          </DocsRequirement>
          <PlainText padding="7px 0 0" fontSize="0.75rem" color="#737373">
            Задать вопросы можете по номеру{" "}
            <a href="/deposits" target="_blank">
              7575
            </a>{" "}
            или письмом на электронный адрес{" "}
            <a href="/deposits">callcenter@forte.bank</a>
          </PlainText>
        </div>
      </Container>
    </Requirements>
  );
};

export default Docs;
