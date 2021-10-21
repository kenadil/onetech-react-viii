import { MenuItem } from "@mui/material";
import { useState } from "react";
import { HeaderSelect } from "../../../utils/Styled/main";

const LanguageSelector = () => {
  const locales = [
    {
      lang: "ruRu",
      name: "Рус",
    },
    { lang: "enEn", name: "Eng" },
    { lang: "kzKz", name: "Қаз" },
  ];
  //["Рус", "Eng", "Қаз"];
  const [locale, setLocale] = useState<any>("ruRu");
  const handleChange = (e: any) => setLocale(e.target.value);
  return (
    <HeaderSelect value={locale} onChange={handleChange} size="small">
      {locales.map((l, index) => (
        <MenuItem value={l.lang} key={index}>
          {l.name}
        </MenuItem>
      ))}
    </HeaderSelect>
  );
};

export default LanguageSelector;
