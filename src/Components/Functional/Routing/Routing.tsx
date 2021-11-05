import {
  Container,
  FlexBox,
  Navigation,
  PageLink,
} from "../../../utils/Styled/main";

type RoutingListProps = {
  activeIndex?: number | undefined;
};

const Routing = ({ activeIndex }: RoutingListProps) => {
  const navigations = [
    {
      icon: "/images/icons/charity.svg",
      name: "Кредиты",
      url: "/deposits",
    },
    {
      icon: "/images/icons/card.svg",
      name: "Карты",
      url: "/404",
    },
    {
      icon: "/images/icons/deposits.svg",
      name: "Депозиты",
      url: "/404",
    },
    {
      icon: "/images/icons/transfers.svg",
      name: "Переводы",
      url: "/404",
    },
    {
      icon: "/images/icons/insurance.svg",
      name: "Insurance",
      url: "/404",
    },
    {
      icon: "/images/icons/premium.svg",
      name: "Premier",
      url: "/404",
    },
    {
      icon: "/images/icons/forteFamily.svg",
      name: "ForteFamily",
      url: "/404",
    },

    {
      icon: "/images/icons/contacts.svg",
      name: "Контакты",
      url: "/404",
    },
  ];

  return (
    <Navigation>
      <Container>
        <div className="inner">
          <FlexBox className="jscc">
            {navigations.map((n, index) => (
              <PageLink
                href={n.url}
                className="nav-links"
                key={index}
                background={n.icon}
                activated={(activeIndex === index).toString()}
              >
                <span>{n.name}</span>
              </PageLink>
            ))}
          </FlexBox>
        </div>
      </Container>
    </Navigation>
  );
};

export default Routing;
