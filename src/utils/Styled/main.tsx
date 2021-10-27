import {
  FormControl,
  FormControlLabel,
  Link,
  Select,
  Slider,
} from "@mui/material";
import styled from "styled-components";

import { SlideProps, PageLinkProps, TextProps } from "../types/PaddingProps";

export const PageWrapper = styled.div`
  min-height: 100%;
  & p,
  & h1,
  & h2,
  & h3,
  & h4 {
    margin: 0;
  }

  display: flex;
  justify-content: space-between;
  flex-direction: column;

  & a {
    cursor: pointer;
  }
`;

export const Content = styled.div``;

export const PageHeader = styled.header`
  background-color: #f8f8f8;
  box-sizing: content-box;

  & nav {
    padding: 20px 0;
  }
  & nav a {
    padding: 20px 15px;
  }
`;

export const FlexBox = styled.div.attrs((props) => ({
  className: props.className,
}))`
  display: flex;
  align-items: center;

  &.jscsp {
    justify-content: space-between;
  }
  &.jscc {
    justify-content: center;
  }
  &.jscfe {
    justify-content: flex-end;
  }

  &.content-container > *:nth-child(1) {
    flex: 0 0 25%;
  }
  &.content-container > *:nth-child(2) {
    flex: 0 1 50%;
    text-align: center;
  }
  &.content-container > *:nth-child(3) {
    flex: 0 1 25%;
  }

  &.selection > *:last-child {
    width: 63%;
    max-width: 63%;
  }

  & .nav-links {
    flex: 0 1 3%;
  }
`;

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 1220px;
  }

  @media (max-width: 1899px) {
    max-width: 1100px;
  }

  .card-carousel & {
    @media (min-width: 1920px) {
      max-width: 1278px;
    }
    @media (max-width: 1899px) {
      max-width: 1158px;
    }
  }
`;

export const HeaderSelect = styled(Select).attrs({
  classes: { root: "root" },
})`
  .root {
    font-family: "Rubik", sans-serif;
  }
  & > div {
    font-size: 0.875rem;
    font-weight: 400 !important;
    font-family: "Rubik", sans-serif;
    padding-left: 7px;
  }
  & > fieldset {
    border: none;
  }

  &.reverse {
    flex-direction: row-reverse;
  }
`;

export const PageLink = styled(Link)<PageLinkProps>`
  transition: 0.3s ease;
  &.header-link,
  &.header-social,
  &.nav-links {
    text-decoration: none;
    color: #303030;
  }
  &.nav-links {
    font-size: 0.75rem;
  }
  &.header-link {
    font-weight: 500;
  }
  &.active {
    color: #9d2550;
    text-decoration: underline;

    text-decoration-color: currentColor;
    text-underline-offset: 20px;
    text-decoration-thickness: 3px;
  }
  & > * {
    vertical-align: middle;
  }
  header & > span {
    color: #303030;
    font-weight: 400;
    text-decoration: none;
    font-size: 0.875rem;
    padding-left: 5px;
  }
  &.nav-links {
    padding: 0 28px;
  }
  &.nav-links:before {
    display: block;
    margin: 0 auto 8px;
    background-image: ${(p) =>
      p.background ? `url(${p.background})` : "none"};
    width: 24px;
    height: 24px;
    content: "";
    background-repeat: no-repeat;
    background-position: center;
  }
  &:hover {
    opacity: 0.5;
  }

  .jscfe > &:first-child {
    padding-right: 47px;
  }

  &.card-link {
    text-align: center;
    display: block;
    padding-top: 41px;
  }
