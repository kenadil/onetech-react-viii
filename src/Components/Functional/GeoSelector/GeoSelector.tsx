import { useState } from "react";
import { HeaderSelect } from "../../../utils/Styled/main";
import GeoIcon from "./GeoIcon";
import { MenuItem } from "@mui/material";

const GeoSelector = () => {
  const locations = [
    { index: "city1", name: "Караганда" },
    { index: "city2", name: "Алматы" },
    { index: "city3", name: "Нур-Султан" },
    { index: "city4", name: "Уральск" },
    { index: "city5", name: "Усть-Каменогорск" },
    { index: "city6", name: "Петропавловск" },
    { index: "city7", name: "Павлодар" },
    { index: "city8", name: "Кызылорда" },
    { index: "city9", name: "Актау" },
  ];
  const [location, setLocation] = useState("city1");

  const handleChange = (e: any) => setLocation(e.target.value);
  return (
    <HeaderSelect
      className="reverse"
      value={location}
      onChange={handleChange}
      IconComponent={() => <GeoIcon />}
    >
      {locations.map((l, index) => (
        <MenuItem value={l.index} key={index}>
          {l.name}
        </MenuItem>
      ))}
    </HeaderSelect>
  );
};

export default GeoSelector;
