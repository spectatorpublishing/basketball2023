import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

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
  display: flex;
  flex-direction: colum;
  justify-content: space-evenly;
  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 5vw;
    @media (max-width: 500px) {
        width:100%;
        margin-left:0;
        margin-right:0;
        margin-top:7vw;
    }
`;

const Filter = styled.div`
  text-transform: uppercase;
  color: ${props => props.current ? 'white' : '#555555'};
  background-color: ${props => props.current ? '#cd4f27' : '#c4d8e2'};
  font-weight: bold;
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

const ImageWrap = styled.div`
    z-index:10;
    width: inherit;
    max-height: 20rem;
    transition-duration:1s;
    position: relative;
    :after {
        content:'';
        position:absolute;
        left:0; top:0;
        width:100%; height:100%;
        display:inline-block;
        transition-duration:1s;
        z-index:5;
        opacity:1;
        background: linear-gradient(rgba(1, 2, 193, 0.29),rgba(1, 2, 193, 0.29));
    }
    :hover::after {
        transition-duration:1s;
        opacity:0;
    }
`;

const Section = ({ id, articles, color, current }) => {
    console.log(id)
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
        <Link style={{ textDecoration: 'none' }} to="/mens">
          <Filter current={current === "mens"}>Men's Basketball</Filter>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/womens">
          <Filter href="/womens" current={current === "womens"}>Women's Basketball</Filter>
        </Link>

        
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