`;

export const Banner = styled.section`
  & .inner {
    color: #fff;
  }
  & .slider-wrapper {
    height: 400px !important;
  }
  & .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }

  & .carousel .control-prev.control-arrow {
    left: 244px;
    width: 36px;

    @media (max-width: 1899px) {
      left: 106px;
    }
  }
  & .carousel .control-next.control-arrow {
    right: 244px;
    width: 36px;

    @media (max-width: 1899px) {
      right: 106px;
    }
  }

  & .carousel.carousel-slider .control-arrow.control-prev:before {
    background-image: url(/images/arrows/arrowLeft.svg);
    display: block;
    content: "";
    height: 36px;
    width: 36px;
    margin: 0;
    border: none;
  }

  & .carousel.carousel-slider .control-arrow.control-next:before {
    background-image: url(/images/arrows/arrowRight.svg);

    display: block;
    content: "";
    height: 36px;
    width: 36px;
    margin: 0;
    border: none;
  }

  & .carousel .control-dots .dot {
    width: 44px;
    height: 5px;
    border-radius: 4px;
    opacity: 1;
  }
  & .carousel .control-dots .dot.selected {
    background-color: black;
  }

  & .control-dots {
    text-align: left;
    height: 0;
    top: 342px;
    position: relative;
    max-width: 1236px;
    margin: 0 auto;
    @media (max-width: 1899px) {
      max-width: 1116px;
    }
  }
