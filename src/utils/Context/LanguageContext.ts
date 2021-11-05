import React from "react";

interface ILanguageContext {
  lang: string;
  handleChange?: (value: string) => void;
}

const globalState = {
  lang: "ru-RU",
  handleChange: (value: string) => {},
};

const LanguageContext = React.createContext<ILanguageContext>(globalState);

export default LanguageContext;
