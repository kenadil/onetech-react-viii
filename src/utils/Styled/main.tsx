import { Link, Select } from "@mui/material";
import styled from "styled-components";
import { BannerSlideProps } from "../types/PaddingProps";

export const PageWrapper = styled.div`
  min-height: 100%;

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
`;

export const Container = styled.div`
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 1220px;
  }

  @media (max-width: 1899px) {
    max-width: 1100px;
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

export const PageLink = styled(Link)`
  transition: 0.3s ease;
  &.header-link,
  &.header-social {
    text-decoration: none;
    color: #303030;
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
  & > span {
    color: #303030;
    font-weight: 400;
    text-decoration: none;
    font-size: 0.875rem;
    padding-left: 5px;
  }
  &:hover {
    opacity: 0.5;
  }

  .jscfe > &:first-child {
    padding-right: 47px;
  }
`;

export const Banner = styled.section`
  & .slider-wrapper {
    height: 400px !important;
  }
  & .carousel.carousel-slider .control-arrow:hover {
    background: none;
  }

  & .carousel .control-prev.control-arrow {
    left: 50px;
    width: 36px;
  }
  & .carousel .control-next.control-arrow {
    right: 50px;
    width: 36px;
  }

  & .carousel.carousel-slider .control-arrow.control-prev:before {
    background-image: url(/images/arrows/arrowLeft.svg);
    display: block;
    content: "";
    background-size: 28px 28px;
    height: 28px;
    width: 28px;
    margin: 0;
    border: none;
  }

  & .carousel.carousel-slider .control-arrow.control-next:before {
    background-image: url(/images/arrows/arrowRight.svg);

    display: block;
    content: "";
    background-size: 28px 28px;
    height: 28px;
    width: 28px;
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
    bottom: 33px;

    @media (max-width: 1899px) {
      left: 209px;
    }

    @media (min-width: 1900px) {
      left: 342px;
    }
  }
`;

export const BannerSlide = styled.div<BannerSlideProps>`
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
`;
