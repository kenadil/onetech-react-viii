import { useWindowSize } from "../../../utils/Hooks/useWindowsSize";
import { PlainText } from "../../../utils/Styled/main";

const ConditionsRow = ({
  title,
  text,
}: {
  title: string;
  text: string | React.ReactNode;
}) => {
  const { width } = useWindowSize();
  return (
    <>
      <PlainText
        fontSize={width && width > 480 ? "1.125rem" : "1rem"}
        padding="0 0 6px"
        fontWeight="500"
      >
        {title}
      </PlainText>
      <PlainText
        fontSize={width && width > 480 ? "1rem" : ".875rem"}
        padding="0 0 24px"
      >
        {text}
      </PlainText>
    </>
  );
};

export default ConditionsRow;
