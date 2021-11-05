import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { ExpressFormLayout, FlexBox } from "../../../utils/Styled/main";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputMask from "react-input-mask";
import { idOfLength } from "../../../utils/types/CheckLength";

type ValueState = {
  id: string;
  phoneNumber: string;
  incomes: string;
};

const maxValue = 12;

const ExpressForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState<ValueState>({
    id: "",
    phoneNumber: "",
    incomes: "",
  });

  const handleChange =
    (prop: keyof ValueState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const onlyNums = event.target.value.replace(/[^0-9]/g, "");
      try {
        idOfLength(onlyNums, maxValue);
        setValues({
          ...values,
          [prop]: [prop][0] === "id" ? onlyNums : Number(onlyNums),
        });
      } catch {
        setValues({ ...values, [prop]: onlyNums.substring(0, maxValue) });
      }
    };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ExpressFormLayout>
      <InputLabel htmlFor="outlined-password-input">ИИН</InputLabel>
      <OutlinedInput
        id="outlined-password-input"
        value={values.id}
        onChange={handleChange("id")}
        type={showPassword ? "text" : "password"}
        label="ИИН*"
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
      <FlexBox className="jscsp">
        <InputMask
          mask="+7 (799) 999 99 99"
          value={values.phoneNumber}
          onChange={(e) =>
            setValues((prevState) => {
              return { ...prevState, phoneNumber: e.target.value };
            })
          }
        >
          {() => (
            <TextField
              id="outlined-phone-number"
              label="Номер телефона"
              variant="outlined"
            />
          )}
        </InputMask>
        <TextField
          id="outlined-income-amount"
          label="Основной ежемесяч. доход, ₸ "
          variant="outlined"
          value={
            values.incomes
              ? values.incomes.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
              : ""
          }
          onChange={handleChange("incomes")}
        />
      </FlexBox>
    </ExpressFormLayout>
  );
};

export default ExpressForm;
