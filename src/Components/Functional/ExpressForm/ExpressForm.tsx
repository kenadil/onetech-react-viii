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
import ExpressInfo from "./ExpressInfo";
import OfferModal from "./OfferModal";

type ValueState = {
  id: string;
  phoneNumber: string;
  incomes: string;
};

type ErrorsState = {
  id: boolean;
  phoneNumber: boolean;
  incomes: boolean;
};

const maxValue = 12;

const ExpressForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState<ValueState>({
    id: "",
    phoneNumber: "",
    incomes: "",
  });
  const [errors, setErrors] = useState<ErrorsState>({
    id: false,
    phoneNumber: false,
    incomes: false,
  });

  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    resetForm();
    setOpen(false);
  };

  const handleChange =
    (prop: keyof ValueState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setErrors((prevState) => ({
        ...prevState,
        [prop]: values[prop].length === 0,
      }));
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

  const handleMaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrors((prevState) => ({
      ...prevState,
      phoneNumber: values["phoneNumber"].length === 0,
    }));
    setValues((prevState) => {
      return { ...prevState, phoneNumber: e.target.value };
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    Object.keys(values).map((key, index) =>
      setErrors((prevState) => ({
        ...prevState,
        [key]: values[key as keyof ValueState].length === 0,
      }))
    );
    const errors: ErrorsState = {
      id: values["id"].length === 0,
      phoneNumber: values["phoneNumber"].length === 0,
      incomes: values["incomes"].length === 0,
    };
    validateForm(errors);
  };

  const validateForm = (errors: ErrorsState) => {
    console.log(errors);
    if (errors.id || errors.phoneNumber || errors.incomes) {
      return;
    }
    console.log("open modal");
    handleOpen();
  };

  const resetForm = () => {
    setValues({ id: "", phoneNumber: "", incomes: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <ExpressFormLayout>
        <InputLabel htmlFor="outlined-password-input" error={errors["id"]}>
          ИИН
        </InputLabel>
        <OutlinedInput
          autoComplete="off"
          error={errors["id"]}
          name="id"
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
            name="phoneNumber"
            mask="+7 (799) 999 99 99"
            value={values.phoneNumber}
            onChange={handleMaskChange}
          >
            {() => (
              <TextField
                error={errors["phoneNumber"]}
                id="outlined-phone-number"
                label="Номер телефона"
                variant="outlined"
              />
            )}
          </InputMask>
          <TextField
            error={errors["incomes"]}
            onError={() => <div>Папочка зол</div>}
            name="incomes"
            id="outlined-income-amount"
            label="Основной ежемесяч. доход, ₸ "
            variant="outlined"
            autoComplete="off"
            value={
              values.incomes
                ? values.incomes
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                : ""
            }
            onChange={handleChange("incomes")}
          />
        </FlexBox>
        <ExpressInfo />
        <button
          disabled={errors.id || errors.phoneNumber || errors.incomes}
          type="submit"
        >
          Оформить кредит
        </button>
      </ExpressFormLayout>
      <OfferModal
        open={open}
        handleClose={handleClose}
        nodes={JSON.stringify(values)}
      />
    </form>
  );
};

export default ExpressForm;
