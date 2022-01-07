import React from "react";
import styled from "styled-components";

import { device } from "../device";
import "../index.css";
import SmallArticle from '../components/SmallArticle';
import Heading from './Heading';

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
  padding-top: 3vh;
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
      <Heading/>
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
      </SectionWrap1>
    </div>
  );
};

export default Section;
