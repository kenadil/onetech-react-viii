import { FlexBox } from "../../../utils/Styled/main";

type ConditionsChangerProps = {
  handleChange: (index: number) => void;
  activeIndex: number;
  conditions: string[];
};

const ConditionsChanger = ({
  handleChange,
  activeIndex,
  conditions,
}: ConditionsChangerProps) => {
  return (
    <FlexBox className="jscsp conditions-changer">
      {conditions.map((c, index) => (
        <button
          key={index}
          onClick={() => handleChange(index)}
          className={activeIndex === index ? "active-btn" : ""}
        >
          {c}
        </button>
      ))}
    </FlexBox>
  );
};

export default ConditionsChanger;
