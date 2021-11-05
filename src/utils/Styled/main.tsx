import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FormControl,
  FormControlLabel,
  Link,
  Select,
  Slider,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import styled from "styled-components";

import { SlideProps, PageLinkProps, TextProps } from "../types/PaddingProps";

export const PageWrapper = styled.div.attrs((props) => ({
  className: "App",
}))`
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

  @media (max-width: 480px) {
    overflow-x: hidden;
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

  @media (max-width: 480px) {
    flex-direction: column;
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
  @media (max-width: 480px) {
    display: none !important;
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

  @media (max-width: 480px) {
    & .header-social:first-child {
      display: none;
    }

    & ${FlexBox} {
      flex-direction: row;
    }

    & .logo-container {
      padding: 10px 0;
    }
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

  @media (max-width: 480px) {
    max-width: 300px;

    & ${HeaderSelect}, & ${HeaderSelect}.reverse {
      display: none;
    }

    nav {
      display: none;
    }
  }

  .card-carousel & {
    @media (min-width: 1920px) {
      max-width: 1278px;
    }
    @media (max-width: 1899px) {
      max-width: 1158px;
    }
    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;

export const PageLink = styled(Link)<PageLinkProps>`
  transition: 0.3s ease;
  &.header-link,
  &.header-social,
  &.nav-links {
    text-decoration: none;
    color: ${(p) => (p.activated ? "#9d2550" : "#303030")};
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
    color: ${(p) => (p.activated ? "#9d2550" : "#303030")};
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
    @media (max-width: 480px) {
      padding-top: 24px;
    }
  }
`;

export const VisualImage = styled.img`
  width: 454px !important;
  height: 397px;
  transform: translateY(-8%);
  object-fit: contain;

  @media (max-width: 480px) {
    transform: translateY(-50%);
    position: absolute;
    width: 140px !important;
    height: 140px;
    right: 0;
    top: 50%;
  }
`;

export const BannerDescription = styled.p`
  @media (max-width: 480px) {
    font-size: 1rem;
    padding-bottom: 26px;
    width: 157px;
    height: 94px;
  }
`;

export const Banner = styled.section`
  & .inner {
    color: #fff;
  }
  & .slider-wrapper {
    height: 400px !important;
    @media (max-width: 480px) {
      height: 297px !important;
    }
  }
  & .carousel.carousel-slider .control-arrow:hover {
    background: none;

    @media (max-width: 480px) {
      display: none;
    }
  }

  & .carousel .control-prev.control-arrow {
    left: 244px;
    width: 36px;

    @media (max-width: 1899px) {
      left: 106px;
    }

    @media (max-width: 480px) {
      display: none;
    }
  }
  & .carousel .control-next.control-arrow {
    right: 244px;
    width: 36px;

    @media (max-width: 1899px) {
      right: 106px;
    }
    @media (max-width: 480px) {
      display: none;
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

    @media (max-width: 480px) {
      position: absolute;
      top: 250px;
      display: table;
      max-width: 300px;
      margin: 0 auto;
      text-align: center;
      margin-left: -150px;
      left: 50%;
    }
  }
`;

export const Slide = styled.div<SlideProps>`
  background: ${(p) => (p.background ? p.background : "#F2F2F2")};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  & ${FlexBox} {
    align-items: flex-start;
    @media (max-width: 480px) {
      flex-direction: row;
    }
  }
  & .inner {
    padding: 31px 0;
    text-align: ${(p) => (p.textAlign ? p.textAlign : "left")} !important;
    color: ${(p) => (p.background ? "white" : "#303030")};
    font-weight: 300;
    min-height: 400px;
    @media (max-width: 480px) {
      min-height: 297px;
    }
  }

  & span {
    font-size: 0.75rem;

    @media (max-width: 480px) {
      display: none;
    }
  }

  & span > a {
    text-decoration: none;
    border-bottom: 1px dotted ${(p) => (p.background ? "white" : "#303030")};
    color: ${(p) => (p.background ? "white" : "#303030")};
  }

  & h3 {
    padding: 34px 0 24px 0;
    font-size: 3rem;
    margin: 0;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 1.5rem;
      font-weight: 500;
      padding: 0 0 19px;
    }
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
    background: ${(p) => (p.background ? "white" : "#9d2550")};
    color: ${(p) => (p.background ? "#9d2550" : "white")};
    transition: 0.3s linear;
    cursor: pointer;
    @media (max-width: 480px) {
      padding: 15px 23px;
    }
  }

  & button:hover {
    background: ${(p) => (p.background ? "#9d2550" : "white")};
    color: ${(p) => (p.background ? "white" : "#9d2550")};
  }

  &.card-carousel .inner {
    padding: 24px 0 0;
  }
