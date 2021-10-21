import {
  Container,
  FlexBox,
  Navigation,
  PageLink,
} from "../../../utils/Styled/main";

const Routing = () => {
  const navigations = [
    {
      url: "/images/icons/card.svg",
      name: "Карты",
    },
    {
      url: "/images/icons/deposits.svg",
      name: "Депозиты",
    },
    {
      url: "/images/icons/transfers.svg",
      name: "Переводы",
    },
    {
      url: "/images/icons/insurance.svg",
      name: "Insurance",
    },
    {
      url: "/images/icons/premium.svg",
      name: "Premier",
    },
    {
      url: "/images/icons/forteFamily.svg",
      name: "ForteFamily",
    },

    {
      url: "/images/icons/contacts.svg",
      name: "Контакты",
    },
  ];
  return (
    <Navigation>
      <Container>
        <div className="inner">
          <FlexBox className="jscc">
            {navigations.map((n, index) => (
              <PageLink className="nav-links" key={index} background={n.url}>
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
