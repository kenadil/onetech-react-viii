import { Icon } from "@mui/material";

const GeoIcon = (props: any) => {
  return (
    <Icon {...props} style={{ cursor: "pointer " }}>
      <img src="/images/geoIcon/location.png" alt="location.svg" />
    </Icon>
  );
};

export default GeoIcon;