`;

export const Slide = styled.div<SlideProps>`
  background: ${(p) => (p.background ? "url(" + p.background + ")" : "none")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & .inner {
    padding: 31px 0;
    text-align: ${(p) => (p.textAlign ? p.textAlign : "left")} !important;
    min-height: 400px;
    color: white;
    font-weight: 300;
  }

  & span {
    font-size: 0.75rem;
  }

  & span > a {
    text-decoration: none;
    border-bottom: 1px dotted #fff;
    color: white;
  }

  & h3 {
    padding: 34px 0 24px 0;
    font-size: 3rem;
    margin: 0;
    font-weight: 400;
  }

  & p {
    margin: 0;
    font-size: 1.125rem;
    padding-bottom: 66px;
  }

  & button {
    padding: 18px 32px;
    font-size: 1rem;

    outline: none;
    border: none;
    border-radius: 4px;
    font-weight: 500;
    background: #fff;
    color: #9d2550;
    transition: 0.3s linear;
    cursor: pointer;
  }

  & button:hover {
    background: #9d2550;
    color: #fff;
  }

  &.card-carousel .inner {
    padding: 24px 0 0;
  }
`;

export const Navigation = styled.div`
  & .inner {
    padding: 19px 0;
  }
`;

export const CardContainer = styled.section`
  & .inner {
    padding: 64px 0 0;
  }

  & .slider-wrapper {
    height: auto;
    min-height: 585px;
  }

  & .carousel .control-dots .dot {
    opacity: 1;
    box-shadow: none;
    width: 18px;
    height: 18px;
  }

  & .carousel .control-dots .dot:after {
    content: "";
    height: 8px;
    width: 8px;
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 24%;
    margin: 0 4.5px 0 -4px;
    background-image: url(/images/icons/dot.svg);
    background-size: 8px 8px;
  }

  & .carousel .control-dots .dot.selected {
    border: 1px solid #303030;
  }
`;

export const Title = styled.h1<TextProps>`
  margin: 0;
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1.875rem")};
  color: #1e2a41;
  font-weight: 500;
`;

export const Card = styled.div`
  flex: 0 1 336px;

  & p,
  & h1,
  & h2,
  & h3,
  & h4 {
    padding-bottom: 16px;
    text-align: center;
  }

  & img {
    width: 100%;
  }

  & .forte.card-container {
    color: black;
  }

  & .forte.card-container button {
    background: #1e2a41;
    color: white;
    padding: 14px 32px;
    font-size: 1rem;
    font-weight: 400;
  }

  & .shine-container {
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    display: inline-block;
    overflow: hidden;
  }

  & .shine-container.over {
    transform: scale(1.1);
  }
  & .shine-container.over:after {
    content: "";
    top: 0;
    transform: translateX(100%);
    width: 100%;
    height: 220px;
    position: absolute;
    z-index: 1;
    animation: slide 2s 1s;

    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(128, 186, 232, 0) 99%,
      rgba(125, 185, 232, 0) 100%
    ); /* W3C */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#007db9e8',GradientType=1 ); /* IE6-9 */
  }

  /* animation */

  @keyframes slide {
    0% {
      transform: translateX(-200%);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

export const LoanContainer = styled.section`
  & .inner {
    padding: 69px 0 24px;
  }

  & .loans-description {
    padding: 24px 0;
  }

  & h4 {
    color: #303030;
    font-size: 1rem;
    font-weight: normal;
    padding: 0 0 1px;
  }

  & .period h4 {
    padding: 20px 0 0;
  }
`;

export const CalculatorForm = styled(FormControl)`
  && {
    display: block;
  }
`;

export const CalculatorContainer = styled.div`
  padding: 32px;
  background: #f2f2f2;
  border-radius: 4px;

  & .calculator-box {
    padding: 0 0 21px;
  }

  & .calculator-container {
    flex: 0 1 60%;
    border-right: 1px solid #e0e0e0;
  }

  & .calculator-result {
    flex: 0 1 40%;
  }

  & .calculator-result .inner {
    padding: 29px 32px;
  }

  & .month-pay .description,
  & .reward-pay .description {
    font-size: 0.875rem;
    padding: 8px 0;
  }

  & .reward-pay {
    padding: 24px 0 31px;
  }

  & .reward-pay .result {
    font-size: 1.5rem;
  }

  & .month-pay .result {
    font-size: 1.875rem;
    color: #9d2550;
    font-weight: 500;
  }

  & .slider-selection {
    font-size: 1.5rem;
  }

  & .slider-selection {
    padding: 0 24px 0;
    flex: 0 1 15%;
    min-width: 210px;
  }

  && .calculator-label {
    padding: 20px 0 0;
    font-size: 0.875rem;
    color: #737373;
  }

  && button[type="submit"] {
    padding: 14px 32px;
    background: #1e2a41;
    border: none;
    color: #fff;

    font-size: 1rem;
    font-weight: 500;
    border-radius: 4px;

    transition: 0.3s ease;
    cursor: pointer;
  }

  && button[type="submit"]:hover {
    opacity: 0.5;
  }
`;

export const CalculatorSlider = styled(Slider)`
  && {
    width: auto;
    flex: 0 1 75%;
    margin-bottom: 0;
    color: #fff;
  }

  & .MuiSlider-mark {
    display: none;
  }

  & .css-14pt78w-MuiSlider-rail {
    opacity: 1;
  }

  & .MuiSlider-valueLabel {
    visibility: hidden;
  }

  & .css-1gv0vcd-MuiSlider-track {
    color: #1e2a41;
  }
  & .css-eg0mwd-MuiSlider-thumb::after {
    background-image: url(/images/icons/slider.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: 8px;
    width: 24px;
    height: 24px;
  }
`;

export const IncomeSwitch = styled(FormControlLabel)`
  padding: 26px 12px 0;

  && {
    font-size: 1rem;
  }

  && .css-ahj2mt-MuiTypography-root {
    padding: 0 16px;
  }
`;

export const InfoCard = styled.div`
  background: #f2f2f2;
  border-radius: 4px;

  padding: 32px;
`;

export const Services = styled.section`
  color: #303030;

  & ${InfoCard} {
    flex: 0 1 44%;

    @media (max-width: 1899px) {
      flex: 0 1 43%;
    }
  }

  & ${FlexBox}.main-flex {
    align-items: flex-start;
  }

  & button {
    border-radius: 4px;
    cursor: pointer;
  }

  & .btn-container.white-btn button {
    background-color: #fff;
    transition: 0.3s ease;

    color: #0e2b91;
    :hover {
      color: #fff;
      background-color: #0e2b91;
    }
  }

  & .btn-container.black-btn button {
    background-color: #1e2a41;
    transition: 0.3s ease;

    color: #fff;
    :hover {
      opacity: 0.75;
    }
  }

  & .purchases {
    background-image: url(/images/exchanges/purchases.png);
    background-repeat: no-repeat;
    background-position: 90% bottom;
  }

  & button {
    padding: 14px 32px;
    border: none;
    outline: none;
    font-size: 1rem;
    font-weight: 500;
  }

  & .image {
    flex: 0 1 50%;

    img {
      width: 100%;
    }
  }

  & p {
    font-size: 1rem;

    min-height: 97px;
    transform: translateY(16px);
  }
`;

export const Help = styled.section`
  & .inner {
    padding: 64px 0 0;
  }

  & ${FlexBox} {
    align-items: flex-start;
  }

  & ${InfoCard} {
    flex: 0 1 32%;
    box-sizing: border-box;

    min-height: 306px;

    @media (max-width: 1899px) {
      min-height: 325px;
    }
  }

  & ${Title} {
    padding: 28px 0 16px;
  }
`;

export const Converter = styled.div`
  background: #f2f2f2;
  padding: 24px 64px 32px;
  box-sizing: border-box;
  position: relative;

  & .convert-button {
    position: absolute;
    padding: 13px;
    background: #f2f2f2;
    border-radius: 50%;

    top: 50%;
    transform: translateY(-50%);
    left: -8%;

    button {
      border-radius: 50%;
      width: 61px;
      height: 61px;
      outline: none;
      border: none;
      background: #1e2a41;
      cursor: pointer;
      transition: .3s ease;

      :after {
        background-position: center center;
        content: "";
        background: url(/images/icons/convert.svg);
        background-size: 28px 28px;
        width: 28px;
        height: 28px;
        display: block;
        margin: 0 auto;
        background-repeat: no-repeat;
      }

      :hover {
        transform: rotate(180deg);
        background: #9D2550;
      }
    }
  }
  @keyframes spin {
    0% ( transfrom: rotate(-180deg);)
    100%( transform: rotate(180deg); )
  } 
`;

export const ConverterInput = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px 0 8px;
  border-bottom: 1px solid #737373;

  & input {
    font-size: 1.25rem;
    padding: 0;

    min-width: 235px;
  }

  & .currency-buttons {
    flex: 0 1 30%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      height: 18px;
      opacity: 0.7;
      cursor: pointer;
    }

    img.selected {
      opacity: 1;
      transform: scale(1.05);
    }
  }

  & .css-1480iag-MuiInputBase-root-MuiInput-root:before {
    border: 0;
    outline: none;
  }

  & .css-1480iag-MuiInputBase-root-MuiInput-root:after {
    border: 0;
    outline: none;
  }

  &
    .css-1480iag-MuiInputBase-root-MuiInput-root:hover:not(.Mui-disabled):before {
    border: 0;
    outline: none;
  }
  & .css-1x51dt5-MuiInputBase-input-MuiInput-input.Mui-disabled {
    color: #303030;
    -webkit-text-fill-color: currentColor;
  }
`;

export const CurrencyExchange = styled.section`
  color: #303030;
  position: relative;

  & .inner {
    padding: 169px 0 66px;
  }

  & table {
    flex: 0 1 45%;
  }

  & .currency-description {
    color: #303030;
    font-size: 1rem;
    font-weight: normal;
    padding: 24px 0;
  }

  & .currency-name,
  & .currency-buy,
  & .currency-sell {
    font-size: 1.25rem !important;
    font-weight: 400;
  }

  & td,
  & th {
    border: none;
  }

  & .currency-name {
    font-weight: 600;
    padding-left: 0;
  }

  & .table-header {
    font-size: 0.75rem;
    font-weight: 400;

    padding-bottom: 7px;
  }

  & .currency-icon {
    text-align: center;
  }

  & .gray-row {
    background-color: #f2f2f2;
  }

  & ${Converter} {
    flex: 0 1 45%;
  }
`;
