import React, { useEffect, useState } from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import {
  Form,
  Padding,
  Button,
  Text,
  RequirementsCheckList,
} from "../../utils/Styled/style";
import CheckField from "../Checkfield/CheckField";
import {
  numberRegEx,
  onlyLatinRegEx,
  specialCharactersRegEx,
  uppercaseRegEx,
} from "../../utils/Regex/regex";
import Info from "../InfoContainer/Info";

const FormField = () => {
  const [passwordValue, setPasswordValue] = useState<string>("");
  const [passwordValidationValue, setPasswordValidationValue] =
    useState<string>("");
  const [containsOneUp, setContainsOneUp] = useState(false);
  const [containsNumber, setContainsNumber] = useState(false);
  const [onlyLatin, setOnlyLatin] = useState(false);
  const [containsSpecialCharacter, setContainsSpecialCharacter] =
    useState(false);
  const [noQwerty, setNoQwerty] = useState(false);

  const requirements = [
    { requirement: "латинские буквы", checked: onlyLatin },
    { requirement: "1 заглавную латинскую букву", checked: containsOneUp },
    { requirement: "цифры от 0-9", checked: containsNumber },
    {
      requirement: "символы (#$^+=!*()@%&_?-,",
      checked: containsSpecialCharacter,
    },
    {
      requirement: "запрет последовательности букв (qwerty), цифр (123456)",
      checked: noQwerty,
    },
  ];

  useEffect(() => {
    setOnlyLatin(onlyLatinRegEx.test(passwordValue));
    setContainsOneUp(uppercaseRegEx.test(passwordValue));
    setContainsNumber(numberRegEx.test(passwordValue));
    setContainsSpecialCharacter(specialCharactersRegEx.test(passwordValue));
    setNoQwerty(
      passwordValue.length > 0 &&
        !(
          passwordValue.toLowerCase().includes("qwerty") ||
          passwordValue.toLowerCase().includes("123456")
        )
    );
  }, [passwordValue]);
  return (
    <Form>
      <PasswordInput
        setValue={setPasswordValue}
        value={passwordValue}
        placeholder={"Придумайте пароль*"}
        containsError={
          passwordValue.length > 0 &&
          (!onlyLatin ||
            !containsOneUp ||
            !containsNumber ||
            !containsSpecialCharacter ||
            !noQwerty)
        }
        errorMessage={"Пароль не соответствует требованиям безопасности"}
      />
      <Padding />
      <PasswordInput
        setValue={setPasswordValidationValue}
        value={passwordValidationValue}
        placeholder={"Повторите пароль*"}
        containsError={
          passwordValidationValue.length > 0 &&
          !(passwordValue === passwordValidationValue)
        }
        errorMessage={"Пароли не одинаковые"}
      />
      <Padding padding={"15px 0"} />
      <Text textAlign="left" fontSize="14px">
        Пароль должен содержать:
      </Text>
      <Padding padding={"5px 0"} />
      <RequirementsCheckList>
        {requirements.map((checkline, index) => (
          <CheckField
            key={index}
            checked={checkline.checked}
            requirement={checkline.requirement}
          />
        ))}
      </RequirementsCheckList>
      <Padding />
      <Info
        text={
          <p>
            Введенный пароль будет являться паролем для выпущенной ЭЦП. <br />
            Запомните введенные данные!
          </p>
        }
      />
      <Padding padding="25px 0" />
      <Button
        disabled={
          (passwordValidationValue.length > 0 &&
            !(passwordValue === passwordValidationValue)) ||
          (passwordValue.length > 0 &&
            (!onlyLatin ||
              !containsOneUp ||
              !containsNumber ||
              !containsSpecialCharacter ||
              !noQwerty))
        }
      >
        Подтвердить
      </Button>
      {console.log(passwordValue === passwordValidationValue)}
    </Form>
  );
};

export default FormField;
