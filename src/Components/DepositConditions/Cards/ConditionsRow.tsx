import { PlainText } from "../../../utils/Styled/main";

const ConditionsRow = ({
  title,
  text,
}: {
  title: string;
  text: string | React.ReactNode;
}) => {
  return (
    <>
      <PlainText fontSize="1.125rem" padding="0 0 6px" fontWeight="500">
        {title}
      </PlainText>
      <PlainText padding="0 0 24px">{text}</PlainText>
    </>
  );
};

export default ConditionsRow;
