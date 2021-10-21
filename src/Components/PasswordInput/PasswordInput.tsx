import React from "react";
import { ErrorMessage, Input } from "../../utils/Styled/style";

type PasswordInputProps = {
  setValue: (password: any) => void;
  value: string;
  placeholder: string;
  containsError: boolean;
  errorMessage: string;
};

const PasswordInput = ({
  setValue,
  value,
  placeholder,
  containsError,
  errorMessage,
}: PasswordInputProps) => {
  const onPasswordChange = (password: any) => setValue(password.target.value);
  return (
    <>
      <Input
        onChange={onPasswordChange}
        value={value}
        placeholder={placeholder}
        className={containsError ? "error" : ""}
      />
      {containsError ? <ErrorMessage> {errorMessage} </ErrorMessage> : ""}
    </>
  );
};

export default PasswordInput;
