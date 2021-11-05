import { useState } from "react";
import Wrapper from "./Components/Wrapper/Wrapper";
import LanguageContext from "./utils/Context/LanguageContext";

function App() {
  const [lang, setLang] = useState<string>("ru-RU");

  const handleLangChange = (value: string) => {
    setLang(value);
  };
  return (
    <LanguageContext.Provider
      value={{ lang: lang, handleChange: handleLangChange }}
    >
      <Wrapper />
    </LanguageContext.Provider>
  );
}

export default App;
