import styled from "styled-components";
import { PaddingProps, TextProps } from "../types/PaddingProps";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "@mui/material";

export const Inner = styled.div`
  padding: 75px 0;
`;
export const Padding = styled.div<PaddingProps>`
  padding: ${(p) => (p.padding ? p.padding : "10px 0")};
`;
export const Text = styled.div<TextProps>`
  font-size: ${(p) => (p.fontSize ? p.fontSize : "16px")};
  text-align: ${(p) => (p.textAlign ? p.textAlign : "center")};
  padding-bottom: 10px;
  font-weight: 700;
  width: 95%;
  margin: 0;
`;
export const Status = styled.div``;
export const Requirement = styled.div`
  font-size: 16px;
  padding: 0 0 0 15px;
  margin: 0;
  text-align: left;
  color: gray;
`;

export const Button = styled.button.attrs({
  type: "submit",
  value: "Submit",
})`
  border-radius: 10px;
  background-color: #ee1d75;
  outline: none;
  border: none;
  color: white;
  padding: 15px;
  width: 50%;

  &[disabled] {
    background: #f0f0f0;
    color: gray;
    cursor: not-allowed;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input.attrs((props) => ({
  className: props.className,
}))`
  padding: 15px 10px;
  border-radius: 10px;
  display: block;
  width: 100%;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.23);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &.error {
    border: 1px solid red;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin: 0;
`;

export const Headline = styled.h4`
  font-size: 16px;
  opacity: 0.5;
  margin: 0;
  padding: 15px 0 30px;
  color: rgba(0, 0, 0, 0.75);
`;

export const Checkline = styled.div`
  display: flex;
  align-items: center;

  padding: 5px 0;
`;

export const CheckStatus = styled(FontAwesomeIcon).attrs({
  size: "xs",
})`
  color: rgba(0, 0, 0, 0.23);

  font-size: 8px;
`;

export const RequirementsCheckList = styled(Container)``;
export const ErrorMessage = styled.span`
  color: red;
`;
