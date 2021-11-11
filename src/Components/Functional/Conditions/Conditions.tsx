import { useWindowSize } from "../../../utils/Hooks/useWindowsSize";
import { FlexBox } from "../../../utils/Styled/main";
import { Carousel } from "react-responsive-carousel";

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
  const size = useWindowSize();
  return (
    <>
      {size.width && size.width > 480 ? (
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
      ) : (
        <Carousel
          showIndicators={false}
          showArrows={false}
          showStatus={false}
          showThumbs={false}
        >
          {conditions.map((c, index) => (
            <div>
              <button
                key={index}
                onClick={() => handleChange(index)}
                className={activeIndex === index ? "active-btn" : ""}
              >
                {c}
              </button>
            </div>
          ))}
        </Carousel>
      )}
    </>
  );
};

export default ConditionsChanger;
