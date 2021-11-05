import { MenuItem } from "@mui/material";
import { useContext } from "react";
import LanguageContext from "../../../utils/Context/LanguageContext";
import { HeaderSelect } from "../../../utils/Styled/main";

const LanguageSelector = () => {
  const { lang, handleChange } = useContext(LanguageContext);
  const locales = [
    {
      lang: "ru-RU",
      name: "Рус",
    },
    { lang: "en-EN", name: "Eng" },
    { lang: "kz-KZ", name: "Қаз" },
  ];
  //["Рус", "Eng", "Қаз"];
  const handleLangChange = (e: any) => {
    if (handleChange) handleChange(e.target.value as string);
  };
  console.log(lang);
  return (
    <HeaderSelect value={lang} onChange={handleLangChange} size="small">
      {locales.map((l, index) => (
        <MenuItem value={l.lang} key={index}>
          {l.name}
        </MenuItem>
      ))}
    </HeaderSelect>
  );
};

export default LanguageSelector;
