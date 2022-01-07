import React from "react";
import styled from "styled-components";

import { device } from "../device";
import "../index.css";
import VerticalNav from "../components/VerticalNav";
import SmallArticle from "../components/SmallArticle";
import MobileNav from "../components/MobileNav";

const SectionWrap1 = styled.div`
  background: ${(props) => props.color};
  padding-left: 9%;
  padding-right: 9%;

  @media (max-width: 500px) {
    padding-left: 4%;
    padding-right: 4%;
  }
`;

const ArticlesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const GenderWrap = styled.div`
  padding-top: 7.5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Mens = styled.div`
  text-transform: uppercase;
  background: #c4d8e2;
  padding: 2vh 4vh 2vh 4vh;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  @media (max-width: 500px) {
    left: 0%;
    padding: 2vw;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0102c1;
      transform-origin: 100% 0;
      transform: skew(-10deg);
      z-index: -1;
    }
  }
  :hover {
    color: white;
    background-color: #cd4f27;
  }
`;

const Womens = styled.div`
    text-transform:uppercase;
    background: #C4D8E2;
    padding: 2vh 6vh 2vh 6vh;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    @media (max-width: 500px) {
        left:0%;
        padding:2vw;
        :after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color:#0102C1;
            transform-origin: 100% 0;
            transform: skew(-10deg);
            z-index: -1;
        }
    }
    :hover {
        color: white;
        background-color: #CD4F27;
        }
    }
`;

const NavWrap = styled.div`
  display: none;

  @media ${device.tablet} {
    display: inherit;
    padding-bottom: 4rem;
  }

  @media ${device.laptop} {
    padding-bottom: 3rem;
  }
`;

const MobileNavWrap = styled.div`
  display: inherit;

  @media ${device.tablet} {
    display: none;
  }
`;

const CoverWrapper = styled.div`
  background: url(https://cloudfront-us-east-1.images.arcpublishing.com/spectator/UQ4JFQMSONFXJHSBKTCU64BQGQ.png);
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 110vh;

  @media (max-width: 500px) {
    width: 100%;
    height: 40vh;
    margin-top: 25vw;
    background-size: cover !important;
  }

  @media (max-width: 768px) {
    height: 60vh;
  }

  @media (max-width: 1300px) {
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const TextWrap = styled.div`
  font-size: 7.375em;
  position: relative;
  top: 5%;
  font-weight: 900;
  left: 3%;
  color: #d2d2c0;
  font-style: italic;
  @media (max-width: 501px) {
    display: none;
  }
  @media (max-width: 768px) {
    font-size: 5em;
  }
`;

const TextWrapMobile = styled.div`
  font-size: 2.5em;
  position: relative;
  color: white;
  font-style: italic;
  height: auto;
  font-weight: 900;
  letter-spacing: 1px;
  div {
    position: relative;
    display: inline-block;
    padding: 0.5em 0.5em 0.5em 0.25em;
    overflow: hidden;
    color: #fff;
  }

  @media (min-width: 500px) {
    display: none;
  }
`;

const PartOneText = styled.div`
  #text-transform: uppercase;
  @media (max-width: 500px) {
    left: 0%;
    padding: 2vw;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0102c1;
      transform-origin: 100% 0;
      transform: skew(-10deg);
      z-index: -1;
    }
  }
`;

const PartTwoText = styled.div`
  margin-left: 3vh;
  margin-top: 2vh;
  #text-transform: uppercase;
  @media (max-width: 500px) {
    float: right;
    margin-top: 0vh;
    padding: 2vw;
    :after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0102c1;
      transform-origin: 0% 100%;
      transform: skew(-10deg);
      z-index: -1;
    }
  }
`;

const Section = ({ id, articles, color }) => {
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [isMobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    if (dimensions.width < 500) setMobile(true);

    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
      if (window.innerWidth < 500) setMobile(true);
      else setMobile(false);
    }

    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <MobileNav current={id} />
      <TextWrapMobile>
        <PartOneText>basketball</PartOneText>
        <PartTwoText>title edition</PartTwoText>
      </TextWrapMobile>
      <CoverWrapper id="home">
        <TextWrap>
          <PartOneText>basketball</PartOneText>
          <PartTwoText>title edition</PartTwoText>
        </TextWrap>
      </CoverWrapper>
      <GenderWrap>
        <Mens>Men's Basketball</Mens>
        <Womens>Women's Basketball</Womens>
      </GenderWrap>
      <SectionWrap1 id={id} color={color}>
          <ArticlesWrap>
            {articles.map((article) => {
              return <SmallArticle article={article} />;
            })}
          </ArticlesWrap>
        <NavWrap>
          <VerticalNav color="#251282" current={id} />
        </NavWrap>
      </SectionWrap1>
    </div>
  );
};

export default Section;