`;

export const Navigation = styled.div`
  & .inner {
    padding: 19px 0;
  }

  @media (max-width: 480px) {
    display: none;
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
  padding: ${(p) => (p.padding ? p.padding : "0")};
  color: #1e2a41;
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "500")};
  ${(p) => p.textAlign && `text-align: ${p.textAlign}`}
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
    @media (max-width: 480px) {
      font-size: 0.875rem;
    }
  }

  & .period {
    @media (max-width: 480px) {
      padding-top: 24px !important;
    }
  }

  & .period h4 {
    padding: 20px 0 0;
    @media (max-width: 480px) {
      padding: 0;
    }
  }
`;

export const CalculatorForm = styled(FormControl)`
  && {
    display: block;

    .rcl {
      flex-direction: row;
      flex-wrap: wrap;
      padding: 0 0 16px;
    }
  }
`;

export const CalculatorContainer = styled.div`
  padding: 32px;
  background: #f2f2f2;
  border-radius: 4px;

  @media (max-width: 480px) {
    padding: 24px;
  }

  & .calculator-box {
    padding: 0 0 21px;
  }

  & .calculator-container {
    flex: 0 1 60%;
    border-right: 1px solid #e0e0e0;
    @media (max-width: 480px) {
      border-bottom: 1px solid #e0e0e0;
      border-right: none;
      padding-bottom: 24px;
    }
  }

  & .calculator-result {
    flex: 0 1 40%;
  }

  & .calculator-result .inner {
    padding: 29px 32px;
    @media (max-width: 480px) {
      padding: 35px 0 0;
    }
  }

  & .month-pay .description,
  & .reward-pay .description {
    font-size: 0.875rem;
    padding: 8px 0;

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
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
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }
  & .month-pay,
  & .reward-pay {
    @media (max-width: 480px) {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }

  & .slider-selection {
    font-size: 1.5rem;
    padding: 0 24px 0;
    flex: 0 1 15%;
    min-width: 210px;
    @media (max-width: 480px) {
      font-size: 0.9375rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding: 0;
      flex: none;
      min-width: 0;
    }
  }

  & ${FlexBox} .slider-selection {
    display: none;
    @media (max-width: 480px) {
      display: inline-block;
    }
  }
  & .slider-selection.selected {
    display: block;
    @media (max-width: 480px) {
      display: none;
    }
  }

  && .calculator-label {
    padding: 20px 0 0;
    font-size: 0.875rem;
    color: #737373;

    @media (max-width: 480px) {
      padding: 24px 0;
    }
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

    @media (max-width: 480px) {
      display: block;
      margin: 0 auto;
    }
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

    @media (max-width: 480px) {
      width: 260px;
    }
  }

  && .css-1eoe787-MuiSlider-markLabel {
    left: 0 !important;
    transform: none;
    color: #303030;
    font-size: 0.75rem;
  }

  && .css-yafthl-MuiSlider-markLabel,
  && .css-1eoe787-MuiSlider-markLabel[data-index="1"] {
    left: auto !important;
    right: 0;
    transform: none;
    color: #303030;
    font-size: 0.75rem;
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

  @media (max-width: 480px) {
    padding: 0;
  }

  && {
    font-size: 1rem;
    margin: 0;
  }

  && .css-ahj2mt-MuiTypography-root {
    padding: 0 16px;
    font-family: "Rubik", sans-serif;
    letter-spacing: normal;
  }
`;

export const LargeGapText = styled.p``;

export const InfoCard = styled.div`
  background: #f2f2f2;
  border-radius: 4px;

  padding: 32px;

  @media (max-width: 480px) {
    padding: 24px;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 24px;
    & .text h1 {
      max-width: 220px;
    }
  }
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

  & .btn-container {
    @media (max-width: 480px) {
      text-align: center;
    }
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

  & .btn-container.black-btn {
    @media (max-width: 480px) {
      padding-top: 24px;
      padding-bottom: 254px;
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
    @media (max-width: 480px) {
      background-position: center bottom;
    }
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

    @media (max-width: 480px) {
      position: relative;
      img {
        width: 240px;
        height: 170px;
        object-fit: contain;
        position: absolute;
        bottom: 50%;
        transform: translateY(-50%);
        right: 50%;
        margin-right: -120px;
      }
    }
  }

  & p {
    font-size: 1rem;

    min-height: 97px;
    transform: translateY(16px);
  }
  @media (max-width: 480px) {
    & ${LargeGapText} {
      min-height: 278px;
    }
  }
`;

export const Help = styled.section`
  & .inner {
    padding: 64px 0 168px;
    @media (max-width: 480px) {
      padding: 16px 0;
    }
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

    @media (max-width: 480px) {
      min-height: auto;
    }
  }

  & ${Title} {
    padding: 28px 0 16px;
  }
`;

export const PhoneAd = styled.section`
  background: #f2f2f2;

  @media (max-width: 480px) {
    max-width: 300px;
    margin: 0 auto;
    ${Title} {
      max-width: 90%;
    }
  }

  & .inner {
    padding: 48px 0;
    @media (max-width: 480px) {
      padding: 24px 12px;
    }
  }

  & ul {
    margin: 0;
    padding-top: 24px;
    padding-bottom: 25px;
    padding-inline-start: 20px;
  }

  & ul li {
    font-size: 1rem;
    padding-bottom: 16px;
  }

  & ul li:last-child {
    padding-bottom: 0;
  }

  & .apps-container {
    @media (max-width: 480px) {
      flex-direction: row;
      display: flex;
      justify-content: space-between;
      padding-bottom: 334px;

      & a {
        margin-right: 0 !important;
        height: 43px;
        img {
          height: 100%;
        }
      }
    }
  }

  & ${PageLink}:first-child {
    margin-right: 17px;
  }

  & .phone-ad-header {
    @media (max-width: 480px) {
      padding-right: 12px;
      padding-left: 12px;
    }
  }

  & .phone-ad-image {
    position: relative;
    left: -35%;
    img {
      position: absolute;

      top: 50%;
      transform: translateY(-50%);
      @media (max-width: 480px) {
        top: auto;
        bottom: -20%;
        transform: translateY(20%);
      }
    }
    @media (max-width: 480px) {
      left: auto;
      img {
        width: 176px;
        right: 50%;
        margin-right: -82px;
      }
    }
  }
`;

export const Converter = styled.div`
  background: #f2f2f2;
  padding: 24px 64px 32px;
  box-sizing: border-box;
  position: relative;

  & .convert-button {
    position: absolute;
    padding: 14px;
    background: #f2f2f2;
    border-radius: 50%;

    top: 50%;
    transform: translateY(-50%);
    left: -8%;
    @media (max-width: 480px) {
      padding: 7px;
    }

    button {
      border-radius: 50%;
      width: 67px;
      height: 67px;
      outline: none;
      border: none;
      background: #1e2a41;
      cursor: pointer;
      transition: .3s ease;

      @media (max-width: 480px) {
        width: 33px;
        height: 33px;
      }

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
        @media (max-width: 480px) {
          width: 15px;
          height: 15px;
          background-size: 15px 15px;
        }
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

  @media (max-width: 480px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ConverterInput = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 24px 0 8px;
  border-bottom: 1px solid #737373;

  @media (max-width: 480px) {
    flex-direction: column;
    border-bottom: none;
  }

  & input {
    font-size: 1.25rem;
    padding: 0;

    min-width: 235px;
    @media (max-width: 480px) {
      font-size: 1.125rem;
      border-bottom: 1px solid #737373;
    }
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

    @media (max-width: 480px) {
      padding-top: 10px;
      justify-content: flex-start;

      img {
        height: 16px;
        padding: 0 10px;
      }
      img:first-child {
        padding-left: 0;
      }
      img:last-child {
        padding-right: 0;
      }
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

  @media (max-width: 480px) {
    & ${Title} {
      font-size: 1.5rem;
    }
  }

  & .MuiTableCell-root {
    font-family: "Rubik", sans-serif;
  }

  & .inner {
    padding: 169px 0 66px;
  }

  & table {
    flex: 0 1 45%;
    @media (max-width: 480px) {
      margin-bottom: 28px;
    }
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
    @media (max-width: 480px) {
      padding: 24px 16px 24px 35px;

      width: 277px;
      margin: 0 0 0 auto;
      ${Title} {
        font-size: 1.125rem;
      }
    }
  }
`;

export const PageFooter = styled.footer`
  background: #f8f8f8;
  padding: 32px 0;

  @media (max-width: 480px) {
    padding: 8px 0 24px;
  }

  & .footer-upper {
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 48px;
    @media (max-width: 480px) {
      border-bottom: none;
      padding-bottom: 24px;
    }
  }

  & ${FlexBox} {
    .footer-item {
      width: 100%;
    }
    .footer-item.hidden {
      @media (max-width: 480px) {
        .link-container {
          display: none;
        }
      }
      ${Title} {
        :after {
          transform: rotate(0deg);
        }
      }
    }
  }

  & .lower-item,
  & .footer-icons {
    margin: 0 auto;
  }

  & .footer-icons {
    padding: 26px 0 42px;
  }

  & .footer-lower {
    padding: 24px 0 0;

    .text {
      padding-right: 67px;
      @media (max-width: 480px) {
        padding-right: 0;
      }
    }
    p {
      font-size: 0.875rem;
      color: #303030;
    }

    .footer-icons a {
      display: inline-block;
      padding: 0 32px;
      @media (max-width: 480px) {
        padding: 0 16px;
      }
    }

    button {
      background: #303030;
      border: none;
      border-box: 4px;
      outline: none;
      padding: 15px 16px;
      color: white;
      font-weight: 700;
      letter-spacing: 1.5px;
      cursor: pointer;

      :after {
        content: "";
        background: url(/images/icons/substract.svg);
        background-repeat: no-repeat;
        width: 23px;
        height: 17px;
        display: inline-block;
        vertical-align: middle;
        margin: 0 0 0 5px;
      }
    }
  }

  & ${FlexBox} {
    align-items: flex-start;

    .link-container {
      min-width: 213px;
      transition: 0.3s ease;
      overflow-y: hidden;
    }
  }

  & ${Title} {
    padding-bottom: 20px;
    @media (max-width: 480px) {
      display: flex;
      justify-content: space-between;
      align-items: center;

      :after {
        background: url(/images/icons/arrow.svg);
        transform: rotate(-180deg);
        content: "";
        display: block;
        width: 12px;
        height: 6px;
        background-size: 12px 6px;
      }
    }
  }

  & .footer-item ${Title} {
    @media (max-width: 480px) {
      padding: 16px 0;
      font-size: 0.875rem;
      :last-child {
        padding-bottom: 24px 0;
      }
    }
  }

  & ${PageLink} {
    display: block;
    padding-bottom: 16px;
    font-size: 0.875rem;
    text-decoration: none;
    color: #303030;
    font-weight: 400;

    :last-child {
      padding-bottom: 24px;
    }

    :hover {
      color: #9d2550;
      opacity: 1;
    }

    @media (max-width: 480px) {
      font-size: 0.75rem;
    }
  }

  & .big-link {
    font-weight: 500;
    color: #0e2b91;
    @media (max-width: 480px) {
      :first-child {
        text-align: center;
      }
    }
  }
`;

export const SwitchContainer = styled.div`
  @media (max-width: 480px) {
    display: none;
  }
`;
export const SwitchContainerMobile = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: block;
  }
`;

export const BurgerMenuIcon = styled(FontAwesomeIcon).attrs((props) => ({
  icon: faBars,
}))`
  display: none;

  @media (max-width: 480px) {
    display: inline-block;
    padding-right: 26px;
    font-size: 1.5rem;
    color: #9d2550;
  }
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  width: 75%;

  & ${HeaderSelect} {
    display: block !important;
  }

  &
    .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input,
  &
    .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding-right: 0;
    border-bottom: 1px solid #f2f2f2;
  }

  & .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input,
  & .css-jedpe8-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    padding: 14px 0;
  }
`;

export const ModalContainer = styled.div`
  width: 85%;
  padding: 25px 0;
  margin: 0 auto;
`;

export const ConditionsInfo = styled.div`
  text-align: center;

  & .inner {
    padding: 64px 0;
    width: 567px;
    margin: 0 auto;
  }
`;

export const Condition = styled.span<PageLinkProps>`
  flex: 0 1 30%;
  padding: 39px 17px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    background-image: ${(p) =>
      p.background ? `url(${p.background})` : "none"};
    content: "";
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    display: inline-block;
    vertical-align: middle;
    padding-right: 16px;
    background-repeat: no-repeat;
  }
`;

export const PlainText = styled.p<TextProps>`
  color: ${(p) => (p.color ? p.color : "#303030")};
  padding: ${(p) => (p.padding ? p.padding : "0")};
  font-size: ${(p) => (p.fontSize ? p.fontSize : "1rem")};
  font-weight: ${(p) => (p.fontWeight ? p.fontWeight : "normal")};
  ${(p) => (p.textAlign ? `text-align: ${p.textAlign};` : "")}
  &:after {
    transform: ${(p) => (p.activated ? "rotate(180deg)" : "rotate(0deg)")};
    background: ${(p) => (p.icon ? `url(${p.icon})` : "none")};
  }
`;

export const AdvantagesContainer = styled.div`
  & .inner {
    padding: 0 0 65px;
  }
`;

export const CollapsiblesContainer = styled.div`
  padding: 32px 0 0;

  & ${PlainText} {
    border-top: 1px solid #e0e0e0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :after {
      transition: 0.3s ease-out;
      display: inline-block;
      content: "";
      width: 12px;
      height: 6px;
    }
  }

  & .css-smkl36-MuiCollapse-wrapper {
    padding: 0 20px 20px;
  }
`;

export const ExpressContainer = styled.div`
  padding: 0 0 64px;
  & .inner {
    padding: 0;
    text-align: center;
  }
`;

export const ExpressSwitchContainer = styled.div`
  background: rgba(224, 224, 224, 0.6);
  padding: 16px 15px;
  box-sizing: border-box;
  & .css-j204z7-MuiFormControlLabel-root .MuiFormControlLabel-label {
    text-align: left;
  }

  & ${IncomeSwitch} {
    padding: 0px;
  }
`;

export const ExpressCalculatorContainer = styled.div`
  max-width: 868px;
  margin: 0 auto;
  background: #f2f2f2;
  box-sizing: border-box;
  padding: 40px 82px;

  & .slider-selection {
    display: none;
  }

  & ${CalculatorSlider} {
    flex: 0 1 100%;
  }

  & ${FlexBox} {
    padding: 0 0 8px;
  }
  & .currency-symbol {
    position: relative;
    display: inline;
    font-size: 1.5rem;

    span {
      position: absolute;
      top: 46%;
      right: 14px;
    }
  }

  & hr {
    margin: 40px 0 21px;
  }

  & .express-result {
    padding-right: 20px;
    width: 60%;
  }

  & .inner {
    text-align: left;
    .month-pay,
    .reward-pay {
      display: flex;
      justify-content: space-between;
      align-items: center;

      padding-bottom: 24px;
      font-size: 0.875rem;
      .result {
        font-size: 1.5rem;
        width: 142px;
        font-weight: 500;
      }
    }
    .reward-pay {
      padding-bottom: 0;
    }
  }
`;

export const ExpressInputContainer = styled(TextField)`
  & input {
    text-align: right;
    display: block;
    padding: 11px 36px 11px 9px;
    border: none;
    outline: none;
    max-width: 172px;
    background: #fff;
    font-size: 1.5rem;
  }
`;

export const PeriodButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & button {
    opacity: 0.4;
    background: #9d2550;
    color: #fff;
    border: none;
    outline: none;
    font-size: 1.125rem;
    padding: 9px 0;
    width: 70px;
    cursor: pointer;
    :hover {
      opacity: 0.2;
    }
  }

  & button.active {
    opacity: 1;
  }
`;
